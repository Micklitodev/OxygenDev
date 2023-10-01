import * as THREE from "three";
import { debrisShaders } from "./shader/debris";

class Debris extends THREE.Line {
  velocity: { x: number; y: number; z: number };

  constructor(geometry: THREE.BufferGeometry, material: THREE.Material) {
    super(geometry, material);
    this.velocity = { x: 0, y: 0, z: 0 };
  }
}
export function createDebris() {
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([0, 1, 0, 0, 3, 0]);
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

  const debrisMaterial = new THREE.ShaderMaterial({
    ...debrisShaders,
    depthTest: false,
  });

  return new Debris(geometry, debrisMaterial);
}

