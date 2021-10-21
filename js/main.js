window.onload = function () {
   let burger = document.getElementById('burger'),
      leftStart = document.querySelector('.navigation'),
      burgerFon = document.querySelector('.burger-close'),
      burgerClose = document.querySelector('.menu-close'),
      topHeader = document.querySelector('.top-header'),
      body = document.body,
      offset = document.getElementById('offset'),
      colmd8 = document.getElementById('colmd8');
   let widthWindowFun = () =>{
      widthWindow = window.outerWidth;
   }
   let openBugger = ()=>{
      leftStart.classList.add('left-start');
      burgerFon.classList.add('right-end');
      topHeader.classList.add('left-padding');
      body.classList.add('overflow-hiden');
   }
   let closeBurger = ()=>{
      leftStart.classList.remove('left-start');
      burgerFon.classList.remove('right-end');
      topHeader.classList.remove('left-padding');
      body.classList.remove('overflow-hiden');
   }
   burger.addEventListener('click', function () {
      openBugger();
   });
   burgerFon.addEventListener('click', function(){
      closeBurger();
   });
   burgerClose.addEventListener('click', function () {
      closeBurger();
   });
   new Swiper('.swiper',{
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true
      },
      spaceBetween: 40,
      slidesPerView:1,
      breakpoints:{
         1200:{
            slidesPerView: 4
         },
         992:{
            slidesPerView: 3
         },
         576: {
            slidesPerView: 2
         }
      }
   });
   
   
   var windowWidth = window.outerWidth;
   if (windowWidth == 768) {
      offset.classList.remove('offset-md-1');
      colmd8.classList.remove('col-md-8');
   }
   windowWidth = $(window).width();
   $(window).resize(function () {
      var newWindowWidth = $(window).width();
      if (windowWidth >= newWindowWidth) {
         widthWindowFun();
      } else {
         widthWindowFun();
      }

      windowWidth = newWindowWidth;
      if (windowWidth == 768) {
         offset.classList.remove('offset-md-1');
         colmd8.classList.remove('col-md-8');
      } else{
         offset.classList.add('offset-md-1');
         colmd8.classList.add('col-md-8');
      }
   });
};