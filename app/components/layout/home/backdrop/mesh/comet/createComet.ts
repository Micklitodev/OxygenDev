import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

export const createShootingStar = () => {
  return new Promise((resolve, reject) => {
    loader.load(
      "/comet/scene.gltf",
      (gltf) => {
        let comet = gltf.scene;

        // const smokeParticles = createParticleTail();
        // comet.add(smokeParticles);

        comet.position.set(170, 210, -100);
        comet.rotation.set(0, 0, 1);
        comet.scale.set(1, 1, 1);
        resolve(comet);
      },
      undefined,
      (error) => {
        console.log(error);
        reject(error);
      }
    );
  });
};
