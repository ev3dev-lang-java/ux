/*
 * @namespace list
 * @description Functions Project
 *
 * Behaviours supported & required *
 * - menuMobile
 * - Slider

 * @copyright (c) 2018-2019 Ev3 All Rights Reserved.
 * @date   26/05/2018
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


function slider(){

      var wrapper = $(".s_video ul");
	
	   wrapper.not('.slick-initialized').slick({
          mobileFirst: true,
    		  infinite: true,
    		  speed: 1000,
    		  dots: true,
    		  variableWidth: true,
    		  slidesToShow: 1,
    	      slidesToScroll: 1
		});
};