// console.log(THREE);

//1) Create a scene
const scene = new THREE.Scene();
//2) Create a mesh/object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
//3) Create a camera

const sizes = { width: 800, height: 600 };

const camera = new THREE.PerspectiveCamera(
  75, //fov
  sizes.width / sizes.height //aspect ratio
  // 0.1, // near
  // 2000 // far
);
camera.position.z = 5;
camera.position.x = 2;
camera.position.y = -1;

scene.add(camera);

//4) Render the scene to HTML canvas element
const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({
  canvas, // canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
