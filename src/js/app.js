// import 'bootstrap'

$('.toggle-menu').on('click', function() {
  $('#form').removeClass('show')
  
  $('#menu').toggleClass('show')
  $('body').toggleClass('no-scroll')
})

$('.toggle-form').on('click', function() {
  $('#menu').removeClass('show')
  
  $('#form').toggleClass('show')
  $('body').toggleClass('no-scroll')
})
