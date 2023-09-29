"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const GradientAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    const colors = [
      new THREE.Color("rgba(15, 13, 18)"),
      new THREE.Color("rgba(8, 7, 9)"),
      new THREE.Color("rgba(23, 14, 39)"),
      new THREE.Color("rgba(34, 17, 57)"),
      new THREE.Color("rgba(34, 17, 62)"),
    ];

    const gradientShader = {
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

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial(gradientShader)
    );
    scene.add(plane);

    let increasing = true;
    function animate() {
      requestAnimationFrame(animate);

      gradientShader.uniforms.time.value += 0.01;

      if (increasing) {
        gradientShader.uniforms.intensity.value += 0.0022;
        if (gradientShader.uniforms.intensity.value >= 0.5) {
          increasing = false;
        }
      } else {
        gradientShader.uniforms.intensity.value -= 0.003;
        if (gradientShader.uniforms.intensity.value <= 0.1) {
          increasing = true;
        }
      }

      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      if (renderer) {
        renderer.dispose();
      }
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="absolute mr-10 top-20" ref={canvasRef} />;
};

export default GradientAnimation;
