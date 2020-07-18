$(function () {

  $('.banner__section-slider').slick({
    dots: true,
    prevArrow: '<buttom class="banner__section-slider-btn banner__section-slider-btnprev"><img src="images/arrow-left.svg" alt="arrow-left"></buttom>',
    nextArrow: '<buttom class="banner__section-slider-btn banner__section-slider-btnnext"><img src="images/arrow-right.svg" alt="arrow-right"></buttom>'
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs__content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');    
  });

  $('.products__item-favorite').on('click', function(){
    $(this).toggleClass('products__item-favorite--active');
  });

  $('.products__slider').slick({
    slidesToShow: 4,
    prevArrow: '<buttom class="products__slider-btn products__slider-btnprev"><img src="images/arrow-black-left.svg" alt="arrow-left"></buttom>',
    nextArrow: '<buttom class="products__slider-btn products__slider-btnnext"><img src="images/arrow-black-right.svg" alt="arrow-right"></buttom>'
  });

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('200');
  });

  $(".js-range-slider").ionRangeSlider({
  });

  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.products__item-wrapper').removeClass('products__item-wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.products__item-wrapper').addClass('products__item-wrapper--list');
  });
    
});