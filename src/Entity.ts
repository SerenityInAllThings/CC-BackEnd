import { Map } from './Map';
import { Coordinate, Speed, Acceleration } from './Interfaces';

export class Entity {
    public speed: Speed;
    public acceleration: Acceleration;

    constructor(private map: Map, public coord: Coordinate, public name: string) {
        this.speed = {
            x: 0,
            y: 0
        }

        this.acceleration = {
            x: 0,
            y: 0
        }
    }

    public displayInfo() {
        let info = {
            coord: this.coord,
            speed: this.speed,
            acceleration: this.acceleration
        }
        console.log('Entity info:', JSON.stringify(info, null, 2));
    }

    public update(myself?: Entity){
        
    }
}