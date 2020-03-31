class Ball{
	constructor(x,y,d,c){
		this.x = x;
		this.y = y;
		this.d = d;
		this.c = c;
		this.speed = 5
		this.speedX = 2 * this.direction()
		this.speedY = 2 * this.direction()
	}

	draw(){
		push()
		noStroke()
		fill(this.c)
		ellipse(this.x,this.y, this.d, this.d)
		pop()
	}

	move(/*dir*/){
		console.log(this.speedX +"&"+this.speedY)
		this.x += this.speedX
		this.y += this.speedY

		/*if (this.x >windowWidth-20) {
			this.speedX = -2
		}else if (this.x < 20) {
			this.speedX = 2
		}

		if (this.y > windowHeight-20) {
			this.speedY = -2
		}else if (this.y <20) {
			this.speedY = 2
		}*/

		/*if (dir == 0) {
			this.x+=this.speed;
			this.y+=this.speed;
		}else if (dir == 1) {
			this.x+=this.speed;
			this.y-=this.speed;
		}else if (dir == 2) {
			this.x-=this.speed;
			this.y+=this.speed;
			
		}else if (dir == 3) {
			this.x-=this.speed;
			this.y-=this.speed;
		}*/
		
	}
	collision(){
		if (this.x >windowWidth-20) {
			this.speedX = -2
		}else if (this.x < 20) {
			this.speedX = 2
		}

		if (this.y > windowHeight-20) {
			this.speedY = -2
		}else if (this.y <20) {
			this.speedY = 2
		}

	}

	changeDir(){
		this.speedX=this.speedX*-1
		this.speedY=this.speedY*-1
	}

	/*collisionBall(other){
		if (this.x == other.x-20) {
			this.speedX = -2
			other.speedX = -2
		}else if (this.x  == other.x+20) {
			this.speedX = 2
			other.speedX = 2
		}

		if (this.y == other.y-20) {
			this.speedY = -2
			other.speedY = -2
		}else if (this.y == other.y+20) {
			this.speedY = 2
			other.speedY = -2
		}

	}*/

	direction(){
		return floor(random(2))* 2 - 1;
	}


}