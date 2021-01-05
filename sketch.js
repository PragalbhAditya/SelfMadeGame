var form, levels, game;
var player, player2;
var ball;
var gameState = 0;

function preload() {
}

function setup(){
    createCanvas(displayWidth, displayHeight);
    game = new Game();
}

function draw(){
    background("red");

    form = new Form();
    if(gameState === 0){
        form.display();
    }

    if(gameState === 1){
        game.play();
    }

    if(gameState === 2){
        game.end();
    }
}