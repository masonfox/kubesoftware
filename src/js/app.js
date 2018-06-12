// import 'bootstrap'

// Lame jQuery event driven stuff
$(function () {
  
  // shrink nav after landing watcher
  $(window).on('scroll', function (e) {
    let landingHeight = $('.landing').height()
    let currentHeight = $(document).scrollTop()
    
    if (currentHeight > landingHeight) {
      $('.main-nav').addClass('shrink')
    } else {
      $('.main-nav').removeClass('shrink')
    }
  })
  
  $('.menu-toggle').on('click', function () {
    $('.menu-toggle').toggleClass('active')
    $('.main-nav .nav-right').toggleClass('active')
  })
  
  $('.main-nav .nav-right a').on('click', function () {
    $('.menu-toggle').removeClass('active')
    $('.main-nav .nav-right').removeClass('active')
  })
})
