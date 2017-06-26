const dotNum = 20;
let dots = [];
var growing =1;
let progression = 0;
var clicked =false;
let entered =false;
var Myriad;
let myCanvas;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$('body').css('background', 'rgba(247,81,77, 1)');
	$('glitch').css('background', 'rgba(247,81,77, 1)');
	$('html').css('background', 'rgba(247,81,77, 1)')
}


function preload(){
	 Myriad = loadFont('assets/MyriadPro-Semibold.otf')
}

function setup(){
	myCanvas = createCanvas(windowWidth,windowHeight);
	ctx = canvas.getContext('2d');
	myCanvas.id('myCanvas');
	for(let x = 1; x< dotNum+1; x++){
		dots[x] = new Dot(x, x/10*(windowWidth*Math.random()), x/10*(windowHeight*Math.random()));
	}
}

function draw(){
	background(247,81,77);
	// console.log(stage);

	// background(0,81,77);

	for (let x = 1; x<dotNum; x++){	
		for(let y = x+1; y<dotNum; y++){
			colorMode(RGB, 255,255,255, 1);
			distance = Math.sqrt((dots[y].x-dots[x].x)*(dots[y].x-dots[x].x)+(dots[y].y-dots[x].y)*(dots[y].y-dots[x].y))

			if(distance<300){
				opacity = 1-(distance/300);
				strokeWeight(1);
				stroke(255,255,255, opacity);
				line(dots[x].x, dots[x].y, dots[y].x, dots[y].y);
			}
		}
		dots[x].display();
		dots[x].move();

	}
}


function Dot(number, xpos, ypos){
	this.number = number;
	this.x = xpos;
	this.y = ypos;
	this.xspeed = speedCalculator();
	this.yspeed = speedCalculator();
	this.size = 20;
	this.display = function() {
		if(this.mouseIn()===false){
			push();
			fill(255);
			beginShape();
			vertex(this.x,this.y+15);
			vertex(this.x+15, this.y+7.5);
			vertex(this.x+15, this.y-7.5);
			vertex(this.x, this.y-15);
			vertex(this.x-15, this.y-7.5);
			vertex( this.x-15, this.y+7.5);
			vertex(this.x,this.y+15);
			endShape();
			pop();
}
		
		// if (this.mouseIn() ===true && checkIn(this.number)===false){
			push();
		// 	// if(this.size <windowWidth){
		// 	// 	this.size += this.size+0.0000000001;
		// 	// }
		// 	// Check where we are at in the unfoldingpush();
		// 	push();
		// 	fill(255);
		// 	textSize(16);
		// 	// noStroke();
		// 	stroke(244);
		// 	textFont(Myriad);
		// 	switch (stage){
		// 		case 0:
		// 			text('About Me', this.x-25, this.y-20);
		// 			break;
		// 		case 1:
		// 			text('Education', this.x-25, this.y-20);
		// 			break;
		// 		case 2:
		// 			text('Professional Experience', this.x-25, this.y-20);
		// 			break;
		// 		case 3:
		// 			text('Hobbies', this.x-25, this.y-20);
		// 			break;
		// 		case 4:
		// 			text('Skills', this.x-25, this.y-20);
		// 			break;
		// 		case 5:
		// 			text('Vision', this.x-25, this.y-20);
		// 			break;
		// 		case 6:
		// 			text('Go To Menu', this.x-25, this.y-20);
		// 			break;
		// 		default:
		// 			break;

		// 	}
		// }
		// pop()

			noFill();
			strokeWeight(3);
			stroke(255);
			beginShape();
			vertex(this.x,this.y+15);
			vertex(this.x+15, this.y+7.5);
			vertex(this.x+15, this.y-7.5);
			vertex(this.x, this.y-15);
			vertex(this.x-15, this.y-7.5);
			vertex( this.x-15, this.y+7.5);
			vertex(this.x,this.y+15);
			endShape();

			pop();
	}

		
	
	this.move = function() {
	

		if(this.mouseIn()===true){
			if(checkIn(this.number)===true){
				this.x += this.xspeed;
				this.y -= this.yspeed;
				if(this.y>=windowHeight || this.y<=0)
					this.yspeed= -this.yspeed;
				
				if(this.x>=windowWidth || this.x<=0)
					this.xspeed= -this.xspeed;
				
			}
			else		
				return;
		}
		
		if(this.mouseIn(this.number) === false){
			if(checkIn(this.number)===false)
				return;
			else{
				this.x += this.xspeed;
				this.y -= this.yspeed;
				if(this.y>=windowHeight || this.y<=0)
					this.yspeed= -this.yspeed;
				
				if(this.x>=windowWidth || this.x<=0)
					this.xspeed= -this.xspeed;
			}
		}	
		
	}

	this.mouseIn = function(){
		if(mouseX >=this.x-20 && mouseX <= this.x+20 && mouseY >=this.y-20 && mouseY <= this.y+20){

			return true;

		}
		else 
			return false;
	}

	
}

function speedCalculator(){
	let value = 1+Math.random()-0.5;
	let truthIndicator = Math.random();
	if(truthIndicator <0.5)
		return value;
	else 
		return -value;
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}


function mousePressed(){

	for (let x = 1; x<dotNum; x++){
		if(mouseX >= dots[x].x-20 && mouseX <= dots[x].x+20 && mouseY >=dots[x].y-20 && mouseY <= dots[x].y+20){
			if(stage<=$($('.main-content-box')).length)
				stage++;
			$($('.guidance')[0]).removeClass('visible');
			$($('.guidance')[1]).removeClass('visible');


			for(let x=1; x< $($('.main-content-box')).length+1; x++){
				// console.log(stage)
				if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

				glitch[x] = new Glitch();
			}
				if(stage===1 &&x ===1) {
					$($('.guidance')[0]).removeClass('visible');
					$($('.guidance')[1]).removeClass('visible');

					$($('.guidance')[2]).removeClass('visible');
					if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
						glitch[x].init();

					$('.main-content-box').removeClass('visible');
					$($('.main-content-box')[x-1]).addClass('visible');
					$($('.main-content-box')[x-1]).css('animation', 'clipit 1s');
					setTimeout(function(){ 
						if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

							glitch[x].on =false;
							// glitch[x].init();
							glitch[x].stop();}
					$('#read-mode').css('opacity', '1');

					$('#read-bubble').css('opacity', '1');

						},1000);
					setTimeout(function(){
							$('#read-bubble').css('opacity', '0');
						}, 5000);

					
					$($('.side-menu ul li')[0]).addClass('visible');
				}
				else if(stage===x) {
					let truthIndicator = Math.random();
					if(truthIndicator <0.5){
						if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
							glitch[x].init();
						$($('.main-content-box')[x-2]).removeClass('visible');
						$($('.main-content-box')[x-1]).addClass('visible');
						$($('.main-content-box')[x-1]).css('animation', 'clipit 1s');
						setTimeout(function(){ 
							if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

							glitch[x].on =false;
							// glitch[x].init();
							glitch[x].stop();}
						},
						1000);
					}
					else {
						$($('.main-content-box')[x-2]).removeClass('visible');
						$($('.main-content-box')[x-1]).addClass('visible');
						$($('.main-content-box')[x-1]).css('animation', 'clipit 1.5s');
					}

					
					$($('.side-menu ul li')[x-1]).addClass('visible');
				}
			}
	}
	
}
}

function checkIn(current){
	for(let x=1; x<dotNum; x++){
		if(dots[x].mouseIn()===true && x!== current){
			return true
		}
	}
	return false;
}


