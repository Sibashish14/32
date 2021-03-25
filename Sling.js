class Sling{
    constructor(bodyA,pointB){
        this.pointB=pointB;
        this.bodyA=bodyA;
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        strokeWeight(2);
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}