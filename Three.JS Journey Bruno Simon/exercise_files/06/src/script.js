import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';
console.log(gsap);
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//--->#1. Adjusted framerate for equal animation experience across machines - JS version
// //Time
// let time = Date.now();
// //Animations
// const tick = () => {
//   //Time - Estimated FPS rate of your computer
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;
//   console.log(deltaTime);
//   //Update objects
//   //   mesh.position.x += 0.01;
//   //   mesh.rotation.y += 0.001;
//   mesh.rotation.y += 0.001 * deltaTime; //Adjusted FPS rate per computer performanse to provide equal experience across many machines
//   //Render
//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick); //JS Window API
// };
// tick();

//--->#2. Adjusted framerate for equal animation experience across machines - THREEJS version
// //Clock
// const clock = new THREE.Clock();
// //Animations
// const tick = () => {
//   //Clock
//   const elapsedTime = clock.getElapsedTime(); //Adjusted FPS rate multiplier based on computer performanse to provide equal experience across many machines
//   console.log(elapsedTime);
//   //Update objects
//   //   mesh.rotation.y = elapsedTime;
//   mesh.rotation.y = elapsedTime * Math.PI * 2; //Adjusted FPS rate 1full turn / sec
//   mesh.position.x = Math.sin(elapsedTime);
//   mesh.position.y = Math.cos(elapsedTime);

//   camera.lookAt(mesh.position);
//   //Render
//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick); //JS Window API
// };
// tick();

//--->#3. GreenSock Library Timeline version
gsap.to(mesh.position, { duration: 1, delay: 1, x: 1 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });
const tick = () => {
  //Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick); //JS Window API
};
tick();
