import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';

/**
 * Base
 */
// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load('/textures/particles/2.png');

/**
 * PARTICLES
 */
//Cube Geometry
// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(),
//   new THREE.MeshBasicMaterial()
// );
// scene.add(cube);
//Particle Geometry
// const particlesGeometry = new THREE.SphereGeometry(1, 32, 32);
const count = 5000;

const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
  colors[i] = Math.random(); //random value between 0 and 255 for rgb values
}
const randomDotGeometry = new THREE.BufferGeometry();
randomDotGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3)
);
randomDotGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
//Particle Material
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.4,
  sizeAttenuation: true,
  //   color: '#ff88cc',
  vertexColors: true,
  transparent: true,
  alphaMap: particleTexture,
  //   alphaTest: 0.001, //Solution#1 properly showing particles @ differing depth - meehh ok method
  //   depthTest: false, //creates bugs - not preferred
  depthWrite: false, //Solution#2 properly showing particles @ differing depth - preferred method
  //   map: particleTexture,
  //   blending: THREE.AdditiveBlending,
});
// particlesMaterial.color = new THREE.Color('#ff88cc');
// particlesMaterial.size = 0.02;
// particlesMaterial.sizeAttenuation = true;
//Points
// const particles = new THREE.Points(particlesGeometry, particlesMaterial);
// scene.add(particles);
const dotCloud = new THREE.Points(randomDotGeometry, particlesMaterial);
scene.add(dotCloud);
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  //Update Particles

  //   dotCloud.rotation.y = elapsedTime / 4;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3; //Stepper
    const x = randomDotGeometry.attributes.position.array[i3];
    randomDotGeometry.attributes.position.array[i3 + 1] = Math.sin(
      elapsedTime + x
    ); //Modify X in the nth (x,y,z) position block @ FLoat32Array
  }
  randomDotGeometry.attributes.position.needsUpdate = true; //refer to https://threejs.org/docs/?q=buffer#api/en/core/BufferAttribute

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
