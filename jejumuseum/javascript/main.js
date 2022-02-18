$(document).ready(function(){
 
  
   $("#gnb>.dp1").mouseenter(function(){  
      if($(window).width() > 977){  
      $(".sub").stop().slideDown();}
      else{
         $(".sub").stop().slideUp();}
      }
   );
   $("#gnb").mouseleave(function(){
      if($(window).width() > 977){
    $(".sub").stop().slideUp();}
    else{
      $("#gnb").css({"display":"none"});}
   }
 ); 

 $(".m_gnb ul li a").click(function(e){
   e.preventDefault();
   $(".m_list").hide();
   var aa = $(this).attr("href");
   $(aa).show();
   $(this).toggleClass("active")  ; 


});
 $(".hamburger").click(function(){
  $(".btn").toggleClass("on");
  if($(".btn").hasClass("on")){
     $(".m_gnb").slideDown();
  }else{
   $(".m_gnb").slideUp();
  }
 });
 
 
 //메인페이지페인슬라이더 
 $('.slide_item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
 /**/


});//ready end