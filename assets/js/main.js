/*
 * Violet main js
 * Version 1.0.0
 * URL: http://schoolz.cf
 * Description: This js file is required for different interactive task
 * Author: Rakib Hossain
 *
 */

$( document ).ready(function() {

    
 //===============================Isotope======================
  //var $grid = $('.items').isotope({});
   //=============================MixitUp======================
    $('.items').mixItUp();

//     $('.portfolio-item').on( 'mouseleave', function() {
//     $('.portfolio-hover').addClass('animated');});

//  //================================ owl-carousel======================
//  //========header Slider slider=======
	$(".slider").owlCarousel({
		items:1,
		loop:true,
		margin:0,
    	responsive: { 0: {items: 1} }
	});
// $('.main-slider').owlCarousel({
//     center: true,
//     items:1,
//     loop:true,
//     autoplay:true,
//     margin:0,
//     responsive: { 0: {items: 1} }
//   });    

//   $('.main-slider').on('translate.owl.carousel',function(){
//     $('.slide h1:odd').removeClass('animated fadeInUp').css("opacity","0.02");
//     $('.slide h1:even').removeClass('animated fadeInDown').css("opacity","0.02");
//   });
//   $('.main-slider').on('translated.owl.carousel',function(){
//     $('.slide h1:odd').addClass('animated fadeInUp').css("opacity","1");
//     $('.slide h1:even').addClass('animated fadeInDown').css("opacity","1");
//   });


// //===========Testimonial Slider=============
//               var owl = $('.testimonial-slide');
//               owl.owlCarousel({
//                 loop: true,
//                 items: 1,
//                 nav: false,
//                 navigation: true,
//                 autoplay:true,
//                 autoplayTimeout:3500,
//                 autoplayHoverPause:true,
//                 //animateOut: 'slideOutDown',
//                 //animateIn: 'slideIntDown',
                
//               })
//               owl.on('translate.owl.carousel',function(){
//                 $('.testimonial .person').removeClass('animated zoomIn').css("opacity","0.2");
//               });
//               owl.on('translated.owl.carousel',function(){
//                 $('.testimonial .person').addClass('animated zoomIn').css("opacity","1");
//               });

        
        
// //============Partner slider==========  
// $('.partner-slide').owlCarousel({
//     center: true,
//     items:5,
//     loop:true,
//     margin:5,
//     responsive: { 0: {items: 1}, 600: {items: 3}, 1000: {items: 5} }
// });

    
// //===============wow js========== 
//     new WOW().init();
  
  
  
// //===============counterup==========
//     $('.counter').counterUp({
//          delay: 10,
//          time: 9000
//     });

//    // $(".title h2").append("<p class='hr-40'></p>");
   
   
   
// //===============UI Top==========
//     $().UItoTop({ easingType: 'easeOutQuart' });

  


//jQuery end        
});