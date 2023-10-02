import * as THREE from "three";
import { starShaders } from "./shader/stars";

export function createStars() {
  const starsGeometry = new THREE.BufferGeometry();
  const starsVertices = [];
  const starSizes = [];
  const numStars = 4000;

  for (let i = 0; i < numStars; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 1000;
    const z = (Math.random() - 0.5) * 1000;
    starsVertices.push(x, y, z);
    starSizes.push(0.7);
  }

  starsGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starsVertices, 3)
  );

  starsGeometry.setAttribute(
    "size",
    new THREE.Float32BufferAttribute(starSizes, 1)
  );

  const starsMaterial = new THREE.ShaderMaterial({
    ...starShaders,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  return new THREE.Points(starsGeometry, starsMaterial);
}
