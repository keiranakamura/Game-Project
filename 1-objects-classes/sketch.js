//create a variable to hold one ball
let b;
let anotherBall;
let c;
let thirdBall;
let f;
let anotherFish;

function setup() {
  createCanvas(800, 400);
  b = new Ball(100, 100,"red",.7); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,200,"green", .7);
  c = new Ball(100, 250,"blue", .7); //make a new ball from the Ball class and call it b.
  thirdBall = new Ball(200,50,"yellow", .7);
  f = new Fish(100, 200,"blue",.5); //make a new ball from the Ball class and call it b.
  anotherFish = new Fish(100,10,"yellow",.2);
}


function draw(){
	background(150,150, 220,100);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    c.drawBall();
    c.moveBall();
    thirdBall.drawBall();
    thirdBall.moveBall();
    f.drawFish();
    f.moveFish();
    anotherFish.drawFish();
    anotherFish.moveFish();

}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color, speed){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.speed = speed
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,45,15);
        triangle(this.x-35, this.y+30, this.x-35,this.y-30,this.x-22.5,this.y)

	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.speed;
		this.y = this.y+.5;
	}
}
class Fish {

  	constructor(x,y,color,speed){ //every ball needs an x value and a y value
  		    this.x = x;
      		this.y = y;
          this.speed = speed;
          this.color= color;
  	}
  	drawFish(){  // draw a ball on the screen at x,y
      		stroke(0);
      		fill(this.color);
  		    ellipse(this.x,this.y,90,30);
          triangle(this.x-70, this.y+40, this.x-70,this.y-40,this.x-45,this.y)
  	}
  	moveFish(){ //update the location of the ball, so it moves across the screen
  		this.x = this.x+this.speed;
  		this.y = this.y+.5;
  	}
}
