class Levels{
    constructor(){
        this.hardPlayButton = createButton("Hard")
        this.normalPlayButton = createButton("Normal")
        this.easyPlayButton = createButton("Easy")
        this.freePlayButton = createButton("Free Play")
    }

    display(){

        form.hide();

        this.normalPlayButton.position(displayWidth/2, displayHeight/2);
        this.normalPlayButton.mousePressed(()=>{
            gameState = 1;
        })
 
       this.easyPlayButton.position(displayWidth/2, displayHeight/2-200);
       this.easyPlayButton.mousePressed(()=>{
           gameState = 1;
       })

       this.hardPlayButton.position(displayWidth/2, displayHeight/2-100);
       this.hardPlayButton.mousePressed(()=>{
           gameState = 1;
       })

       this.freePlayButton.position(displayWidth/2, displayHeight/2+100);
       this.freePlayButton.mousePressed(()=>{
           gameState = 1;
       })

    //    form = new Form();
    //    form.hide();
    }

    hide(){
        this.easyPlayButton.hide();
        this.freePlayButton.hide();
        this.normalPlayButton.hide();
        this.hardPlayButton.hide();
    }
}