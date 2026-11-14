import * as THREE from "three";

export type ArtworkUniforms = {
  uReveal: THREE.IUniform<number>;
  uPreviewMix: THREE.IUniform<number>;
  uTop: THREE.IUniform<THREE.Texture>;
  uPreview: THREE.IUniform<THREE.Texture>;
  uTopOpacity: THREE.IUniform<number>;
};

export type Artwork = {
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial[]>;
  materials: THREE.MeshStandardMaterial[];
  front: THREE.MeshStandardMaterial;
  side: THREE.MeshStandardMaterial;
  uniforms: ArtworkUniforms;
};

export type ArtworkOptions = {
  width: number;
  height: number;
  depth?: number;
  baseTexture: THREE.Texture;
  topTexture: THREE.Texture;
  previewTexture: THREE.Texture;
  linenTexture: THREE.Texture;
};

const VERTEX_DECLARATION = /* glsl */ `
  varying vec2 vArtUv;
`;

const FRAGMENT_DECLARATION = /* glsl */ `
  uniform float uReveal;
  uniform float uPreviewMix;
  uniform sampler2D uTop;
  uniform sampler2D uPreview;
  uniform float uTopOpacity;
  varying vec2 vArtUv;

  float artHash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
`;

const PAINT_CHUNK = /* glsl */ `
  #include <map_fragment>

  vec4 topSample = texture2D(uTop, vArtUv);
  float bristle = artHash(floor(vArtUv * vec2(190.0, 26.0)));
  float speckle = artHash(floor(vArtUv * vec2(58.0, 58.0)));
  float field = (1.0 - vArtUv.y) + (bristle - 0.5) * 0.05 + (speckle - 0.5) * 0.018;
  float front = uReveal * 1.2 - 0.1;
  float reveal = 1.0 - smoothstep(front - 0.14, front + 0.02, field);
  reveal *= topSample.a * uTopOpacity;

  vec3 painted = mix(diffuseColor.rgb, topSample.rgb, reveal);
  vec3 next = texture2D(uPreview, vArtUv).rgb;
  diffuseColor.rgb = mix(painted, next, uPreviewMix);
`;

function makeFrontMaterial(options: ArtworkOptions): Artwork {
  const { baseTexture, topTexture, previewTexture } = options;

  const uniforms: ArtworkUniforms = {
    uReveal: { value: 0 },
    uPreviewMix: { value: 0 },
    uTop: { value: topTexture },
    uPreview: { value: previewTexture },
    uTopOpacity: { value: 1 },
  };

  const front = new THREE.MeshStandardMaterial({
    map: baseTexture,
    roughness: 0.9,
    metalness: 0,
    emissive: new THREE.Color(0xc8a37a),
    emissiveIntensity: 0,
  });

  front.transparent = true;
  front.onBeforeCompile = (shader) => {
    shader.uniforms.uReveal = uniforms.uReveal;
    shader.uniforms.uPreviewMix = uniforms.uPreviewMix;
    shader.uniforms.uTop = uniforms.uTop;
    shader.uniforms.uPreview = uniforms.uPreview;
    shader.uniforms.uTopOpacity = uniforms.uTopOpacity;

    shader.vertexShader = VERTEX_DECLARATION + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <uv_vertex>",
      "#include <uv_vertex>\n  vArtUv = uv;",
    );
    shader.fragmentShader = FRAGMENT_DECLARATION + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <map_fragment>",
      PAINT_CHUNK,
    );
  };
  front.customProgramCacheKey = () => "art-of-becoming-canvas";

  const side = new THREE.MeshStandardMaterial({
    map: options.linenTexture,
    color: 0xe3d6c2,
    roughness: 0.96,
    metalness: 0,
  });
  side.transparent = true;

  const back = new THREE.MeshStandardMaterial({
    color: 0x4a3c2c,
    roughness: 0.92,
    metalness: 0,
  });
  back.transparent = true;

  const width = options.width;
  const height = options.height;
  const depth = options.depth ?? 0.11;

  const geometry = new THREE.BoxGeometry(width, height, depth);

  // BoxGeometry face order: +x, -x, +y, -y, +z, -z. The painting faces +z.
  const materials = [side, side, side, side, front, back];
  const mesh = new THREE.Mesh(geometry, materials);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  return { mesh, materials, front, side, uniforms };
}

export function createArtwork(options: ArtworkOptions): Artwork {
  return makeFrontMaterial(options);
}
