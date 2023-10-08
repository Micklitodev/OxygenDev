import * as THREE from 'three'
import { gradientShader } from "./shader/nebula";

export function createNebula() {
    const nebulaMaterial = new THREE.ShaderMaterial({
      ...gradientShader,
      depthTest: false,
    });

    return new THREE.Mesh(new THREE.PlaneGeometry(2, 2), nebulaMaterial);
  }
