import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

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
 * Objects
 */
const object1 = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 16, 16),
  new THREE.MeshBasicMaterial({ color: '#ff0000' })
);
object1.position.x = -2;

const object2 = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 16, 16),
  new THREE.MeshBasicMaterial({ color: '#ff0000' })
);

const object3 = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 16, 16),
  new THREE.MeshBasicMaterial({ color: '#ff0000' })
);
object3.position.x = 2;

scene.add(object1, object2, object3);

/**
 * > Raycaster
 */
const rayCaster = new THREE.Raycaster(); //Instantiate a raycaster

// const rayOrigin = new THREE.Vector3(-3, 0, 0); //Define a origin vertex for raycasting
// const rayDirection = new THREE.Vector3(1, 0, 0); //Define a direction vertex for raycasting
// // console.log(rayDirection.length());
// rayDirection.normalize(); //Converts the raycaster vector to a unit vector - keeps the direction but reduces to a unit vector
// // console.log(rayDirection.length());

// rayCaster.set(rayOrigin, rayDirection);

// const intersect = rayCaster.intersectObject(object1);
// console.log(intersect);

// const intersects = rayCaster.intersectObjects([object1, object2, object3]);
// console.log(intersects);

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
 * > Mouse
 */

const mouse = new THREE.Vector2();

window.addEventListener('mousemove', event => {
  // console.log('mouse move');
  mouse.x = (event.clientX / sizes.width) * 2 - 1;
  mouse.y = -((event.clientY / sizes.height) * 2 - 1);
  // console.log(mouse.x, mouse.y);
});

window.addEventListener('click', event => {
  // console.log('click');
  if (currentIntersect) {
    console.log('click on sphere');
    if (currentIntersect.object === object1) {
      console.log('clicked on object1');
    } else if (currentIntersect.object === object2) {
      console.log('clicked on object2');
    } else if (currentIntersect.object === object3) {
      console.log('clicked on object3');
    }
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
 * > Model
 */

let model = null;

const gltfLoader = new GLTFLoader(); //Instantiate gltf loader
gltfLoader.load('./models/Duck/glTF-Binary/Duck.glb', gltf => {
  // console.log(gltf.scene);
  model = gltf.scene;
  model.position.y = -1.2;
  scene.add(model);
});

/**
 * > Lights
 */
//Ambient Light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.3);
scene.add(ambientLight);

// Direct Light
const directionalLight = new THREE.DirectionalLight('#ffffff', 0.7);
directionalLight.position.set(1, 2, 3);
scene.add(directionalLight);

/**
 * > Animate
 */
const clock = new THREE.Clock();

let currentIntersect = null;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  //Animate Objects
  object1.position.y = Math.sin(elapsedTime * 0.3);
  object2.position.y = Math.sin(elapsedTime * 0.8);
  object3.position.y = Math.sin(elapsedTime * 1.4);

  //Test intersect with raycaster and animated balls

  //Cast a ray
  //#1.Creating a raycaster origin and direction manually
  // const rayOrigin = new THREE.Vector3(-3, 0, 0);
  // const rayDirection = new THREE.Vector3(1, 0, 0);
  // rayDirection.normalize();
  // rayCaster.set(rayOrigin, rayDirection);
  //#2.Creating a raycaster origin of camera pointing towards mouse
  rayCaster.setFromCamera(mouse, camera);

  const objectsToTest = [object1, object2, object3];
  const intersects = rayCaster.intersectObjects(objectsToTest);

  for (const object of objectsToTest) {
    object.material.color.set('red');
  }
  // console.log(intersects);
  for (const intersect of intersects) {
    intersect.object.material.color.set('blue');
  }

  if (intersects.length) {
    // console.log('something being hovered');
    if (currentIntersect === null) {
      console.log('mouse enter');
    }
    // console.log(intersects);
    currentIntersect = intersects[0];
  } else {
    // console.log('nothing being hovered');
    if (currentIntersect) {
      console.log('mouse leave');
    }
    currentIntersect = null;
  }

  //Test Intersect with a Duck Model
  if (model) {
    const modelIntersect = rayCaster.intersectObject(model);
    if (modelIntersect.length) {
      model.scale.set(1.2, 1.2, 1.2);
    } else {
      model.scale.set(1, 1, 1);
    }
  }

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
