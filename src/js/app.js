// import 'bootstrap'

// Lame jQuery event driven stuff
$(() => {
  
  // shrink nav after landing watcher
  $(window).on('scroll', (e) => {
    let landingHeight = $('.landing').height()
    let currentHeight = $(document).scrollTop()
    
    if (currentHeight > landingHeight) {
      $('.main-nav').addClass('shrink')
    } else {
      $('.main-nav').removeClass('shrink')
    }
  })
})
