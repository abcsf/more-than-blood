import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

const geometry = new THREE.BoxGeometry(1,2,1);
const material = new THREE.MeshStandardMaterial({ color: 0x00aaff });
const character = new THREE.Mesh(geometry, material);
scene.add(character);

function animate() {
  requestAnimationFrame(animate);
  character.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
