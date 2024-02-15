import * as THREE from "three";

import Chart from "chart.js/auto";

// Create a three.js scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a chart.js scatter chart
var ctx = document.getElementById("chart").getContext("2d");
var chart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Data",
        data: [
          { x: 1, y: 2, z: 3 },
          { x: 4, y: 5, z: 6 },
          { x: 7, y: 8, z: 9 },
        ],
        backgroundColor: "red",
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "linear",
      },
    },
  },
});

// Create a three.js mesh for each data point
var geometry = new THREE.SphereGeometry(0.1, 32, 32);
var material = new THREE.MeshBasicMaterial({ color: "red" });
var meshes = [];
chart.data.datasets[0].data.forEach(function (point) {
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(point.x, point.y, point.z);
  scene.add(mesh);
  meshes.push(mesh);
});

// Update the three.js scene on chart update
chart.on("update", function () {
  chart.data.datasets[0].data.forEach(function (point, index) {
    var mesh = meshes[index];
    mesh.position.set(point.x, point.y, point.z);
  });
});

// Render the three.js scene
camera.position.z = 10;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
