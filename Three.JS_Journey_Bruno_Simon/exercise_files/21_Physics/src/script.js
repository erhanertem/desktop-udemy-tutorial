import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';
import * as CANNON from 'cannon-es';
// console.log(CANNON);

/**
 * Debug
 */
const gui = new dat.GUI();
const debugObject = {};
debugObject.createSphere = () => {
  createSphere(Math.random() * 0.5, {
    x: (Math.random() - 0.5) * 3,
    y: 3,
    z: (Math.random() - 0.5) * 3,
  });
};
debugObject.createBox = () => {
  createBox(Math.random(), Math.random(), Math.random(), {
    x: (Math.random() - 0.5) * 3,
    y: 3,
    z: (Math.random() - 0.5) * 3,
  });
};
debugObject.reset = () => {
  for (const object of objectsToUpdate) {
    //#1.CANNON.js side cleaning
    //Remove body eventListener
    object.body.removeEventListener('collide', playHitSound);
    //Remove body
    world.removeBody(object.body);
    //#2.THREE.js side cleaning
    //Remove meshes from scene
    scene.remove(object.mesh);
    //Reset objectsToUpdate array
  }
  objectsToUpdate.splice(0, objectsToUpdate.length);
};
gui.add(debugObject, 'createBox');
gui.add(debugObject, 'createSphere');
gui.add(debugObject, 'reset');
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

const environmentMapTexture = cubeTextureLoader.load([
  '/textures/environmentMaps/0/px.png',
  '/textures/environmentMaps/0/nx.png',
  '/textures/environmentMaps/0/py.png',
  '/textures/environmentMaps/0/ny.png',
  '/textures/environmentMaps/0/pz.png',
  '/textures/environmentMaps/0/nz.png',
]);

/**
 * > SOUNDS
 */
// JS WAY OF CREATING AUDIO
const hitSound = new Audio('/sounds/hit.mp3');
const playHitSound = collision => {
  // console.log(collision);
  // console.log(collision.contact.getImpactVelocityAlongNormal());
  const impactStrength = collision.contact.getImpactVelocityAlongNormal();
  if (impactStrength > 1.5) {
    hitSound.volume = Math.random();
    hitSound.currentTime = 0;
    hitSound.play();
  }
};

/**
 * > PHYSICS
 * DOCS @ http://schteppe.github.io/cannon.js/docs/classes/World.html
 */
//->CREATE A PHYSICS WORLD
const world = new CANNON.World();
//->CHOOSE PHYSICS CALCULATOR
world.broadphase = new CANNON.SAPBroadphase(world);
world.allowSleep = true;
//->ADD GRAVITY TO THE SCENE
world.gravity.set(0, -9.82, 0);
//->PHYSICS MATERIALS FOR PHYSICS OBJECTS
const defaultMaterial = new CANNON.Material('default');
// const plasticMaterial = new CANNON.Material('plastic');
//->CONTACTMATERIAL FOR PHYSICS OBJECTS
const defaultContactMaterial = new CANNON.ContactMaterial(
  defaultMaterial,
  defaultMaterial,
  {
    friction: 0.1,
    restitution: 0.7,
  }
);
world.addContactMaterial(defaultContactMaterial);
//->ADD A DEFAULT GLOBAL CONTACT MATERIAL
world.defaultContactMaterial = defaultContactMaterial;

//->CREATE PHYSICS OBJECTS
// // SPHERE: ADD A BODY TO THE SCENE
// const sphereShape = new CANNON.Sphere(1);
// const sphereBody = new CANNON.Body({
//   mass: 1,
//   position: new CANNON.Vec3(0, 3, 0),
//   shape: sphereShape,
//   // material: defaultMaterial, //We may opt to set a global defaultcontactmaterial
// });
// sphereBody.applyLocalForce(new CANNON.Vec3(100, 0, 0), new CANNON.Vec3(0, 0, 0)); //(force,localPoint)
// world.addBody(sphereBody);

//FLOOR: ADD A BODY TO THE SCENE
const floorShape = new CANNON.Plane();
const floorBody = new CANNON.Body({
  mass: 0,
  shape: floorShape,
  // material: defaultMaterial, //We may opt to set a global defaultcontactmaterial
});
// floorBody.mass = 0;
// floorBody.addShape(floorShape);
// floorBody.material = defaultMaterial
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI * 0.5); //Adjust floor plane to face to axis coinsiding with three.js
world.addBody(floorBody);

// /**
//  * Test sphere
//  */
// const sphere = new THREE.Mesh(
//   new THREE.SphereGeometry(0.5, 32, 32),
//   new THREE.MeshStandardMaterial({
//     metalness: 0.3,
//     roughness: 0.4,
//     envMap: environmentMapTexture,
//     envMapIntensity: 0.5,
//   })
// );
// sphere.castShadow = true;
// sphere.position.y = 0.5;
// scene.add(sphere);

/**
 * Floor
 */
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({
    color: '#777777',
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5,
  })
);
floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
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
camera.position.set(-3, 3, 3);
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
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * > UTILS
 */
//Create objects to update array for animation
const objectsToUpdate = [];

//Sphere
const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
const sphereMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.3,
  roughness: 0.4,
  envMap: environmentMapTexture,
});

const createSphere = (radius, position) => {
  //Three.js Mesh
  const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  mesh.scale.set(radius, radius, radius);
  mesh.castShadow = true;
  mesh.position.copy(position);
  scene.add(mesh);

  //Cannon.js body
  const shape = new CANNON.Sphere(radius);
  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(position.x, position.y, position.z),
    shape: shape,
    material: defaultMaterial,
  });
  body.position.copy(position);
  body.addEventListener('collide', playHitSound);
  // body.applyLocalForce(new CANNON.Vec3(0, 500, 0), new CANNON.Vec3(0, 0, 0));
  world.addBody(body);

  //Save in objects to update array
  objectsToUpdate.push({
    mesh: mesh,
    body: body,
  });
};

createSphere(0.5, { x: 0, y: 2, z: 0 });
// console.log(objectsToUpdate);

//Box
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.3,
  roughness: 0.4,
  envMap: environmentMapTexture,
});

const createBox = (width, height, depth, position) => {
  //Three.js Mesh
  const mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  mesh.scale.set(width, height, depth);
  mesh.castShadow = true;
  mesh.position.copy(position);
  scene.add(mesh);

  //Cannon.js body
  const shape = new CANNON.Box(
    new CANNON.Vec3(width * 0.5, height * 0.5, depth * 0.5)
  );
  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(position.x, position.y, position.z),
    shape: shape,
    material: defaultMaterial,
  });
  body.position.copy(position);
  body.addEventListener('collide', playHitSound);
  world.addBody(body);

  //Save in objects to update array
  objectsToUpdate.push({
    mesh: mesh,
    body: body,
  });
};

// console.log(objectsToUpdate);

/**
 * Animate
 */
const clock = new THREE.Clock();
let oldElapsedTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - oldElapsedTime;
  oldElapsedTime = elapsedTime; //Once the delta time is calced, we update oldElapsedTime to be the past elapsed time for the next tick

  //> Update CANNON physics world

  // //>Apply wind
  // sphereBody.applyForce(new CANNON.Vec3(-0.5, 0, 0), sphereBody.position); //Apply force is from any place in the world

  //>FPS Adjustment for Physics
  world.step(
    1 / 60, // A fixed time stamp - 60 frames per second
    deltaTime, // How much time passed since the last step
    3 // How much iterations the world can apply to catch up with a potential delay
  );
  // console.log(sphereBody.position.y);
  //> Transfer CANNON updates onto THREEJS object
  // #1.Manual copying
  // sphere.position.x = sphereBody.position.x;
  // sphere.position.y = sphereBody.position.y;
  // sphere.position.z = sphereBody.position.z;
  // #2.One-click copying
  // sphere.position.copy(sphereBody.position); //Copy all at one go!

  for (const object of objectsToUpdate) {
    object.mesh.position.copy(object.body.position); //copies each body position in physics scene onto 3d three.js scene object
    object.mesh.quaternion.copy(object.body.quaternion); //copies each body quaternion properties in physics scene onto  3d three.js scene object
  } //copy body positions onto mesh position to see animation

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
