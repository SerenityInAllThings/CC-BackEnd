import { Map } from './Map';
import { Entity } from './Entity';
import { Player } from './Player';

export class Game {
    private map: Map;

    constructor(mapWidth: number, mapHeight: number) {
        // Creating the map
        this.map = new Map(mapWidth, mapHeight);
    }

    public run(framesPerSecond: number) {
        // This function should be ran once
        setInterval(this.map.update, framesPerSecond, this.map);


        // Test zone
        let player1 = new Player(this.map, {x: 50, y: 50}, 'player1');
        this.map.addEntity(player1);

        this.map.Entities.forEach(currentEntity=>{
            currentEntity.displayInfo();
        });
    }
}