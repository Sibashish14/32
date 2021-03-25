class Bird{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image1=loadImage("bird.png");
        var option={
            restitution:0.2,
            friction:0.2,
            density:0.2,
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        Matter.Body.setStatic(this.body,false);
    }
    display(){
     push();
     translate(this.body.position.x,this.body.position.y);
     rotate(this.body.angle);
     imageMode(CENTER);
     image(this.image1,0,0,this.width,this.height);
     pop();
}
 }