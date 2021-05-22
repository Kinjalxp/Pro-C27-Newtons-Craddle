class Bob{
   
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0,
            density :  0.5
        }
        console.log(this.body);
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        console.log("HOW ARE YOU");
        World.add(myWorld,this.body);
    }
     
    display(){
        var pos = this.body.position;
        var angles = this.body.angle;
        fill("Pink");
        push();
        translate(pos.x,pos.y);
        rotate (angles);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}