import './style.css';
import * as THREE from 'three';
// console.log(THREE);

//-->1) Create a scene
const scene = new THREE.Scene();

//-->2) Create a mesh/object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
//-> 2.1)Position Object
// Separate Axis Positioning
// mesh.position.x = 0.7; //All objects that inherit from Object3D possess these transform properties
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// Vector set Positioning
mesh.position.set(0.7, -0.6, 1);

scene.add(mesh); //Add mesh to the scene

//->2.2)Scale Object
//Separate Axis Scaling
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 1;
//Vector set Scaling
mesh.scale.set(2, 0.5, 2);

//->2.3)Rotate Object
//Separate Axis Rotation
mesh.rotation.reorder('YXZ');
mesh.rotation.x = Math.PI; //half rotation
mesh.rotation.y = 2 * Math.PI; //full rotation
// mesh.rotation.z = 0.25 * Math.PI;

//->2.4)Quaternion

//->2.5) Add Axes Gizmo
const axesGizmo = new THREE.AxesHelper(2, 2, 5); //customize gizmo axes lengths according to your need if required
scene.add(axesGizmo);

// mesh.position.normalize(); //makes the lengths 1 in all directions - meaning reset to 0,0,0
// console.log(mesh.position.length()); //Per docs @object3d>position>vector3d>length()

//-->4) Create a camera
const sizes = { width: 800, height: 600 };
const camera = new THREE.PerspectiveCamera(
  75, //fov
  sizes.width / sizes.height //aspect ratio
  // 0.1, // near
  // 1000 // far
);

//->4.1)Position Camera
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 6;
scene.add(camera); //Add cam to the scene
// console.log(mesh.position.distanceTo(camera.position));

//->4.2)direct Camera to Look an Object
camera.lookAt(new THREE.Vector3(1, 1, 1)); //camera view direction - custom vector
camera.lookAt(mesh.position); //camera view direction - adjusted to an object center

//-->5) Render the scene to HTML canvas element
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas, // canvass: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
