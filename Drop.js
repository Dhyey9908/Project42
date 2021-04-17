class Drop {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0
        }
        this.r = 5;
        this.rain = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.rain);
    }
    display() {

        var pos = this.rain.position;
        var angle = this.rain.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("Blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

    update(){
        if (this.rain.position.y>height) {
            Matter.Body.setPosition(this.rain,{x : random(0,400), y : random(0,400)});       
        }
    }

}