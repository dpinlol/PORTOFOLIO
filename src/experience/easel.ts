import * as THREE from "three";
import { woodTexture } from "./textures";

export type Easel = {
  group: THREE.Group;
  setOpacity: (value: number) => void;
};

export function createEasel(anisotropy: number): Easel {
  const group = new THREE.Group();

  const wood = new THREE.MeshStandardMaterial({
    map: woodTexture(anisotropy),
    color: 0x9a7652,
    roughness: 0.82,
    metalness: 0,
  });

  const darkWood = new THREE.MeshStandardMaterial({
    map: wood.map,
    color: 0x6d5138,
    roughness: 0.88,
    metalness: 0,
  });

  const materials = [wood, darkWood];

  const add = (
    geometry: THREE.BoxGeometry,
    material: THREE.MeshStandardMaterial,
    position: [number, number, number],
    rotation: [number, number, number] = [0, 0, 0],
  ): THREE.Mesh => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };

  // central mast and rear legs
  add(new THREE.BoxGeometry(0.13, 5.32, 0.13), darkWood, [0, -0.06, -0.19]);
  add(new THREE.BoxGeometry(0.13, 5.3, 0.13), wood, [-1.52, -0.08, -0.44], [-0.055, 0, -0.085]);
  add(new THREE.BoxGeometry(0.13, 5.3, 0.13), wood, [1.52, -0.08, -0.44], [-0.055, 0, 0.085]);
  add(new THREE.BoxGeometry(2.85, 0.11, 0.12), darkWood, [0, 1.94, -0.24]);
  add(new THREE.BoxGeometry(2.55, 0.1, 0.11), darkWood, [0, -2.12, -0.42]);

  // shelf and retaining lip
  add(new THREE.BoxGeometry(3.02, 0.11, 0.54), wood, [0, -1.47, 0.08]);
  add(new THREE.BoxGeometry(3.02, 0.16, 0.055), darkWood, [0, -1.37, 0.34]);
  add(new THREE.BoxGeometry(0.055, 0.16, 0.42), darkWood, [-1.49, -1.37, 0.14]);
  add(new THREE.BoxGeometry(0.055, 0.16, 0.42), darkWood, [1.49, -1.37, 0.14]);

  // a brush resting on the shelf
  const brush = new THREE.Group();
  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.016, 0.021, 0.86, 10),
    new THREE.MeshStandardMaterial({ color: 0x3a2a1c, roughness: 0.6, metalness: 0.05 }),
  );
  handle.rotation.z = Math.PI / 2;
  handle.position.x = 0.12;
  handle.castShadow = true;
  brush.add(handle);

  const ferrule = new THREE.Mesh(
    new THREE.CylinderGeometry(0.026, 0.022, 0.13, 10),
    new THREE.MeshStandardMaterial({ color: 0xb8aa95, roughness: 0.35, metalness: 0.6 }),
  );
  ferrule.rotation.z = Math.PI / 2;
  ferrule.position.x = -0.37;
  ferrule.castShadow = true;
  brush.add(ferrule);

  const bristles = new THREE.Mesh(
    new THREE.ConeGeometry(0.032, 0.19, 10),
    new THREE.MeshStandardMaterial({ color: 0x7c5b41, roughness: 0.95 }),
  );
  bristles.rotation.z = Math.PI / 2;
  bristles.position.x = -0.53;
  bristles.castShadow = true;
  brush.add(bristles);

  brush.position.set(-1.02, -1.39, 0.34);
  brush.rotation.set(0, 0.08, 0.035);
  group.add(brush);

  // paint tin on the floor
  const tin = new THREE.Group();
  const tinBody = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25, 0.25, 0.34, 28),
    new THREE.MeshStandardMaterial({ color: 0x5a4b3a, roughness: 0.55, metalness: 0.4 }),
  );
  tinBody.position.y = 0.17;
  tinBody.castShadow = true;
  tinBody.receiveShadow = true;
  tin.add(tinBody);

  const tinRim = new THREE.Mesh(
    new THREE.TorusGeometry(0.25, 0.016, 8, 32),
    new THREE.MeshStandardMaterial({ color: 0x8d7d67, roughness: 0.4, metalness: 0.5 }),
  );
  tinRim.rotation.x = Math.PI / 2;
  tinRim.position.y = 0.34;
  tin.add(tinRim);

  const paint = new THREE.Mesh(
    new THREE.CircleGeometry(0.235, 32),
    new THREE.MeshStandardMaterial({ color: 0x9b7a5b, roughness: 0.85 }),
  );
  paint.rotation.x = -Math.PI / 2;
  paint.position.y = 0.337;
  tin.add(paint);

  tin.position.set(2.16, -2.72, 0.62);
  group.add(tin);

  let opacity = 1;
  const setOpacity = (value: number): void => {
    opacity = Math.max(0, Math.min(1, value));
    materials.forEach((material) => {
      material.transparent = opacity < 0.999;
      material.opacity = opacity;
    });
    group.visible = opacity > 0.005;
    group.traverse((child) => {
      if (child instanceof THREE.Mesh && !materials.includes(child.material as THREE.MeshStandardMaterial)) {
        const material = child.material as THREE.MeshStandardMaterial;
        material.transparent = opacity < 0.999;
        material.opacity = opacity;
      }
    });
  };
  setOpacity(1);

  return { group, setOpacity };
}
