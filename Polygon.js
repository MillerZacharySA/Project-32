class Polygon{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.x = x;
        this.y = y;

        this.image = loadImage("polygon.png");

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
    display(){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
        pop();
    }
}

