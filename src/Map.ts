import { Entity } from './Entity';

export class Map {
    public Entities: Entity[] = [];

    constructor(public Width: number, public Height: number) { }
    public displayInfo() {
        console.log('MapInfo:', JSON.stringify(this, null, 2));
    }

    public addEntity(newEntity: Entity) {
        this.Entities.push(newEntity);
    }

    public update(me: Map) {
        me.Entities.forEach(currentEntity => { currentEntity.update(currentEntity) });
    }
}