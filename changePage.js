function changePage(page){
	let truthIndicator = Math.random();
		
		$($('.guidance')[0]).removeClass('visible');
		$($('.guidance')[1]).removeClass('visible');
		$('.main-content-box').removeClass('visible');
		$($('.main-content-box')[page]).addClass('visible');
		$($('.main-content-box')[page]).css('animation', 'clipit 1.3s');
				

	stage = page+1;
}