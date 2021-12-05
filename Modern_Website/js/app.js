$(document).ready(function(){
    $(".col__tabs .tab").click(function(){
      $(".col__text__content .text__content").hide(50);
      $(".col__tabs .tab").addClass("not-active")
    });
    $(".col__tabs .tab").click(function(){
      $(".col__text__content .text__content").fadeIn(800);
      $(".col__tabs .tab", this).addClass("active")
    });
  });