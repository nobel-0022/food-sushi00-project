
$(document).ready(function(){

    // toggler btn
    $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleclass('change');

  });
          // sticky navbar less paddin
  $(window).scroll(function (){
    let position = $(this).scrollTop();
    if(position>= 718){
      $('.navbar').addClass('navbar-background');
        $('.navbar').addClass('fixed-top');
    }
    else{
        $('.navbar').removeClass('navbar-background');
          $('.navbar').removeClass('fixed-top');
    }
  })
   //  smooth scroll
   $('.navbar-item a, .header-link, #back-to-top').click(function(link){
     link.preventDefault();
     let target = $(this).attr('href');
     $('html, body').stop().animate({
       scrollTop: $(target).offset().top -25
     },3000)
   })
// back to top
   $(window).scroll(function (){
     let position = $(this).scrollTop();
     if(position>= 718){
       $('#back-to-top').addClass('scrollTop');

     }
     else{
     $('#back-to-top').removeClass('scrollTop');
     }
   })
  // repples
  $("header, .info").ripples({
  dropRadius: 35,
  perturbance: 1,

});
   // magnific popup
   $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
    enabled:true
  }
  // other options
});

})
