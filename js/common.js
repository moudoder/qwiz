$(document).ready(function () {
  let all_slides = $('.quiz-slide-counter');
  let count_slides = $(all_slides).length;
  count_slides = count_slides;
  let step_slide = 100 / count_slides;
  let step_now = 100 - step_slide;
  for (let i = all_slides.length - 1; i >= 0; i--) {
    let now_slide = all_slides[i];
    now_slide = $(now_slide).children('.quiz-slide-content');
    now_slide = $(now_slide).children('.quiz-progress');
    now_slide = $(now_slide).children('.quiz-progress-line');
    now_slide = now_slide[0];
    now_slide.style.width= step_now + '%';
    if (step_now > 40) {
      let parent_line = $(now_slide).parent('.quiz-progress');
      $(parent_line).addClass('quiz-progress-white');
    }
    step_now = step_now - step_slide;
  }

  $('.quiz-form-soc__item').on('click', function() {
    let answer_soc = $(this).data('val');
    $('.quiz-answer-soc').val(answer_soc);
    $('.quiz-form-soc__item').removeClass('active');
    $(this).addClass('active');
    return false;
  })

  
  let range_val = 0;
  $('.quiz-range__enter').val($('.quiz-range__input').val());
  $('.quiz-range__input').rangeslider({
      polyfill : false,
     onSlide : function( position, value ) {
        $('.quiz-range__enter').val(value);
        
        range_val = value;
        
     },
  });

  $('.quiz-form__btn').on('click', function() {
    let now_answers = $('.quiz-answers').val();
    let now_val_range = range_val;
    now_val_range = now_val_range + ' ';
    now_answers = now_answers + now_val_range + 'кв.м.';
    $('.quiz-answers').val(now_answers);
    console.log($('.quiz-answers').val())
    return false;
  })

  $('.quiz-range__enter').on("change", function (){
     let vl = $(this).val();
     $('.quiz-range__input').val(vl);
     $('.quiz-range__input').change(); 
  })

  $('.quiz-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
  });

  $('.quiz-item').on('click', function() {
    let parents_item = $(this).closest('.quiz-items');
    let children_item = $(parents_item).children('.quiz-item');
    let answer_item = $(this).children('.quiz-item__text');
    answer_item = $(answer_item).text();
    answer_item = answer_item.replace(/ +/g, ' ').trim();
    let now_answers = $('.quiz-answers').val();
    answer_item = answer_item + ' ';
    now_answers = now_answers + answer_item ;
    $('.quiz-answers').val(now_answers);
    console.log($('.quiz-answers').val())
    $(children_item).removeClass('active');
    $(this).addClass('active');
    $('.quiz-slider').slick('slickNext');
  })

  $('.quiz-btn-next').on('click', function() {
    $('.quiz-slider').slick('slickNext');
    return false;
  })

  $('.quiz-btn-prev').on('click', function() {
    $('.quiz-slider').slick('slickPrev');
    return false;
  })


  $(".phone").inputmask("+7 (999) 999-9999");
})