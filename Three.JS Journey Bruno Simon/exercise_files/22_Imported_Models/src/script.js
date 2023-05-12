import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader';
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
 * >Models
 */
const dracoLoader = new DRACOLoader(); //got to be instantiated before gltfloader if using gltfdraco version
dracoLoader.setDecoderPath('/draco/'); //provide the decorder for the compressed file

const gltfLoader = new GLTFLoader(); //Instantiate GLTF model loader
//NOTE: gtlf draco will not be used if the loaded file is not draco
gltfLoader.setDRACOLoader(dracoLoader); //set the draco loader for the gltfloader

// // Static model loader
// gltfLoader.load(
//   //   '/models/Duck/glTF/Duck.gltf',
//   //   '/models/Duck/glTF-Binary/Duck.glb',
//   //   '/models/Duck/glTF-Embedded/Duck.gltf',
//   '/models/Duck/glTF-Draco/Duck.gltf',
//   //   '/models/FlightHelmet/glTF/FlightHelmet.gltf',
//   gltf => {
//     console.log('🚀 | file: script.js:28 | gltf:', gltf);
//     //->#1. Loading a single component in gltf file
//     // scene.add(gltf.scene.children[0]);
//     //->#2. Loading multiple components in gltf file
//     // while (gltf.scene.children.length) {
//     //   scene.add(gltf.scene.children[0]);
//     // }
//     //->#3. Loadingg multiple components in gltf file
//     // const children = [...gltf.scene.children];
//     // console.log(children);
//     // for (const child of children) {
//     //   scene.add(child);
//     // }
//     //->#4. Adding model to the scene if all junk stuff is scrapped away
//     gltf.scene.scale.set(0.025, 0.025, 0.025);
//     scene.add(gltf.scene);
//   }
//   //   () => {
//   //     console.log('progress');
//   //   },
//   //   () => {
//   //     console.log('error');
//   //   }
// );

//Animated model loader
let mixer = null;
gltfLoader.load('/models/Fox/glTF/Fox.gltf', gltf => {
  console.log('🚀 | file: script.js:28 | gltf:', gltf);

  mixer = new THREE.AnimationMixer(gltf.scene); //Instantiate an animation clip player
  const action = mixer.clipAction(gltf.animations[1]); //Select the 1st animation clip for the mixer to play
  action.play(); //Play the action

  console.log(action);

  gltf.scene.scale.set(0.025, 0.025, 0.025);
  scene.add(gltf.scene);
});

/**
 * Floor
 */
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({
    color: '#444444',
    metalness: 0,
    roughness: 0.5,
  })
);
floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.bottom = -7;
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

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
camera.position.set(2, 2, 2);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0.75, 0);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  //Update animation mixer
  if (mixer !== null) {
    /* 
    NOTE: animation takes time to load/calc - this async behaviour causes error for the mixer.update code
    as mixer remains null till processed. For that reason, we avoid mixer update till that mixer 
    value is different than a null value. 
    */
    mixer.update(deltaTime);
  }

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
