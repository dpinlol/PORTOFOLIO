import * as THREE from "three";
import { projects } from "../data/projects";
import { createArtwork, type Artwork } from "./artwork";
import { createEasel, type Easel } from "./easel";
import { createGallery, type Gallery } from "./gallery";
import { clamp, damp, sampleCamera, segment, type CameraKey } from "./math";
import { createStudio, type Studio } from "./studio";
import {
  linenTexture,
  loadImage,
  portraitTexture,
  projectTexture,
} from "./textures";

export type ExperienceOptions = {
  canvas: HTMLCanvasElement;
  reducedMotion: boolean;
  onProgress?: (progress: number) => void;
  onHover?: (index: number | null) => void;
  onOpenProject?: (index: number) => void;
  onReady?: () => void;
};

type PointerState = {
  x: number;
  y: number;
  smoothX: number;
  smoothY: number;
  downX: number;
  downY: number;
  downTime: number;
  downId: number;
};

function buildCameraKeys(mobile: boolean): CameraKey[] {
  if (mobile) {
    return [
      { at: 0, position: [0, 0.28, 13.6], target: [0, 0.3, 0], fov: 32 },
      { at: 0.16, position: [0, 0.2, 12.3], target: [0, 0.24, 0], fov: 32 },
      { at: 0.33, position: [0, 0.1, 11.6], target: [0, 0.1, 0], fov: 33 },
      { at: 0.46, position: [0, -1.15, 13.6], target: [0, -1.15, 0], fov: 33 },
      { at: 0.62, position: [0, -1.12, 13.3], target: [0, -1.12, 0], fov: 33 },
      { at: 0.71, position: [0, 0.2, 11.8], target: [0, 0.15, 0], fov: 34 },
      { at: 0.86, position: [0, 0.65, 11.5], target: [0, 0.65, 0], fov: 46 },
      { at: 1, position: [0, 0.65, 11.0], target: [0, 0.65, 0], fov: 46 },
    ];
  }

  return [
    { at: 0, position: [0, 0.3, 10.8], target: [0, 0.14, 0], fov: 32 },
    { at: 0.16, position: [0, 0.2, 9.3], target: [0, 0.14, 0], fov: 32 },
    { at: 0.33, position: [-0.95, 0.04, 9.2], target: [-0.95, 0.02, 0], fov: 33 },
    { at: 0.46, position: [-1.3, -0.04, 8.8], target: [-1.3, -0.04, 0], fov: 33 },
    { at: 0.62, position: [-1.28, -0.04, 8.6], target: [-1.28, -0.04, 0], fov: 33 },
    { at: 0.71, position: [0, 0.24, 9.6], target: [0, 0.16, 0], fov: 34 },
    { at: 0.86, position: [0, 0.46, 11.6], target: [0, 0.12, 0], fov: 34 },
    { at: 1, position: [0, 0.5, 11.1], target: [0, 0.12, 0], fov: 34 },
  ];
}

export class Experience {
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly studio: Studio;
  private readonly easel: Easel;
  private readonly mainArtwork: Artwork;
  private readonly mainGroup: THREE.Group;
  private readonly gallery: Gallery;
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointerNdc = new THREE.Vector2();
  private readonly clock = new THREE.Clock();
  private readonly options: ExperienceOptions;

  private cameraKeys: CameraKey[];
  private mobile: boolean;
  private targetProgress = 0;
  private currentProgress = 0;
  private reducedMotion: boolean;
  private hovered: number | null = null;
  private pointer: PointerState = {
    x: 0,
    y: 0,
    smoothX: 0,
    smoothY: 0,
    downX: 0,
    downY: 0,
    downTime: 0,
    downId: -1,
  };

  private active = true;
  private running = false;
  private frameId = 0;
  private destroyed = false;
  private ready = false;
  private lastReported = -1;
  private hoverLightLevel = 0;
  private resizeTimer = 0;

  private constructor(
    options: ExperienceOptions,
    resources: {
      renderer: THREE.WebGLRenderer;
      scene: THREE.Scene;
      camera: THREE.PerspectiveCamera;
      studio: Studio;
      easel: Easel;
      mainArtwork: Artwork;
      mainGroup: THREE.Group;
      gallery: Gallery;
    },
  ) {
    this.options = options;
    this.canvas = options.canvas;
    this.renderer = resources.renderer;
    this.scene = resources.scene;
    this.camera = resources.camera;
    this.studio = resources.studio;
    this.easel = resources.easel;
    this.mainArtwork = resources.mainArtwork;
    this.mainGroup = resources.mainGroup;
    this.gallery = resources.gallery;
    this.reducedMotion = options.reducedMotion;
    this.mobile = window.innerWidth < 860;
    this.cameraKeys = buildCameraKeys(this.mobile);

    this.bind();
    this.resize();
    this.applyProgress(0, 0, true);
    this.renderer.render(this.scene, this.camera);
    this.ready = true;
    this.options.onReady?.();
    this.start();
  }

  static async create(options: ExperienceOptions): Promise<Experience> {
    const renderer = new THREE.WebGLRenderer({
      canvas: options.canvas,
      antialias: true,
      alpha: false,
      stencil: false,
      powerPreference: "high-performance",
    });
    const mobile = window.innerWidth < 860;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x211f1b);
    scene.fog = new THREE.Fog(0x211f1b, 13, 30);

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 80);

    const anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), mobile ? 4 : 8);
    const linen = linenTexture(anisotropy);
    const portrait = portraitTexture(anisotropy);
    const studio = createStudio(anisotropy, mobile);
    const easel = createEasel(anisotropy);

    const imageEntries = await Promise.all(
      projects.map(async (project) => {
        if (project.preview.kind !== "image") return [project.slug, undefined] as const;
        const image = await loadImage(project.preview.src);
        return [project.slug, image] as const;
      }),
    );
    const images = new Map(imageEntries);

    const projectTextures = projects.map((project) =>
      projectTexture(project, images.get(project.slug), anisotropy),
    );

    const mainArtwork = createArtwork({
      width: 2.8,
      height: 3.5,
      depth: 0.11,
      baseTexture: linen,
      topTexture: portrait,
      previewTexture: portrait,
      linenTexture: linen,
    });
    const mainGroup = new THREE.Group();
    mainGroup.position.set(0, 0.35, 0);
    mainGroup.add(mainArtwork.mesh);

    const gallery = createGallery(projects, projectTextures, portrait, linen);

    scene.add(studio.group);
    scene.add(easel.group);
    scene.add(mainGroup);
    scene.add(gallery.group);

    const experience = new Experience(options, {
      renderer,
      scene,
      camera,
      studio,
      easel,
      mainArtwork,
      mainGroup,
      gallery,
    });
    return experience;
  }

  private bind(): void {
    this.canvas.addEventListener("pointermove", this.onPointerMove, { passive: true });
    this.canvas.addEventListener("pointerleave", this.onPointerLeave);
    this.canvas.addEventListener("pointerdown", this.onPointerDown, { passive: true });
    this.canvas.addEventListener("pointerup", this.onPointerUp);
    this.canvas.addEventListener("pointercancel", this.onPointerLeave);
    document.addEventListener("visibilitychange", this.onVisibility);
    window.addEventListener("resize", this.onResize, { passive: true });
  }

  private onPointerMove = (event: PointerEvent): void => {
    const rect = this.canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    this.pointer.x = clamp(x, -1, 1);
    this.pointer.y = clamp(y, -1, 1);
    this.pointerNdc.set(this.pointer.x, this.pointer.y);
    if (event.pointerType !== "touch") this.updateHover();
  };

  private onPointerLeave = (): void => {
    this.setHovered(null);
    this.pointer.x = 0;
    this.pointer.y = 0;
    this.pointerNdc.set(0, 0);
  };

  private onPointerDown = (event: PointerEvent): void => {
    this.pointer.downX = event.clientX;
    this.pointer.downY = event.clientY;
    this.pointer.downTime = performance.now();
    this.pointer.downId = event.pointerId;
  };

  private onPointerUp = (event: PointerEvent): void => {
    if (this.pointer.downId !== event.pointerId) return;
    const distance = Math.hypot(event.clientX - this.pointer.downX, event.clientY - this.pointer.downY);
    const elapsed = performance.now() - this.pointer.downTime;

    if (this.currentProgress < 0.88 || distance > 14 || elapsed > 900) return;

    const index = this.raycastProject(event.clientX, event.clientY);
    if (index !== null) this.options.onOpenProject?.(index);
  };

  private onVisibility = (): void => {
    if (document.hidden) this.stop();
    else if (this.active) this.start();
  };

  private onResize = (): void => {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => this.resize(), 120);
  };

  private updateHover(): void {
    if (this.currentProgress < 0.88) {
      this.setHovered(null);
      return;
    }
    const rect = this.canvas.getBoundingClientRect();
    const clientX = rect.left + ((this.pointer.x + 1) / 2) * rect.width;
    const clientY = rect.top + ((-this.pointer.y + 1) / 2) * rect.height;
    this.setHovered(this.raycastProject(clientX, clientY));
  }

  private raycastProject(clientX: number, clientY: number): number | null {
    const rect = this.canvas.getBoundingClientRect();
    this.pointerNdc.set(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -(((clientY - rect.top) / rect.height) * 2 - 1),
    );
    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const visibleMeshes = this.gallery.meshes.filter((mesh) => mesh.parent?.visible === true);
    const hits = this.raycaster.intersectObjects(visibleMeshes, false);
    const first = hits[0];
    if (!first) return null;
    const index = first.object.userData.projectIndex;
    return typeof index === "number" ? index : null;
  }

  private setHovered(index: number | null): void {
    if (this.hovered === index) return;
    this.hovered = index;
    this.gallery.setHover(index);
    this.options.onHover?.(index);
  }

  setProgress(value: number): void {
    this.targetProgress = clamp(value);
    if (this.reducedMotion) {
      this.currentProgress = this.targetProgress;
      this.applyProgress(this.currentProgress, 0, true);
    }
  }

  setReducedMotion(reduced: boolean): void {
    this.reducedMotion = reduced;
    if (reduced) {
      this.currentProgress = this.targetProgress;
      this.applyProgress(this.currentProgress, 0, true);
    }
  }

  highlightProject(index: number | null): void {
    if (this.currentProgress < 0.86) return;
    this.setHovered(index);
  }

  clearHighlight(): void {
    this.setHovered(null);
  }

  setActive(active: boolean): void {
    this.active = active;
    if (active) {
      this.start();
    } else {
      this.setHovered(null);
      this.stop();
    }
  }

  private resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const mobile = width < 860;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75);

    this.mobile = mobile;
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.cameraKeys = buildCameraKeys(mobile);
    this.gallery.setMobile(mobile);
    this.applyProgress(this.currentProgress, 0, true);
    if (this.ready) this.renderer.render(this.scene, this.camera);
  }

  private start(): void {
    if (this.running || this.destroyed) return;
    this.running = true;
    this.clock.start();
    this.frameId = requestAnimationFrame(this.frame);
  }

  private stop(): void {
    this.running = false;
    cancelAnimationFrame(this.frameId);
  }

  private applyProgress(progress: number, dt: number, immediate = false): void {
    const reveal = segment(progress, 0.26, 0.5);
    this.mainArtwork.uniforms.uReveal.value = reveal;

    const mainFade = segment(progress, 0.665, 0.74);
    const mainOpacity = 1 - mainFade;
    this.mainArtwork.materials.forEach((material) => {
      material.opacity = mainOpacity;
    });
    this.mainArtwork.front.emissiveIntensity = 0;
    this.mainGroup.visible = mainOpacity > 0.004;
    this.easel.setOpacity(mainOpacity);

    this.gallery.group.visible = progress > 0.64;
    this.gallery.update(progress, dt, this.clock.elapsedTime, this.reducedMotion);

    const pose = sampleCamera(this.cameraKeys, progress);
    const parallax = this.reducedMotion ? 0 : 0.12;
    this.pointer.smoothX = damp(this.pointer.smoothX, this.pointer.x, 4, immediate ? 1 : dt);
    this.pointer.smoothY = damp(this.pointer.smoothY, this.pointer.y, 4, immediate ? 1 : dt);

    this.camera.position.set(
      pose.position[0] + this.pointer.smoothX * parallax,
      pose.position[1] + this.pointer.smoothY * parallax * 0.55,
      pose.position[2],
    );
    this.camera.lookAt(pose.target[0], pose.target[1], pose.target[2]);
    if (Math.abs(this.camera.fov - pose.fov) > 0.01) {
      this.camera.fov = pose.fov;
      this.camera.updateProjectionMatrix();
    }

    // A single warm light follows the hovered canvas.
    if (this.hovered !== null) {
      const entry = this.gallery.getEntry(this.hovered);
      if (entry) {
        this.studio.hoverLight.position.set(
          entry.group.position.x,
          entry.group.position.y + 0.35,
          entry.group.position.z + 1.2,
        );
      }
    }
    const targetLevel = this.hovered !== null && progress > 0.88 ? 17 : 0;
    this.hoverLightLevel = immediate
      ? targetLevel
      : damp(this.hoverLightLevel, targetLevel, 6, dt);
    this.studio.hoverLight.intensity = this.hoverLightLevel;

    if (
      !this.ready ||
      Math.abs(progress - this.lastReported) > 0.0015 ||
      progress === this.targetProgress
    ) {
      this.lastReported = progress;
      this.options.onProgress?.(progress);
    }
  }

  private frame = (): void => {
    if (!this.running) return;
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;

    if (!this.reducedMotion) {
      this.currentProgress = damp(this.currentProgress, this.targetProgress, 6.5, dt);
      if (Math.abs(this.currentProgress - this.targetProgress) < 0.0004) {
        this.currentProgress = this.targetProgress;
      }
    } else {
      this.currentProgress = this.targetProgress;
    }

    this.applyProgress(this.currentProgress, dt);
    this.studio.update(time);

    if (!this.reducedMotion && this.currentProgress > 0.88 && this.pointer.x !== 0) {
      this.updateHover();
    }

    this.renderer.render(this.scene, this.camera);
    this.frameId = requestAnimationFrame(this.frame);
  };

  destroy(): void {
    this.destroyed = true;
    this.stop();
    this.canvas.removeEventListener("pointermove", this.onPointerMove);
    this.canvas.removeEventListener("pointerleave", this.onPointerLeave);
    this.canvas.removeEventListener("pointerdown", this.onPointerDown);
    this.canvas.removeEventListener("pointerup", this.onPointerUp);
    this.canvas.removeEventListener("pointercancel", this.onPointerLeave);
    document.removeEventListener("visibilitychange", this.onVisibility);
    window.removeEventListener("resize", this.onResize);
    window.clearTimeout(this.resizeTimer);
    this.renderer.dispose();
  }
}
