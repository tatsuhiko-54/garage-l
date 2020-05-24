$(function(){

  window.onload = function(){
    var currentURL = window.location.href;
    if (currentURL.match(/new/)){
      $(".post__btn").css('display', 'none')
    }
  }

//写真ボタン
  $(".drop-man").on('click', function() {
    $(".form__image").trigger('click');
  })
  
});


