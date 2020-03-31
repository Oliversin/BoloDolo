class Board {

	constructor (w, h, c) {
		this.w = w //Ancho
		this.h = h //Alto
		this.c = c //Color
	}

	draw () {
		push()
		noStroke()
		fill(this.c)
		rect(0, 0, this.w, this.h)
		stroke('white')
		strokeWeight(5)
		line(floor(this.w / 2), 0, floor(this.w / 2), this.h)
		pop()
	}

}