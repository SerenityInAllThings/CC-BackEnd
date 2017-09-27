import { Map } from './Map';
import { Coordinate, Acceleration, Speed, Direction } from './Interfaces';
import { Entity } from './Entity';

export class Player extends Entity {
    private maxAcceleration: number = 2;
    private deltaAcceleration: number = 0.1;
    private decelerationProportion: number = 0.5;
    private maxSpeed = 5;
    private direction: Direction;

    constructor(map: Map, coord: Coordinate, name: string) {
        super(map, coord, name);

        this.speed = {
            x: 1,
            y: 0
        }

        this.acceleration = {
            x: 0,
            y: 0
        }

        this.direction = {
            left: false,
            right: true,
            up: false,
            down: false
        }
    }

    public displayInfo() {
        let info = {
            coord: this.coord,
            speed: this.speed,
            acceleration: this.acceleration
        }
        console.log('Player info:', JSON.stringify(info, null, 2));
    }

    public update() {
        this.displayInfo();

        this.recalculatePosition();
        this.recalculateAcceleration();
        this.recalculateSpeed();
    }

    private recalculatePosition() {
        this.coord.x += this.speed.x;
        this.coord.y += this.speed.y;
    }

    private recalculateAcceleration() {
        if (this.direction.right)
            this.acceleration.x += this.deltaAcceleration;
        if (this.direction.left)
            this.acceleration.x -= this.deltaAcceleration;
        if (this.direction.down)
            this.acceleration.y -= this.deltaAcceleration;
        if (this.direction.up)
            this.acceleration.y += this.deltaAcceleration;

        // Decelerating
        if (!this.direction.right && !this.direction.left)
            this.acceleration.x *= this.decelerationProportion;
        if (!this.direction.up && !this.direction.down)
            this.acceleration.y *= this.decelerationProportion;

        // Capping acceleration
        if (this.acceleration.x > this.maxAcceleration)
            this.acceleration.x = this.maxAcceleration;
        if (this.acceleration.x < -this.maxAcceleration)
            this.acceleration.x = -this.maxAcceleration;
        if (this.acceleration.y > this.maxAcceleration)
            this.acceleration.y = this.acceleration.y;
        if (this.acceleration.x < -this.maxAcceleration)
            this.acceleration.x = -this.maxAcceleration;
    }

    private recalculateSpeed() {
        // Recalculate speed
        this.speed.x += this.acceleration.x;
        this.speed.y += this.acceleration.y;

        // Capping speed
        if (this.speed.x > this.maxSpeed)
            this.speed.x = this.maxSpeed;
        if (this.speed.x < -this.maxSpeed)
            this.speed.x = -this.maxSpeed;
            
        if (this.speed.y > this.maxSpeed)
            this.speed.y = this.maxSpeed;
        if (this.speed.y < -this.maxSpeed)
            this.speed.y = -this.maxSpeed;
    }
}