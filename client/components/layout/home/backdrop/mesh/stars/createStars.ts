import * as THREE from "three";

export function createStars() {
    const starsGeometry = new THREE.BufferGeometry();
    const starsVertices = [];
    const numStars = 3000;

    for (let i = 0; i < numStars; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 1000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    return new THREE.Points(starsGeometry, starsMaterial);
  }
