import * as THREE from "three";
// Import libraries
import * as d3 from "d3";

// Data (replace with your actual data)
const data = [
  { x: 1, y: 2, z: 3 },
  { x: 4, y: 5, z: 6 },
  { x: 7, y: 8, z: 9 },
];

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry and material
const geometry = new THREE.SphereGeometry(0.2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// D3 scale for mapping data to 3D space
const xScale = d3
  .scaleLinear()
  .domain([d3.min(data, (d) => d.x), d3.max(data, (d) => d.x)])
  .range([-5, 5]);
const yScale = d3
  .scaleLinear()
  .domain([d3.min(data, (d) => d.y), d3.max(data, (d) => d.y)])
  .range([-5, 5]);
const zScale = d3
  .scaleLinear()
  .domain([d3.min(data, (d) => d.z), d3.max(data, (d) => d.z)])
  .range([-5, 5]);

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);

  // Update data points position based on D3 scales
  data.forEach((point) => {
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = xScale(point.x);
    sphere.position.y = yScale(point.y);
    sphere.position.z = zScale(point.z);
    scene.add(sphere);
  });

  // Render the scene
  renderer.render(scene, camera);
};

animate();
