var drops = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	for(var i = 0; i< 200; i++){
  	drops.push(new Drop());
	}
}

function draw() {
  background(0);
  for(var i = 0; i< 200; i++){
  	drops[i].show();
  	drops[i].fall();
	}
}
