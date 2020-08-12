class Grade {
    constructor() {
        this.title = createElement('h1');
        this.button1 = createButton('2-3');
        this.button2 = createButton('4-5');
        this.button3 = createButton('6-7');
    }

    hide() {
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
    }

    display() {
        this.title.html(width/2-170,height/3-60);
        this.button1.position(width/2-20,height/2-50);
        this.button2.position(width/2-20, height/2+30);
        this.button3.position(width/2-20,height/2+110); 

    this.button1.mousePressed(()=>{
        clear(0);
        gameState = "play";
        this.button1.hide();
        background("green");
        form = new Form1();
        form.display(); 
        console.log("test");
    });

    
}
}