
function Drop() {
	this.x = random(0,width);
	this.y = random(-1000,-50);
	this.z = random(0,20);
	this.g = map(this.z,0,20,0.01,0.2);
	this.vel = map(this.z,0,20,0,10);
	this.length = map(this.z,0,20,10,30);
	this.fall = function() {
		if(this.y >= height){
			this.y = random(-100,-200);
			this.vel = map(this.z,0,20,0,10);
		}
		this.y = this.y + this.vel;
		this.vel = this.vel + this.g;
	}
	this.show = function() {
		stroke(0,255,0);
		 strokeWeight(map(this.z, 0, 20, 1, 3));
		line(this.x,this.y,this.x,this.y+this.length);
	}
	
}