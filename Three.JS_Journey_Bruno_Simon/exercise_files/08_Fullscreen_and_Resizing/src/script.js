// import './style.css'; //NOTE: Either we import to JS file or specify CSS file in index.html
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Sizes
 */
// //Specific width and height
// const sizes = {
//   width: 800,
//   height: 600,
// };
//Full height and width of the browser window
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//Make the canvas responsive
window.addEventListener('resize', () => {
  //   console.log('Windows has been resized');
  //Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //Update camera to comply with the new width/height pair
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix(); //NOTE: updates any changes to values matrix (fov, aspect ratio, near, far)

  //Update renderer to comply with the new width/height pair
  renderer.setSize(sizes.width, sizes.height);
});

//Full screen switch listerner
window.addEventListener('dblclick', () => {
  //   console.log('double click');
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement; //added webkit support
  if (!fullscreenElement) {
    //if there is no full screen element in the document
    // console.log('go fullscreen');
    canvas.requestFullscreen()
      ? canvas.requestFullscreen()
      : canvas.webkitRequestFullscreen(); //Fullscreen API - request full screen for the canvas added webkit support
  } else {
    // console.log('leave full screen');
    document.exitFullscreen()
      ? document.exitFullscreen()
      : document.webkitExitFullscreen(); //Exit full screen mode on the document added webkit support
  }
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
// controls.enabled = false; //Disable orbit controls
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //NOTE: Sets device pixel ratio. This is usually used for HiDPI device to prevent blurring output canvas. The devicePixelRatio of Window interface returns the ratio of the resolution in physical pixels to the resolution in CSS pixels for the current display device. Math.min() limits the pixel ratio to 2. If machine has a higher value still defaults to 2.

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
