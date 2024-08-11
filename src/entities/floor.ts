import Entity from '../models/Entity';
import * as THREE from 'three';

class Floor extends Entity {

    public setup(): void {
        // Setup the floor
        const floorGeometry = new THREE.PlaneGeometry(100, 100);
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = 0;
        floor.receiveShadow = true;
        this.group.add(floor);
    }

    public onAnimation(): void {
        // Animate the floor
    }
}

export default Floor;