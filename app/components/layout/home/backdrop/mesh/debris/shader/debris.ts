import * as THREE from "three";

export const debrisShaders = {
  uniforms: {
    colors: { value: new THREE.Color("rgba(15, 13, 18)") },
    intensity: { value: 0.6 },
    time: { value: 0.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }

  `,
  fragmentShader: `
  uniform vec3 colors; 
  uniform float time;
  varying vec2 vUv; 

  void main() {
    float y = mod(vUv.y + time * 0.5, 1.0); 
    float wave = 0.5 * sin(y * 10.0) + 0.5; 

    vec3 yellow = vec3(1.0, 1.0, 0.0);
    vec3 orange = vec3(1.0, 0.5, 0.0);
    vec3 red = vec3(1.0, 0.0, 0.0);

    vec3 color = mix(yellow, orange, wave);
    color = mix(color, red, 1.0 - wave);

    gl_FragColor = vec4(color, 1.0);
  }
`,
};
