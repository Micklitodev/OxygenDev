import * as THREE from "three";

const colors = [
  new THREE.Color("rgba(15, 13, 18)"),
  new THREE.Color("rgba(8, 7, 9)"),
  new THREE.Color("rgba(23, 14, 39)"),
  new THREE.Color("rgba(34, 17, 57)"),
  new THREE.Color("rgba(34, 17, 62)"),
];

export const gradientShader = {
  uniforms: {
    colors: { value: colors },
    intensity: { value: 0.6 },
    time: { value: 0.0 },
  },
  vertexShader: `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, .4);
      }
  `,
  fragmentShader: `
      uniform vec3 colors[5];
      uniform float intensity;
      uniform float time;
      varying vec2 vUv;
  
      void main() {
          vec2 uv = vUv;
          vec2 center = vec2(0.5, 0.5);
          float radius = 0.9;
          float distanceFromCenter = length(uv - center);
          float circularMask = 1.0 - smoothstep(radius, radius + 0.05, distanceFromCenter); 

          if (circularMask < 0.01) {
              discard;
          }
  
          float gradientFactor = distanceFromCenter / radius;
          vec3 gradientColor = mix(colors[0], colors[4], gradientFactor);
          gradientColor = mix(gradientColor, colors[2], 0.5 * sin(uv.y * 50.0 + time * 2.0) + 50.5); 
          
          float alpha = .01 - smoothstep(0.8 * radius, radius, distanceFromCenter);
          gl_FragColor = vec4(gradientColor * intensity, alpha * circularMask); 
      }
  `,
};
