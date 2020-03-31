let board
let p1
let p2
let ballerino;
let balls = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	board = new Board(windowWidth, windowHeight, '#1c1605')
	ballerino = new Ball( floor(windowWidth / 2),  floor(windowHeight / 2), 40, 'green')
	//balls.push(new Ball( floor(windowWidth / 2),  floor(windowHeight / 2), 40, 'green')) 
}

function draw() {
	board.draw()
	//background(255);
	for (var i = 0;i < balls.length;i++){
		balls[i].draw()
		balls[i].collision()
		balls[i].move()
		for (var j = 0; j < balls.length; j++) {
			if ((balls[i].x>=balls[j].x && balls[i].x<=balls[j].x+20) && (balls[i].y>=balls[j].y && balls[i].y<=balls[j].y+20)) {
    			balls[i].changeDir();
    			balls[j].changeDir()
    		}
	      
	    }
	}
	/*ballerino.draw();
	ballerino.move();*/
}

function mousePressed(){
	console.log(mouseX + "&" + mouseY)
	balls.push(new Ball( mouseX,  mouseY, 40, 'green'))
}
