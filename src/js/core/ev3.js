/*
 * @namespace list
 * @description Functions Project
 *
 * Behaviours supported & required *
 * - menuMobile

 * @copyright (c) 2018-2019 Ev3 All Rights Reserved.
 * @date   06/06/2018
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
