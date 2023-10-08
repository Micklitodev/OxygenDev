import * as THREE from "three";

export const starShaders = {
  uniforms: {
    colors: { value: new THREE.Color("rgba(15, 13, 18)") },
    intensity: { value: 0.6 },
    time: { value: 0.0 },
  },
  vertexShader: `
  uniform float time;
  attribute float size;
  varying vec3 vPosition;
  varying vec4 vColor;
  
  void main() {
      vPosition = position;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = size * (300.0 / -mvPosition.z);
      vColor = vec4(1.0, 1.0, 1.0, 1.0); 
  }

  `,
  fragmentShader: `
  uniform float time;
  varying vec3 vPosition;
  varying vec4 vColor;
  
  void main() {
      float twinkle = 0.5 * sin(vPosition.x * 10.0 + time) + 0.5;
      gl_FragColor = vColor * twinkle;
  }
`,
};
