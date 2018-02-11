// $(function() {
//   $('.burger-trigger').click(function() {
//     $('.overlay').addClass('visible');
//   })
// });
//
// $(function() {
//   $('.crest-trigger').click(function() {
//     $('.overlay').removeClass('visible');
//   })
// });


$(function() {
  $('.burger-trigger').click(function() {
    $('.overlay').switchClass('pos-hidd', 'pos-show');
  })
});

$(function() {
  $('.crest-trigger').click(function() {
    $('.overlay').switchClass('pos-show', 'pos-hidd');
  })
});


$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 80) {
      $('.img').addClass('small');
    } else {
      $('.img').removeClass('small');
    }
  })
});
