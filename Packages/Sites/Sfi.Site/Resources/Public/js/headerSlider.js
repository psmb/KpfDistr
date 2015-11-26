var lower__exhibition        = $('.b-lower__exhibition');
var header__lower_conent     = $('.b-header__lower_content');
var lower__headline          = $('.b-lower__headline');
var lower__describtion       = $('.b-lower__describtion');
var lower__exhibition_1Text  = $('.b-lower__exhibition_1').text();
var lower__exhibition_2Text  = $('.b-lower__exhibition_2').text();
var lower__exhibition_3Text  = $('.b-lower__exhibition_3').text();
changeCss = function(x){
  lower__exhibition.css({
    'background':'rgba(0, 0, 0, 0.3)',
    'border-top-color':'#fff'
    })
  $(x).css({
    'background':'rgba(0, 0, 0, 0.6)',
    'border-top-color':'#f5a46d'
    })
}
$('.b-lower__exhibition_1').click(function(){
  changeCss(this)
  header__lower_conent.css('backgroundImage', 'url("images/main.jpg")')
  lower__headline.text(lower__exhibition_1Text)
  lower__describtion.text('Задача организации, в особенности же рамки и место обучения кадров требуют определения и уточнения новых предложений.')
})
$('.b-lower__exhibition_2').click(function(){
  changeCss(this)
  header__lower_conent.css('backgroundImage', 'url("images/about_main.jpg")')
  lower__headline.text(lower__exhibition_2Text)
  lower__describtion.text('Задача организации, в особенности же рамки и место обучения кадров требуют определения и уточнения новых предложений.')
})
$('.b-lower__exhibition_3').click(function(){
  changeCss(this)
  header__lower_conent.css('backgroundImage', 'url("images/img_example.jpg")')
  lower__headline.text(lower__exhibition_3Text)
  lower__describtion.text('Задача организации, в особенности же рамки и место обучения кадров требуют определения и уточнения новых предложений.')
})