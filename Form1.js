class Form1 {
    constructor() {
        this.question1 = createElement('h2',"Q1) 80+40 = ?");
        this.radio = createRadio('h2');
        this.radio.option('130');
        this.radio.option('135');
        this.radio.option('140');
        this.radio.option('150');

        this.question2 = createElement('h2',"Q2) 4*60 = ?");
        this.radio2 = createRadio('h2');
        this.radio2.option('210');
        this.radio2.option('240');
        this.radio2.option('21');
        this.radio2.option('300');

        this.question3 = createElement('h2',"Q3) 716+253 = ?") ;
        this.radio3 = createRadio('h2');
        this.radio3.option('979');
        this.radio3.option('968');
        this.radio3.option('958');
        this.radio3.option('969');
    }
    display() {
        this.question1.position(width/2-250,height/3-150);
        this.radio.position(width/2-250,height/3-100);

        this.question2.position(width/2-250,height/2-150);
        this.radio2.position(width/2-250, height/2-100);

        //this.question3.position(width/2-250,height/2)
    }
    
}