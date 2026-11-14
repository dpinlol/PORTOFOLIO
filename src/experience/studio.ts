import * as THREE from "three";
import { mulberry32 } from "./math";
import { wallTexture } from "./textures";

export type Studio = {
  group: THREE.Group;
  keyLight: THREE.SpotLight;
  hoverLight: THREE.PointLight;
  update: (time: number) => void;
};

export function createStudio(anisotropy: number, mobile: boolean): Studio {
  const group = new THREE.Group();

  const wall = new THREE.Mesh(
    new THREE.PlaneGeometry(54, 26),
    new THREE.MeshStandardMaterial({
      map: wallTexture(anisotropy),
      color: 0x8a8378,
      roughness: 1,
      metalness: 0,
    }),
  );
  wall.position.set(0, 4.2, -8.2);
  wall.receiveShadow = true;
  group.add(wall);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(70, 70),
    new THREE.MeshStandardMaterial({
      color: 0x27251f,
      roughness: 0.97,
      metalness: 0,
    }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, -2.72, 0);
  floor.receiveShadow = true;
  group.add(floor);

  // A soft pool of floor light, like a north-facing studio window.
  const floorGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 11),
    new THREE.MeshBasicMaterial({
      color: 0x6f5d47,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  floorGlow.rotation.x = -Math.PI / 2;
  floorGlow.position.set(0.4, -2.709, 0.4);
  group.add(floorGlow);

  const hemisphere = new THREE.HemisphereLight(0xf2ead8, 0x1b1915, 0.5);
  group.add(hemisphere);

  const ambient = new THREE.AmbientLight(0xfff3df, 0.16);
  group.add(ambient);

  const keyLight = new THREE.SpotLight(0xffe7c4, 220, 22, 0.52, 0.82, 2);
  keyLight.position.set(-4.4, 6.2, 5.4);
  keyLight.target.position.set(0.1, 0.1, 0);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(mobile ? 768 : 1280, mobile ? 768 : 1280);
  keyLight.shadow.camera.near = 2;
  keyLight.shadow.camera.far = 24;
  keyLight.shadow.camera.fov = 34;
  keyLight.shadow.bias = -0.0008;
  keyLight.shadow.normalBias = 0.025;
  group.add(keyLight);
  group.add(keyLight.target);

  const fill = new THREE.DirectionalLight(0xd8c9b3, 0.5);
  fill.position.set(5.5, 2.4, 4.2);
  group.add(fill);

  const rim = new THREE.SpotLight(0xc79b6d, 65, 20, 0.7, 1, 2);
  rim.position.set(4.4, 3.2, -4.8);
  rim.target.position.set(0, 0.7, 0);
  group.add(rim);
  group.add(rim.target);

  const hoverLight = new THREE.PointLight(0xffd8a8, 0, 5.5, 2);
  hoverLight.position.set(0, 0.5, 2);
  group.add(hoverLight);

  // dust suspended in the studio light
  const count = mobile ? 90 : 190;
  const random = mulberry32(97);
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (random() - 0.5) * 16;
    positions[i * 3 + 1] = -1.8 + random() * 7;
    positions[i * 3 + 2] = -5.5 + random() * 12;
    phases[i] = random() * Math.PI * 2;
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const dust = new THREE.Points(
    dustGeometry,
    new THREE.PointsMaterial({
      color: 0xf2e4c9,
      size: 0.022,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      sizeAttenuation: true,
    }),
  );
  group.add(dust);

  const basePositions = positions.slice();

  const update = (time: number): void => {
    const attribute = dustGeometry.getAttribute("position") as THREE.BufferAttribute;
    const array = attribute.array as Float32Array;
    for (let i = 0; i < count; i += 1) {
      const phase = phases[i]!;
      array[i * 3] = basePositions[i * 3]! + Math.sin(time * 0.075 + phase) * 0.24;
      array[i * 3 + 1] = basePositions[i * 3 + 1]! + Math.sin(time * 0.055 + phase * 1.7) * 0.16;
      array[i * 3 + 2] = basePositions[i * 3 + 2]! + Math.cos(time * 0.05 + phase) * 0.14;
    }
    attribute.needsUpdate = true;
  };

  return { group, keyLight, hoverLight, update };
}
