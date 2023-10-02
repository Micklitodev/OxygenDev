"use client";

import React, { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";

import { createStars } from "./mesh/stars/createStars";
import { createDebris } from "./mesh/debris/createDebris";
import { createNebula } from "./mesh/nebula/createNebula";
import { createShootingStar } from "./mesh/comet/createComet";

import { starShaders } from "./mesh/stars/shader/stars";
import { debrisShaders } from "./mesh/debris/shader/debris";
import { gradientShader } from "./mesh/nebula/shader/nebula";

const GradientAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const handleResize = useCallback(() => {
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.updateProjectionMatrix();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, []);

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
    canvasRef.current?.appendChild(renderer.domElement);

    const debris: any = [];
    const comet: any = [];

    // create bg-stars
    const stars = createStars();
    scene.add(stars);

    // create space debris
    const spawnDebris = () => {
      const spaceDebris = createDebris();
      spaceDebris.position.set(
        (Math.random() - 0.5) * 2000,
        1000,
        (Math.random() - 0.5) * 1000
      );
      spaceDebris.velocity = {
        x: (Math.random() - 0.5) * 10,
        y: -Math.random() * 10,
        z: (Math.random() - 0.5) * 10,
      };
      debris.push(spaceDebris);
      scene.add(spaceDebris);
    };

    const debrisInterval = setInterval(spawnDebris, 100);

    // spawn shooting star
    const spawnStar = async () => {
      const shootingStar: any = await createShootingStar();
      comet.push(shootingStar);
      scene.add(shootingStar);
    };

    const cometInterval = setInterval(spawnStar, 5000);

    // create nebula
    const nebula = createNebula();
    scene.add(nebula);

    let increasing = true;

    const animate = () => {
      requestAnimationFrame(animate);

      //bg stars twinkle

      starShaders.uniforms.time.value += 0.01;

      //comet flyby
      comet.forEach((c: any, i: any) => {
        c.position.y -= 2.5;
        c.position.x -= 1.5;
        if (c.position.y < -1000) {
          scene.remove(c);
          comet.splice(i, 1);
        }
      });

      // gradiant pulse
      gradientShader.uniforms.time.value += 0.01;

      if (increasing) {
        gradientShader.uniforms.intensity.value += 0.001;
        if (gradientShader.uniforms.intensity.value >= 0.5) {
          increasing = false;
        }
      } else {
        gradientShader.uniforms.intensity.value -= 0.001;
        if (gradientShader.uniforms.intensity.value <= 0.1) {
          increasing = true;
        }
      }

      // debris random fly
      debrisShaders.uniforms.time.value += 0.01;
      debris.forEach((d: any, i: any) => {
        d.position.x += d.velocity.x;
        d.position.y += d.velocity.y;
        d.position.z += d.velocity.z;
        if (d.position.y < -1000) {
          scene.remove(d);
          debris.splice(i, 1);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(debrisInterval);
      clearInterval(cometInterval);
      renderer.dispose();
      canvasRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div
      style={{ zIndex: -10 }}
      className="absolute right-24 w-full flex items-center justify-center"
    >
      <div className=" mt-60 mr-10 relative before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-purple-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700/10 after:dark:from-sky-900 after:dark:via-[#9400D3]/40 before:lg:h-[360px]"></div>
      <div className="absolute ml-20 top-10" ref={canvasRef} />
    </div>
  );
};

export default GradientAnimation;
