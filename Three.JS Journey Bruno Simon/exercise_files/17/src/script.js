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

const doorColorTexture = textureLoader.load('/textures/door/color.jpg');
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const doorAmbientOcculisionTexture = textureLoader.load(
  '/textures/door/ambientOcclusion.jpg'
);
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg');
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg');
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg');

const bricksColorTexture = textureLoader.load('/textures/bricks/color.jpg');
const bricksAmbientOcclusionTexture = textureLoader.load(
  '/textures/bricks/ambientOcclusion.jpg'
);
const bricksNormalTexture = textureLoader.load('/textures/bricks/normal.jpg');
const bricksRoughnessTexture = textureLoader.load(
  '/textures/bricks/roughness.jpg'
);

const grassColorTexture = textureLoader.load('/textures/grass/color.jpg');
const grassAmbientOcclusionTexture = textureLoader.load(
  '/textures/grass/ambientOcclusion.jpg'
);
const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg');
const grassRoughnessTexture = textureLoader.load(
  '/textures/grass/roughness.jpg'
);

grassNormalTexture.wrapS = THREE.RepeatWrapping; //enable repating texture in X direction
grassColorTexture.wrapS = THREE.RepeatWrapping; //enable repating texture in X direction
grassRoughnessTexture.wrapS = THREE.RepeatWrapping; //enable repating texture in X direction
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping; //enable repating texture in X direction
grassNormalTexture.wrapT = THREE.RepeatWrapping; //enable repating texture in Y direction
grassColorTexture.wrapT = THREE.RepeatWrapping; //enable repating texture in Y direction
grassRoughnessTexture.wrapT = THREE.RepeatWrapping; //enable repating texture in Y direction
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping; //enable repating texture in Y direction
grassColorTexture.repeat.set(8, 8); //provide repeating amount in each direction
grassAmbientOcclusionTexture.repeat.set(8, 8); //provide repeating amount in each direction
grassNormalTexture.repeat.set(8, 8); //provide repeating amount in each direction
grassRoughnessTexture.repeat.set(8, 8); //provide repeating amount in each direction

/**
 * House
 */

//MODEL GROUP
const house = new THREE.Group();
scene.add(house);

//WALLS
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(4, 2.5, 4),
  new THREE.MeshStandardMaterial({
    // color: '#ac8e82',
    map: bricksColorTexture,
    aoMap: bricksAmbientOcclusionTexture,
    normalMap: bricksNormalTexture,
    roughnessMap: bricksRoughnessTexture,
  })
);
walls.geometry.setAttribute(
  'uv2',
  new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
); //UV2 REPLICATING UV ATTRIBUTE FOR AO MAP TO FUNCTION
walls.position.y = 1.25;

house.add(walls);

//ROOF
const roof = new THREE.Mesh(
  new THREE.ConeGeometry(3.5, 1, 4),
  new THREE.MeshStandardMaterial({ color: '#b35f45' })
);
roof.position.y = 3;
roof.rotation.y = Math.PI / 4;
house.add(roof);

//DOOR
const door = new THREE.Mesh(
  new THREE.PlaneGeometry(2.2, 2.2, 100, 100), //third and forth attributes are subdivision in x/y directions
  new THREE.MeshStandardMaterial({
    // color: '#aa7b7b',
    map: doorColorTexture,
    transparent: true, //NEEDS TO BE ACTIVATED FOR ALPHAMAP TO FUNCTION
    alphaMap: doorAlphaTexture,
    aoMap: doorAmbientOcculisionTexture,
    aoMapIntensity: 2,
    displacementMap: doorHeightTexture,
    displacementScale: 0.1,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
  })
);
door.geometry.setAttribute(
  'uv2',
  new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
); //UV2 REPLICATING UV ATTRIBUTE FOR AO MAP TO FUNCTION
door.position.z = 2.0001;
door.position.y = 1;
house.add(door);

//BUSHES
const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({ color: '#89c854' });
const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.scale.set(0.5, 0.5, 0.5);
bush1.position.set(0.8, 0.2, 2.2);
const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.scale.set(0.25, 0.25, 0.25);
bush2.position.set(1.4, 0.1, 2.1);
const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.set(0.4, 0.4, 0.4);
bush3.position.set(-0.8, 0.1, 2.2);
const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.scale.set(0.15, 0.15, 0.15);
bush4.position.set(-1, 0.05, 2.6);
house.add(bush1, bush2, bush3, bush4);

//GRAVES
const graves = new THREE.Group();
scene.add(graves);
const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({ color: '#b2b6b1' });
//Random grave locations
for (let i = 0; i < 50; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 3.5 + Math.random() * 6;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  const grave = new THREE.Mesh(graveGeometry, graveMaterial);
  grave.castShadow = true; //Enable procedural grave stones to cast shadows
  grave.position.set(x, 0.3, z);
  grave.rotation.y = (Math.random() - 0.5) * 0.4;
  grave.rotation.z = (Math.random() - 0.5) * 0.1;
  graves.add(grave);
}

// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({
    // color: '#a9c388',
    map: grassColorTexture,
    aoMap: grassAmbientOcclusionTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
  })
);
floor.geometry.setAttribute(
  'uv2',
  new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
); //UV2 REPLICATING UV ATTRIBUTE FOR AO MAP TO FUNCTION
floor.rotation.x = -Math.PI * 0.5;
floor.position.y = 0;
scene.add(floor);

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12);
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001);
scene.add(ambientLight);

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12);
moonLight.position.set(4, 5, -2);
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001);
gui.add(moonLight.position, 'x').min(-5).max(5).step(0.001);
gui.add(moonLight.position, 'y').min(-5).max(5).step(0.001);
gui.add(moonLight.position, 'z').min(-5).max(5).step(0.001);
scene.add(moonLight);

//DOOR LIGHT
const doorLight = new THREE.PointLight('#ff7d46', 1, 7);
doorLight.position.set(0, 2.2, 2.7);
house.add(doorLight);

//FOG
const fog = new THREE.Fog('#262837', 1, 15);
scene.fog = fog;

//GHOSTS
const ghost1 = new THREE.PointLight('#ff00ff', 2, 3);
ghost1.castShadow = true;
scene.add(ghost1);
const ghost2 = new THREE.PointLight('#00ffff', 2, 3);
ghost2.castShadow = true;
scene.add(ghost2);
const ghost3 = new THREE.PointLight('#ffff00', 2, 3);
ghost3.castShadow = true;
scene.add(ghost3);

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
camera.position.x = 4;
camera.position.y = 2;
camera.position.z = 5;
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
renderer.setClearColor('#262837'); //makes render go seamless with the matching fog color

// Shadow Rendering
renderer.shadowMap.enabled = true; //Enable shadows globally on the scene
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

//Set objects which cast or receive shadows
bush1.castShadow = true;
bush2.castShadow = true;
bush3.castShadow = true;
bush4.castShadow = true;
moonLight.castShadow = true;
doorLight.castShadow = true;
walls.castShadow = true;
roof.castShadow = true;
floor.receiveShadow = true;

//ShadowMap optimization
doorLight.shadow.mapSize.width = 256;
doorLight.shadow.mapSize.height = 256;
doorLight.shadow.camera.far = 7;
ghost1.shadow.mapSize.width = 256;
ghost1.shadow.mapSize.height = 256;
ghost1.shadow.camera.far = 7;
ghost2.shadow.mapSize.width = 256;
ghost2.shadow.mapSize.height = 256;
ghost2.shadow.camera.far = 7;
ghost3.shadow.mapSize.width = 256;
ghost3.shadow.mapSize.height = 256;
ghost3.shadow.camera.far = 7;

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update ghosts
  const ghost1Angle = elapsedTime * 0.5;
  ghost1.position.x = Math.cos(ghost1Angle) * 4;
  ghost1.position.y = Math.sin(elapsedTime * 3);
  ghost1.position.z = Math.sin(ghost1Angle) * 4;
  const ghost2Angle = -elapsedTime * 0.32;
  ghost2.position.x = Math.cos(ghost2Angle) * 4.5;
  ghost2.position.y = Math.sin(elapsedTime * 5) + Math.sin(elapsedTime * 2.5);
  ghost2.position.z = Math.sin(ghost2Angle) * 5;
  const ghost3Angle = -elapsedTime * 0.3;
  ghost3.position.x = Math.cos(ghost3Angle) * (6 + Math.sin(elapsedTime * 0.5));
  ghost3.position.y = Math.sin(elapsedTime * 3) + Math.sin(elapsedTime * 2.5);
  ghost3.position.z =
    Math.sin(ghost3Angle) * (6 + Math.sin(elapsedTime * 0.32));
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
