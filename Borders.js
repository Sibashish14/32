class Borders{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
       
        var options={
           isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}