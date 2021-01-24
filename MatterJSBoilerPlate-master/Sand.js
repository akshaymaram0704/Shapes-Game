class Sand{
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        World.add(world,this.body);
       
    }
    display(){

        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(this.body.position.x, this.body.position.y,20);
        pop();
    }
    
   


}





