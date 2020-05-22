$(function(){

  window.onload = function(){
    var currentURL = window.location.href;
    if (currentURL.match(/new/)){
      $(".post__btn").css('display', 'none')
      $(".page-line").css('display', 'none')
    }
  }
  
});


