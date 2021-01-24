class Hammer{
    constructor(x,y,width,height){
        var options = {
            'density':2.0, 
            'restitution':0.5, 
            'friction':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width
        this.height = height
    }
    display(){

        push();
        this.body.position.x = mouseX
        this.body.position.y = mouseY
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("orange")
        rect(0,0,this.width,this.height);
        pop();
    }
    
   

}