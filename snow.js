class Snow{
    constructor(){
        this.image=loadImage("snow4.webp")
        var options={
            friction:0.3
        }
this.body=Bodies.circle(x,y,40,options)
World.add(world,this.body)

    }
    display(){
        push()
        imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,40)
pop()
    }
}