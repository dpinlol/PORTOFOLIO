import * as THREE from "three";
import type { Project } from "../data/projects";
import { createArtwork, type Artwork } from "./artwork";
import { damp, lerp, segment, smoothstep } from "./math";

type Slot = {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  scale: number;
  phase: number;
};

type Entry = {
  project: Project;
  artwork: Artwork;
  group: THREE.Group;
  slot: Slot;
  hover: number;
  current: {
    position: THREE.Vector3;
    rotation: THREE.Euler;
    scale: number;
  };
};

export type Gallery = {
  group: THREE.Group;
  meshes: THREE.Mesh[];
  update: (progress: number, dt: number, time: number, reduced: boolean) => void;
  setHover: (index: number | null) => void;
  getEntry: (index: number) => Entry | undefined;
  setMobile: (mobile: boolean) => void;
};

const MAIN_CENTER = new THREE.Vector3(0, 0.35, 0);
const MAIN_SCALE = 1;

function desktopSlots(compact: boolean): Slot[] {
  const spread = compact ? 0.86 : 1;
  const outerScale = compact ? 0.44 : 0.5;
  const sideScale = compact ? 0.49 : 0.55;
  const centerScale = compact ? 0.53 : 0.6;
  return [
    {
      position: new THREE.Vector3(-4.9 * spread, 0.16, -0.55),
      rotation: new THREE.Euler(-0.02, 0.32, 0.012),
      scale: outerScale,
      phase: 0.4,
    },
    {
      position: new THREE.Vector3(-2.45 * spread, -0.28, 0.12),
      rotation: new THREE.Euler(0.018, 0.16, -0.008),
      scale: sideScale,
      phase: 2.1,
    },
    {
      position: new THREE.Vector3(0, 0.12, 0.8),
      rotation: new THREE.Euler(-0.014, 0, 0.004),
      scale: centerScale,
      phase: 4.2,
    },
    {
      position: new THREE.Vector3(2.45 * spread, -0.28, 0.12),
      rotation: new THREE.Euler(0.018, -0.16, 0.008),
      scale: sideScale,
      phase: 1.2,
    },
    {
      position: new THREE.Vector3(4.9 * spread, 0.16, -0.55),
      rotation: new THREE.Euler(-0.02, -0.32, -0.012),
      scale: outerScale,
      phase: 3.4,
    },
  ];
}

function mobileSlots(): Slot[] {
  return [
    {
      position: new THREE.Vector3(-0.9, 2.25, 0.1),
      rotation: new THREE.Euler(0.02, 0.09, 0.01),
      scale: 0.46,
      phase: 0.6,
    },
    {
      position: new THREE.Vector3(0.9, 2.25, 0.05),
      rotation: new THREE.Euler(0.02, -0.09, -0.01),
      scale: 0.46,
      phase: 2.4,
    },
    {
      position: new THREE.Vector3(-0.9, 0.15, 0.32),
      rotation: new THREE.Euler(0.01, 0.07, 0.008),
      scale: 0.48,
      phase: 4.1,
    },
    {
      position: new THREE.Vector3(0.9, 0.15, 0.32),
      rotation: new THREE.Euler(0.01, -0.07, -0.008),
      scale: 0.48,
      phase: 1.6,
    },
    {
      position: new THREE.Vector3(0, -1.5, 0.35),
      rotation: new THREE.Euler(-0.01, 0, 0),
      scale: 0.47,
      phase: 3.2,
    },
  ];
}

export function createGallery(
  projects: Project[],
  textures: THREE.Texture[],
  portrait: THREE.Texture,
  linen: THREE.Texture,
): Gallery {
  const group = new THREE.Group();
  const entries: Entry[] = [];
  const meshes: THREE.Mesh[] = [];
  let slots = desktopSlots(false);

  projects.forEach((project, index) => {
    const texture = textures[index];
    if (!texture) return;

    const artwork = createArtwork({
      width: 2.8,
      height: 3.5,
      depth: 0.11,
      baseTexture: texture,
      topTexture: portrait,
      previewTexture: texture,
      linenTexture: linen,
    });

    // The split clones begin fully painted with the portrait.
    artwork.uniforms.uReveal.value = 1;
    artwork.uniforms.uPreviewMix.value = 0;

    const canvasGroup = new THREE.Group();
    canvasGroup.add(artwork.mesh);
    canvasGroup.visible = false;
    group.add(canvasGroup);

    const entry: Entry = {
      project,
      artwork,
      group: canvasGroup,
      slot: slots[index]!,
      hover: 0,
      current: {
        position: new THREE.Vector3(0, 0.35, 0),
        rotation: new THREE.Euler(0, 0, 0),
        scale: 1,
      },
    };
    meshes.push(artwork.mesh);
    artwork.mesh.userData.projectIndex = index;
    entries.push(entry);
  });

  const setMobile = (value: boolean): void => {
    slots = value ? mobileSlots() : desktopSlots(window.innerWidth < 1100);
    entries.forEach((entry, index) => {
      entry.slot = slots[index] ?? slots[slots.length - 1]!;
    });
  };

  setMobile(window.innerWidth < 860);

  const setHover = (index: number | null): void => {
    entries.forEach((entry, i) => {
      entry.artwork.mesh.userData.hovered = i === index;
    });
  };

  const update = (progress: number, dt: number, time: number, reduced: boolean): void => {
    const floatMix = smoothstep(0.9, 1, progress);
    const interactive = smoothstep(0.885, 0.94, progress);

    entries.forEach((entry, index) => {
      const splitStart = 0.655 + index * 0.005;
      const splitEnd = 0.885;
      const local = segment(progress, splitStart, splitEnd);
      const slot = entry.slot;

      const arc = Math.sin(local * Math.PI);

      const targetPosition = new THREE.Vector3(
        lerp(MAIN_CENTER.x, slot.position.x, local) + arc * (index - 2) * 0.11,
        lerp(MAIN_CENTER.y, slot.position.y, local) + arc * 0.16,
        lerp(MAIN_CENTER.z, slot.position.z, local) + arc * 0.32,
      );

      const targetScale = lerp(MAIN_SCALE, slot.scale, local) * (1 + entry.hover * 0.09);

      const targetRotation = new THREE.Euler(
        lerp(0, slot.rotation.x, local) * (1 - entry.hover),
        lerp(0, slot.rotation.y, local) * (1 - entry.hover),
        slot.rotation.z,
      );

      // hover only exists once the canvases have settled
      const hoverTarget = entry.artwork.mesh.userData.hovered === true ? interactive : 0;
      entry.hover = reduced ? hoverTarget : damp(entry.hover, hoverTarget, 9, dt);

      if (entry.hover > 0.01) {
        targetPosition.z += entry.hover * 0.5;
        targetPosition.y += entry.hover * 0.06;
      }

      if (!reduced && floatMix > 0.001) {
        targetPosition.x += Math.sin(time * 0.42 + slot.phase) * 0.012 * floatMix;
        targetPosition.y += Math.sin(time * 0.56 + slot.phase * 1.3) * 0.032 * floatMix;
        targetRotation.z += Math.sin(time * 0.38 + slot.phase) * 0.007 * floatMix;
      }

      const positionLambda = reduced ? 1000 : 8;
      const rotationLambda = reduced ? 1000 : 7;
      entry.current.position.x = damp(entry.current.position.x, targetPosition.x, positionLambda, dt);
      entry.current.position.y = damp(entry.current.position.y, targetPosition.y, positionLambda, dt);
      entry.current.position.z = damp(entry.current.position.z, targetPosition.z, positionLambda, dt);
      entry.current.rotation.x = damp(entry.current.rotation.x, targetRotation.x, rotationLambda, dt);
      entry.current.rotation.y = damp(entry.current.rotation.y, targetRotation.y, rotationLambda, dt);
      entry.current.rotation.z = damp(entry.current.rotation.z, targetRotation.z, rotationLambda, dt);
      entry.current.scale = damp(entry.current.scale, targetScale, positionLambda, dt);

      entry.group.position.copy(entry.current.position);
      entry.group.rotation.copy(entry.current.rotation);
      entry.group.scale.setScalar(entry.current.scale);

      const mix = segment(progress, 0.72 + index * 0.011, 0.865);
      entry.artwork.uniforms.uPreviewMix.value = mix;
      entry.artwork.front.emissiveIntensity = entry.hover * 0.16;
      entry.artwork.side.emissiveIntensity = entry.hover * 0.06;

      entry.group.visible = progress > 0.648;
    });
  };

  return {
    group,
    meshes,
    update,
    setHover,
    getEntry: (index: number) => entries[index],
    setMobile,
  };
}
