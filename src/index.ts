import { Game } from './Game';

function initializeServer(){
    let mapWidth = 1000;
    let mapHeight = 1000;

    let game = new Game(1000, 1000);
    game.run(30);
}

initializeServer();