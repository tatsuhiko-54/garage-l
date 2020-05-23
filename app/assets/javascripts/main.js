$(function(){

  window.onload = function(){
    var currentURL = window.location.href;
    if (currentURL.match(/new/)){
      $(".post__btn").css('display', 'none')
    }
  }
  $(".header__title").on('mouseover', function() {
    $(".header__title").css('transform', 'scale(1.1, 1.1)');
  })
  $(".header__title").on('mouseout', function() {
    $(".header__title").css('transform', 'scale(1.0, 1.0)');
  })
//写真ボタン
  $(".drop-man").on('click', function() {
    $(".form__image").trigger('click');
  })
  
});


