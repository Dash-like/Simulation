class Ball {
    constructor(x, y, radius) {
        var options = {
            restitution: 1,
            density: 1.2,
            isStatic: false
        }

        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius = radius;
       
    }
    display() {
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
       
        translate(pos.x, pos.y)
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius,this.radius);
       pop();
        
    }
}