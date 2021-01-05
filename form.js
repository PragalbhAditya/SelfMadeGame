class Form{
    constructor(){
        this.levelButton = createButton("Levels")
        this.playButton = createButton("Play")
        this.title = createElement("h1")
    }
    hide(){
        this.levelButton.hide();
        this.playButton.hide();
    }

    display(){
        this.levelButton.position(displayWidth/2,displayHeight/2);
        this.levelButton.mousePressed(()=>{
        levels = new Levels(); 
            form.hide();
            this.levelButton.hide();
            this.playButton.hide();
            levels.display();
       })

       this.playButton.position(displayWidth/2-50, displayHeight/2-50);
       this.playButton.mousePressed(()=>{
        form.hide();
        this.levelButton.hide();
        this.playButton.hide();
        game.play();  
       })

       this.title.html("Hockey Game");
       this.title.position(displayWidth/2, displayHeight/2-200);

    }

    
}