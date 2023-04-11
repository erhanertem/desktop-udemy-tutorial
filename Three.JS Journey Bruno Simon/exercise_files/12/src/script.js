import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';

/**
 * Debug GUI
 */
const gui = new GUI();

/**
 * Textures Loaders
 */
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();
/**
 * Textures
 */
const doorColorTexture = textureLoader.load('/textures/door/color.jpg');
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const doorAmbientOcclusionTexture = textureLoader.load(
  '/textures/door/ambientOcclusion.jpg'
);
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg');
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg');
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg');
const matCapTexture = textureLoader.load('/textures/matcaps/3.png');
const gradientTexture = textureLoader.load('/textures/gradients/5.jpg');
// gradientTexture.minFilter = THREE.NearestFilter;
gradientTexture.magFilter = THREE.NearestFilter;

const environmentMapTexture = cubeTextureLoader.load([
  '/textures/environmentMaps/0/px.jpg',
  '/textures/environmentMaps/0/nx.jpg',
  '/textures/environmentMaps/0/py.jpg',
  '/textures/environmentMaps/0/ny.jpg',
  '/textures/environmentMaps/0/pz.jpg',
  '/textures/environmentMaps/0/nz.jpg',
]);

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

//-->Explore MeshBasicMaterial
// const material = new THREE.MeshBasicMaterial();
//->Set map texture
// const material = new THREE.MeshBasicMaterial({ map: doorColorTexture });
// material.map = doorColorTexture;
//->Set color
// const material = new THREE.MeshBasicMaterial({ color: pink });
// material.color.set('pink');
// material.color = new THREE.Color('green');
//->Enable Wireframe mode
// material.wireframe = true;
//->Opacity
// material.opacity = 0.5; //requires transparency set as well
// material.transparent = true;
//->Texture Opaciity
// material.alphaMap = doorAlphaTexture;
// material.transparent = true;
//->BackCulling
// material.side = THREE.FrontSide;
// material.side = THREE.BackSide;
// material.side = THREE.DoubleSide;
//-->Explore MeshNormalMaterial
// const material = new THREE.MeshNormalMaterial();
//->Enable flatshading
// material.flatShading = true;
//-->Explore MeshMatcapMaterial
// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matCapTexture;
//-->Explore MeshDepthMaterial
// const material = new THREE.MeshDepthMaterial();
//-->Explore MeshLambertMaterial
// const material = new THREE.MeshLambertMaterial();
//-->Explore MeshPhongMaterial
// const material = new THREE.MeshPhongMaterial();
// material.shininess = 100;
// material.specular = new THREE.Color('red');
//-->Explore MeshToonMaterial
// const material = new THREE.MeshToonMaterial();
// material.gradientMap = gradientTexture;
//-->Explore MeshStandardMaterial
const material = new THREE.MeshStandardMaterial();
material.metalness = 1;
material.roughness = 0;
material.envMap = environmentMapTexture;
// material.map = doorColorTexture;
// material.aoMap = doorAmbientOcclusionTexture;
// material.aoMapIntensity = 1;
// material.displacementMap = doorHeightTexture;
// material.displacementScale = 0.05;
// material.metalnessMap = doorMetalnessTexture;
// material.roughnessMap = doorRoughnessTexture;
// material.normalMap = doorNormalTexture;
// material.normalScale.set(0.5, 0.5);
// material.alphaMap = doorAlphaTexture;
// material.transparent = true;
// material.wireframe = true;

gui
  .add(material, 'metalness')
  .name('Adjust Metalness')
  .min(0)
  .max(1)
  .step(0.0001);
gui
  .add(material, 'roughness')
  .name('Adjust Roughness')
  .min(0)
  .max(1)
  .step(0.0001);
gui
  .add(material, 'aoMapIntensity')
  .name('Adjust AmbientOcclusion')
  .min(0)
  .max(10)
  .step(0.0001);
gui
  .add(material, 'displacementScale')
  .name('Adjust Displacement Scale')
  .min(0)
  .max(1)
  .step(0.0001);
gui
  .add(material, 'displacementScale')
  .name('Adjust Displacement Scale')
  .min(0)
  .max(1)
  .step(0.0001);
gui
  .add(material, 'displacementScale')
  .name('Adjust Displacement Scale')
  .min(0)
  .max(1)
  .step(0.0001);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 128, 128),
  material
);
console.log(sphere, sphere.geometry.attributes);
sphere.geometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2) //2 siginifies uv coordinate block length (x,y)
);
const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 100, 100), material);
console.log(plane.geometry);
//In order to apply AO map, Three.JS requires uv2 attribute
plane.geometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2) //2 siginifies uv coordinate block length (x,y)
); //BufferGeometry method of setAttribute is required to set uv2 attribute - assign a copy of uv data (array) onto uv2 attrribute

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 64, 128),
  material
);
torus.geometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2) //2 siginifies uv coordinate block length (x,y)
);
sphere.position.x = -1.5;
torus.position.x = 1.5;
scene.add(sphere, plane, torus);

/**
 * LIGHTS
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

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
camera.position.z = 2;
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

  //Update Objects
  sphere.rotation.y = 0.1 * elapsedTime;
  plane.rotation.y = 0.1 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;
  sphere.rotation.x = 0.15 * elapsedTime;
  plane.rotation.x = 0.15 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
