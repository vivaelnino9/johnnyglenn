$('.multiple-items').magnificPopup({
  delegate: 'div a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
    enabled:true
  }
});
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<i class="fa fa-angle-left" style="font-size:48px;color:#F05F40;left:0;bottom:50%;cursor:pointer"></i>',
  nextArrow:'<i class="fa fa-angle-right" style="font-size:48px;color:#F05F40;right:0;bottom:50%;cursor:pointer"></i>'
});
