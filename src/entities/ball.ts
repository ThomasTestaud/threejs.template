import Entity from "../models/Entity";
import * as THREE from 'three';

class Ball extends Entity {

    public setup(): void {
        // Setup the ball
        const ballGeometry = new THREE.SphereGeometry(0.6, 32, 32);
        const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const ball = new THREE.Mesh(ballGeometry, ballMaterial);
        ball.position.y = 0.3;
        ball.castShadow = true;
        this.group.add(ball);

        this.position.y = 15;
    }

    public onColision(entity: Entity): void {
        if (
            entity.name === 'Player' &&
            this.group.position.distanceTo(entity.group.position) < 1
        ) {
            this.position.z += Math.cos(entity.rotation.y);
            this.position.x += Math.sin(entity.rotation.y);
        }

        if (
            entity.name === 'Goal' &&
            this.group.position.x < entity.group.position.x + 5 && this.group.position.x > entity.group.position.x - 5 
            &&
            this.group.position.z < entity.group.position.z + 1 && this.group.position.z > entity.group.position.z - 1
        ) {
            alert('You win !');
            this.position.z = 0;
            this.position.x = 0;
            window.location.reload();
        }
    }

    public onAnimation(): void {
        // Animate the ball
        if (this.position.y >= 0) {
            this.position.y -= this.speed;
            this.speed += 0.01;
        } else if (this.position.y < 0) {
            this.speed = this.speed * -0.5;
            this.position.y = 0;
        }

    }
}

export default Ball;