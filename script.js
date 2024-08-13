new Swiper('.image-slider',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
 slideToClickedSlide: true,
 autoHeight: true,
 spaceBetween: 16,
 freeMode: true,
 slidesPerView:1.25,
 breakpointsBase: 'container',

});

var flexContainer = document.querySelector('.flex-container');
var flexItems = flexContainer.querySelectorAll('.image');
var screenWidth = window.innerWidth;

if (screenWidth === 768) {
  for (var i = 6; i < 11; i++) {
    flexItems[i].style.display = 'none';
  }
}