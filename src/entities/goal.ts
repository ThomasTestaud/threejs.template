import Entity from "../models/Entity";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class Goal extends Entity {

    public name: string = 'Goal';

    public setup(): void {
        // Import gltf model
        const loader = new GLTFLoader();
        loader.load('./src/3D_models/goal/scene.gltf', (gltf) => {
            gltf.scene.scale.set(3.5, 3.5, 3.5);
            this.group.add(gltf.scene);
        });

        this.position.z = -30;
    }
}

export default Goal;