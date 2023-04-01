import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
/**
 * Textures
 */
//Importing Image
//#1 img@src folder
// import imageSource from './color.jpg'; //if the image is located in the source folder we may choose to import it
//#2 img@static folder
// const imageSource = '/color.jpg'; //Vite style as static folder is prescribed in the vite config
//#3 img@static@custom_folder folder NativeJS version
// const image = new Image(); //Per Web DOM API - create a image html element
// const texture = new THREE.Texture(image);

// image.onload = () => {
//   // console.log('image loaded');
//   texture.needsUpdate = true;
// };
// // console.log(image);
// image.src = '/textures/door/color.jpg';
//#4 img@static@custom_folder folder 3JS version
const loadingManager = new THREE.LoadingManager(); //Loading manager centralizes the model, texture loading in one place for textureloader
loadingManager.onStart = () => {
  console.log('onStart');
};
loadingManager.onLoad = () => {
  console.log('onLoad');
};
loadingManager.onProgress = () => {
  console.log('onProgress');
};
loadingManager.onError = () => {
  console.log('onError');
};
const textureLoader = new THREE.TextureLoader(loadingManager); //Texture loader could be used for many textures. Thus, you create only once.
// const texture = textureLoader.load(
//   '/textures/door/color.jpg'
//   //   () => {
//   //     console.log('load');
//   //   },
//   //   () => {
//   //     console.log('progress');
//   //   },
//   //   () => {
//   //     console.log('error');
//   //   }
// );
// const colorTexture = textureLoader.load('/textures/door/color.jpg');
// const colorTexture = textureLoader.load('/textures/checkerboard-8x8.png');
const colorTexture = textureLoader.load('/textures/minecraft.png');
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const heightTexture = textureLoader.load('/textures/door/height.jpg');
const ambientOcclusionTexture = textureLoader.load(
  '/textures/door/ambientOcclusion.jpg'
);
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const normalTexture = textureLoader.load('/textures/door/normal.jpg');
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg');

// //-->Prep UV for mods
// colorTexture.wrapS = THREE.RepeatingWrapping; //set texture to repeat itself
// colorTexture.wrapT = THREE.RepeatingWrapping; //set texture to repeat itself
// //->UV repeating
// colorTexture.repeat.x = 3;
// colorTexture.repeat.y = 3;
// //->UV Offset
// colorTexture.offset.x = 0.5;
// colorTexture.offset.y = 0.5;
// //->UV Rotating
// colorTexture.rotation = Math.PI / 4;
// colorTexture.center.x = 0.5; //Change center of UV rotation pivot @x - if not set its 0
// colorTexture.center.y = 0.5; //Change center of UV rotation pivot @y - if not set its 0

//-->Mipmapping Filter
//->Minfilter
// colorTexture.generateMipmaps = false; //disabled when using nearestfilter with minfilter to gain perforamnce
// colorTexture.minFilter = THREE.NearestFilter; //blurs highres img
//->Magfilter
colorTexture.magFilter = THREE.NearestFilter; //sharpens lowres img

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
// console.log(geometry.attributes.uv);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material = new THREE.MeshBasicMaterial({ map: colorTexture });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

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
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;
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

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
