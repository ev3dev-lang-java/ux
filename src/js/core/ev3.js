/*
 * @namespace list
 * @description Functions Project
 *
 * Behaviours supported & required *
 * - menuMobile
 * - Slider
 * - Link Video

 * @copyright (c) 2018-2019 Ev3 All Rights Reserved.
 * @date   29/05/2018
 * @requires jQuery
 */


/**
* @function
* @name menuMobile
* @description  Interaction menu in mobile
*/

function menuMobile(){
 $('.btn_hamb').on('click', function(){
    var _parent = $(this).parent();

    if (_parent.hasClass('open')){
     $('body, .overlay').removeClass('lock');
     _parent.removeClass('open');

    }else{
      $('body, .overlay').addClass('lock');
      _parent.addClass('open');
    }

  });

}
/**
* @function
* @name Slider
* @description  Configuration Slider
*/

function slider(){
  var wrapper = $(".s_video ul");
  wrapper.not('.slick-initialized').slick({
    mobileFirst: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    dots: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
        }
      }
    ]
  });
};

/**
* @function
* @name Link Video
* @description  Launch video player in website
*/

function playYoutube(){
    var player, iframe, state, $popup = $('.popup');
    $('.video_des a').click(function(e) {

        e.preventDefault; 
 

        player = new YT.Player('youtubePlayer',{
            videoId: $(this).data("video"),
            width: "100%",
            height: "100%",
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                fs: 1,
                autoplay: 1,
                controls: 1,
                info: 0,
                rel: 0,
                disablekb: 0,
                wmode: 'transparent'
            }
        });

    });

    
    //$('.popup span, .player_shadow').on('click', function(e){
    // $('.popup span').on('click', function(e){
    //   e.preventDefault;
    //   $('body').removeClass('view_player');
    //   $('.popup').removeClass('leave');
    //   $('.popup, .player_shadow').hide();
    //   $('.v_video').html('<div id="youtubePlayer"></div>');
    // });
    

    function onPlayerReady(event) {
 
        $('body').addClass('view_player');
        $('.popup').remove();
        $('.popup').show();
            
        
        iframe = $('#youtubePlayer');
        event.target.playVideo();
        
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            $('body').removeClass('view_player');
            $('.player_shadow, .popup').hide();
            $('.v_video').html('<span></span></a><div id="youtubePlayer"></div>');
        }
    }

}