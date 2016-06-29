	$(document).ready(function(){
	/*	$(" button").hover(function(){
			$(this).css({
			"background":"#a1bd53",
			"color":"#ffffff"
		})
		})
		.mouseout(function(){
		$(this)
		.css({
			"color":"",
			"background":"",
			"transition-duration":".5s"
		})
	})
	$(" button").click(function(){
		$(this).css({
			"background":"#a1bd53",
			"color":"#ffffff"
		})

		})
	$(".gift p a").hover(function(){
			$(this).css({
			
			"color":"#a1bd53"
		})
		})
		.mouseout(function(){
		$(this)
		.css({
			"color":"",
			 "transition-duration":".5s"
		})
	})
		*/

		$("#lightSlider").lightSlider({
			item: 8,
			// slideMove: 1,
			// controls: true,
		});

	$("#stars-default").rating('create', {
		coloron:'#ffd24d',
		cursor: 'pointer',
		coloroff: '#dddddd',
		size: '16px',
		onClick:function() {
			console.log( this.attr('data-rating') );
		}
	} );
});




