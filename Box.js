class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.x = x;
        this.y = y;

        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
    display(color){

        if(this.body.speed < 3){
            var pos =this.body.position;
            push();
            rectMode(CENTER);
            fill(color);
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        } else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            pop();
        }
    }

    score(){
        if(this.Visiblity < 0 && this.Visiblity >=-105){
            score++;
        }
        
    }
}