import * as THREE from 'three';

class Entity {
    public name: string = '';
    public position: THREE.Vector3 = new THREE.Vector3();
    public rotation: THREE.Euler = new THREE.Euler();
    public speed: number = 0;
    public group: THREE.Group = new THREE.Group();

    public setup(): void {
    }
    public onAnimation(): void {
    }
    public onColision(entity: Entity): void {
    }
    public applyPositionAndRotationToGroup(): void {
        this.group.position.copy(this.position);
        this.group.rotation.copy(this.rotation);
    }
    public applySpeedToPosition(): void {
        this.position.x += Math.sin(this.rotation.y) * this.speed;
        this.position.z += Math.cos(this.rotation.y) * this.speed;
    }
}

export default Entity;