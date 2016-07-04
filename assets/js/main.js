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
});
 // Load the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Replace the 'ytplayer' element with an <iframe> and
      // YouTube player after the API code downloads.
      var player;
      function onYouTubePlayerAPIReady() {
        player = new YT.Player('youtubeden', {
          height: '390',
          width: '100%',
          playerVars : {
                autoplay : 0,
                 showinfo:0,
                controls: 0
            },
          rel:0,
         
          videoId: 'GswHmpwy24A',
        });
      }

      $(window).scroll(function() {
        $("iframe").each( function() {
            if( $(window).scrollTop() > $(this).offset().top - 400 ) {
                $(this).css('opacity',1);
                player.playVideo();
            } else {
                $(this).css('opacity',0);
                player.pauseVideo();
            }
        }); 
    });


