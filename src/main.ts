import * as THREE from 'three';
import Player from './entities/player';
import Floor from './entities/floor';
import Ball from './entities/ball';
import Goal from './entities/goal';

let renderer: THREE.WebGLRenderer;
let camera: THREE.PerspectiveCamera;
const scene = new THREE.Scene();

const setup = () => {
    // Set up renderer, scene, and camera
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;  // Enable shadow map rendering
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 25;
    camera.position.y = 15;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    light.castShadow = true;
    scene.add(light);

    // Shadow params
    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);


    // Background color
    scene.background = new THREE.Color(0x00bfff);
}; setup();

const player = new Player();

const entities = [
    player,
    new Floor(),
    new Ball(),
    new Goal()
];

entities.forEach(entity => {
    entity.setup();
    scene.add(entity.group);
});


// Render loop
function animate(): void {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    entities.forEach(entity => {
        entity.onAnimation();
        entity.applyPositionAndRotationToGroup();
    });

    // Update camera position
    camera.lookAt(player.group.position);

    // Handle colisions
    entities.forEach(entity => {
        entities.forEach(otherEntity => {
            if (entity !== otherEntity) {
                entity.onColision(otherEntity);
            }
        });
    });
}

animate();
