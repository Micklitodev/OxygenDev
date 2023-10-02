import * as THREE from "three";

export function createParticleTail() {
  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    positions[3 * i] = (Math.random() - 0.5) * 40;
    positions[3 * i + 1] = (Math.random() - 0.5) * 10;
    positions[3 * i + 2] = (Math.random() - 0.5) * 10;
    sizes[i] = 10 + Math.random() * 20;
  }

  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.01,
    sizeAttenuation: true,
    transparent: true,
  });

  const smokeParticles = new THREE.Points(particleGeometry, particleMaterial);

  return smokeParticles;
}
