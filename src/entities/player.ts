import Entity from '../models/Entity';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class Player extends Entity {

    name = 'Player';

    public commandes: any = {
        up: false,
        down: false,
        left: false,
        right: false
    };

    public setup(): void {

        // Import gltf model
        const loader = new GLTFLoader();
        loader.load('./src/3D_models/persona_formal/scene.gltf', (gltf) => {
            gltf.scene.scale.set(30, 30, 30);
            gltf.scene.position.y = 5.5;
            this.group.add(gltf.scene);
        });

        // Create the controls
        document.addEventListener('keydown', (event) => {
            if (event.key === 'z') {
                this.commandes.up = true;
            }
            if (event.key === 's') {
                this.commandes.down = true;
            }
            if (event.key === 'q') {
                this.commandes.left = true;
            }
            if (event.key === 'd') {
                this.commandes.right = true;
            }
        });

        document.addEventListener('keyup', (event) => {
            if (event.key === 'z') {
                this.commandes.up = false;
            }
            if (event.key === 's') {
                this.commandes.down = false;
            }
            if (event.key === 'q') {
                this.commandes.left = false;
            }
            if (event.key === 'd') {
                this.commandes.right = false;
            }
        });
    }

    public onAnimation(): void {
        // Animate the player
        if (this.commandes.up) {
            this.position.z -= 0.1;
            this.rotation.y = Math.PI;
        }
        if (this.commandes.down) {
            this.position.z += 0.1;
            this.rotation.y = 0;
        }
        if (this.commandes.left) {
            this.position.x -= 0.1;
            this.rotation.y = -Math.PI / 2;
        }
        if (this.commandes.right) {
            this.position.x += 0.1;
            this.rotation.y = Math.PI / 2;
        }
    }
}

export default Player;
