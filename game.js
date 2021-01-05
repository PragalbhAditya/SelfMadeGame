class Game{
    constructor(){
    //    this.player1 = Bodies.circle(200,200,20);
    //   World.add(world, this.player);

    //     this.player2 = Bodies.circle(200,300,20);
    //     World.add(world, this.player2);
    }

    play(){
        // var player1Pos = this.player1.position;
        // var player2Pos = this.player2.position;

        // ellipse(player2Pos.x = player2Pos.y)

        player = createSprite(displayWidth/2, displayHeight/2-200, 20, 20);
        player2 = createSprite(displayWidth/2, displayHeight/2+200, 20, 20);
        ball = createSprite(displayWidth/2, displayHeight/2, 10, 10);

        // player.position.X = mouseX;
        // player.position.Y = mouseY;

        if(keyDown (UP_ARROW) ){
            player.velocity.x = 3;
            player.velocity.y = 3;
        }
        if(keyDown ("space")){
            ball.velocity.x = 0;
            ball.velocity.y = -3;
        }
        drawSprites();

        console.log("Game Play");

        levels.hide();
        form.hide();
    }

    end(){
        console.log("Game End");
    }
}