
var clickCount=0;
var stage = 0;
const guides = 2;
let readmode = false;
let glitch = [];

	// Glitch Line Vars
	var glitch_lines = 15,
		glitch_line_duration_min = 100,
		glitch_line_duration_max = 500,
		glitch_line_timer_min = 100,
		glitch_line_timer_max = 500,
		glitch_line_wait_min = 100,
		glitch_line_wait_max = 300,
		glitch_line_height_min = 5,
		glitch_line_height_max = 50;

	// Glitch Move Vars
	var glitch_move_color_1 = '#08FFF2',
		glitch_move_color_2 = '#FC0DFF',
		glitch_move_original_color = '#585E62',
		glitch_move_opacity = 1,
		glitch_move_duration_min = 1000,
		glitch_move_duration_max = 300,
		glitch_move_timer_min = 100,
		glitch_move_timer_max = 100,
		glitch_move_wait_min = 100,
		glitch_move_wait_max = 200,
		glitch_move_amount_min = -10,
		glitch_move_amount_max = 10;

	// Do you want to autostart on page load?
	var glitch_autostart = 1;


$(document).ready(()=>{
	if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 
	setTimeout(()=>{
		if(stage===0)
			$($('.guidance')[0]).addClass('visible')
			$('.fast-fo p').css('opacity', '1');
},4000);
					setTimeout(()=>{
						if(stage===0){
					$($('.guidance')[0]).removeClass('visible');
					$($('.guidance')[1]).addClass('visible');
					}
					}, 7300);
	}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..	setTimeout(()=>{
	$($('.guidance')[0]).addClass('visible');
		setTimeout(()=>{
			if(stage===0){
		$($('.guidance')[0]).removeClass('visible');
		$($('.guidance')[1]).addClass('visible');
		}
		}, 3300);
}
	
	// $('.guidance').click(function(){
	$('#read-mode svg').click(function(){
		$('#read-mode p').css('display', 'none');
		if(readmode===false){
			$('.main-content-box .focus').css("background", "white");
			$('.main-content-box').css("background", "white");
			$('.main-content-box .focus h1, h2, p, hr').css("color", "black");
			$('.main-content-box h1').css("color", "black");
			$('.main-content-box hr').css("border", "3px solid black");

			readmode = true;
		}
		else {
			$('.main-content-box .focus').css("background", "rgba(247,81,77, 0.7)");
			$('.main-content-box').css("background", "rgba(247,81,77, 0.5)");
			$('.main-content-box .focus h1, h2, p').css("color", "white");
			$('.main-content-box h1').css("color", "white");
			$('.main-content-box hr').css("border", "3px solid white");
			readmode= false;
		}
	});
	$('.fast-fo').click(function(){
		let y =0;
		if(stage === 0){
			$('#read-mode').css('opacity', '1');
			changePage(stage);
		}
		
		$('#intro-animation').css('opacity', '0');
		for(let x = 0; x<$('.side-menu ul li').length; x++){
			if($($('.side-menu ul li')[x]).hasClass('visible'))
				continue;
			else{
				$($('.side-menu ul li')[x]).css('transition-delay', 0.3*y+'s', '-webkit-transition-delay', 0.3*x+'s');
				$($('.side-menu ul li')[x]).addClass('visible');
				y++;
		}
		}


	});

	$(window).click(function(){
	
		
		$('.fast-fo p').css('display', 'none')

		// if(stage>2){, 

		// 	for(let x=1; x< $('.main-content-box').length; x++){

		// 		$($('.main-content-box')[x-1]).removeClass('visible');
		// 		$($('.main-content-box')[x]).addClass('visible');			
		// 	}
		// }
	});
});

	// END Click event


	//Maybe put that into a different function


	// Start Glitch on page load.
	// $(window).click(function(){
	// 	if (glitch_autostart) {
	// 		console.log('starting')
	// 		glitch = new glitch();
	// 		glitch.init();
	// 		glitch_autostart = false;
	// 	}
	// 	else
	// 	{
	// 		console.log('stopping')
	// 		glitch.on =false;
	// 		glitch.init();
	// 		glitch.stop();
	// 		glitch_autostart = true;
	// 	}
	// });
	//

	// Random integer function (Will correctly work w/ negative numbers)
	function randomInt(min, max){
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

	// Glitch functionality Thanks to Dave Han! https://codepen.io/davedehaan/pen/Jeuxq
	function Glitch() {

		// Initialize the glitches
		// - Create divs
		// - Load divs from <glitch> element
		// - Set body to not scroll on x-axis
		// - Starts glitch animations
		this.on=true;

		this.init = function() {
			if(this.on === false){
				return;
			}
			page_content = $('glitch').html();
			$('body').css('overflow-x', 'hidden');

			// Glitch Lines
			linecount = 0;
			this.glitchlines = [];
			while (linecount < glitch_lines) {
				$('body').append('<div class="glitch-line-'+linecount+'">'+page_content+'</div>');
				$('.glitch-line-'+linecount).css({
					'height': '100%',
					'width': '100%',
					'position': 'absolute',
					'top': '0',
					'left': '0'
				}).hide();
				this.glitchline('.glitch-line-'+linecount, linecount);
				linecount++;
			}

			// Glitch Move
			$('body').append('<div class="glitch-div-1">'+page_content+'</div>');
			$('body').append('<div class="glitch-div-2">'+page_content+'</div>');
			$('.glitch-div-1, .glitch-div-2').css({
				'height': '100%',
				'width': '100%',
				'position': 'absolute',
				'top': '0',
				'left': '0'
			});
			this.glitchmove();
		}
		this.stop = function(){
			page_content = $('glitch').html();
			$('body').css('overflow-x', 'hidden');

			// Glitch Lines
			linecount = 0;
			this.glitchlines = [];
			while (linecount < glitch_lines) {
				$('.glitch-line-'+linecount).remove();
				linecount++;
			}

			// Glitch Move
			$('.glitch-div-1').remove();
			$('.glitch-div-2').remove();	

		}

		this.glitchline = function(div, id) {
			// Store an array of glitchlines
			this.glitchlines[id] = new glitchline;
			this.glitchlines[id].start(div);
		}

		this.glitchmove = function() {

		// Start glitch
		this.start = function() {
			selfmove = this;

			// Create a move on a regular duration
			setInterval(function() {
				// Wait a random number of ms to execute
				setTimeout(function() {
					// Create animation
					selfmove.move();
				}, randomInt(glitch_move_wait_min, glitch_move_wait_max));
			}, randomInt(glitch_move_timer_min, glitch_move_timer_max));

		}

		this.move = function() {
			// Move the divs a random number of pixels top & left, change the color & opacity.
			$('.glitch-div-1').css({
				'left': randomInt(glitch_move_amount_min, glitch_move_amount_max) + 'px',
				'top': randomInt(glitch_move_amount_min, glitch_move_amount_max) + 'px',
				'opacity': glitch_move_opacity,
				'color': glitch_move_color_1
			});
			$('.glitch-div-2').css({
				'left': randomInt(glitch_move_amount_min, glitch_move_amount_max) + 'px',
				'top': randomInt(glitch_move_amount_min, glitch_move_amount_max) + 'px',
				'opacity': glitch_move_opacity,
				'color': glitch_move_color_2
			});

			// Prepare to move divs back
			this.moveback();
		}

		this.moveback = function() {
			// Move the divs back after a random time duration
			this.timeout = setTimeout(function() {
				// Make sure we set the text back to the original color!
				$('.glitch-div-1, .glitch-div-2').css({
					'left': '0px',
					'top': '0px',
					'color': glitch_move_original_color,
					'opacity': '1',
				});
			}, randomInt(glitch_move_duration_min, glitch_move_duration_max));
		}
	}
}

	function glitchline() {

		this.start = function(div) {
			selfline = this;
			// Hold our timeouts.
			this.timeouts = [];

			// Create a move on a regular duration
			setInterval(function() {
				// Wait a random number of ms to execute
				setTimeout(function() {
					selfline.add(div);
				}, randomInt(glitch_line_wait_min, glitch_line_wait_max));
			}, randomInt(glitch_line_timer_min, glitch_line_timer_max));
		}

		this.add = function(div) {
			// change the height, width, top, and left using a random number
			$(div).css({
				'height': randomInt(glitch_line_height_min, glitch_line_height_max) + 'px',
				'width': randomInt($(window).width()/2, $(window).width()) + 'px',
				'top': randomInt(0, $(window).height()) + 'px',
				'left': randomInt(0, $(window).width()/2) + 'px',
				'position': 'fixed',
				'overflow': 'hidden',
				'display': 'block',
				'background': '#FFF'
			});
			// Set random scroll top & scroll left.
			$(div).scrollTop(randomInt(0, $(window).height()));
			$(div).scrollLeft(randomInt(0, 100));

			// Prepare to hide the div
			this.remove(div);
		}

		this.remove = function(div) {
			// Hide the div at a random time interval.
			this.timeouts[div] = setTimeout(function() {
				$(div).hide();
			}, randomInt(glitch_line_duration_min, glitch_line_duration_max));
		}

	}