var swiper = new Swiper(".swiper", {
    loop:true,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
autoplay: {
    delay: 4000,
    disableOnInteraction: false,
},

});
$(".SubpdLiInner ul li").mouseenter(function(){
    $(this).addClass("on");
}).mouseleave(function(){
    $(this).removeClass("on");
    
});

$(".pd_tab ul li").hover(function(){
    $(this).stop().removeClass("active");
    $(this).stop().addClass("active"); 

});
$(".pd_tab ul li").mouseleave(function(){
    $(this).stop().addClass("active"); 
    $(this).stop().removeClass("active");
   

});  

var tBtn=$(".pd_tab ul li a");

tBtn.click(function(e){
e.preventDefault();
$(".SubpdLiInner").hide();
var aa = $(this).attr("href");
$(aa).show();

});

 tBtn.eq(0).trigger('click'); 

var mainBtn= $("#gnb ul li a"); 
mainBtn.click(function(e){
    e.preventDefault();
    $(".depth2").hide();
    var bb =$(this).attr("href");
    $(bb).show();
  
})
mainBtn.eq(0).trigger('click'); 


$(".header_in ul li").mouseenter(function(){
 $(".sub").stop().slideDown(500);
}); 
$(".sub").mouseleave(function(){
    $(this).stop().slideUp(200);
   }); 