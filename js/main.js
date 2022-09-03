// $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// 		var target = $(this.hash);
// 		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// 		if (target.length) {
// 			$('html,body').animate({
// 				scrollTop: target.offset().top
// 			}, 1000);
// 			return false;
// 		}
// 	}
// });




// watch-video-slider
$('.watch-video-slider').owlCarousel({
  loop:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:2000,
  margin:5,
  stagePadding: 50,
  center:true,
  autoHeight:true,
  nav:false,
  responsive:{
      0:{
          items:1
      },

      568:{
          items:3
      },
      
      1000:{
          items:4
      }
  }
});



// nftss-slider
$('.nftss-slider').owlCarousel({
  loop:true,
  dots:true,
  autoplay:true,
  autoplayTimeout:12000,
  margin:0,
  autoHeight:true,
  nav:false,
  responsive:{
      0:{
          items:1
      },

      568:{
          items:1
      },
      
      1000:{
          items:1
      }
  }
});





$(() => {
  const slidingText = $('.sliding-text');
  const list = slidingText.find('ul');
  
  list.clone().appendTo(slidingText);
  
  const totalLength = list.outerWidth(true);
  
  const animationStart = (isResume = false) => {
    let duration = 30000;
    
    if(!isResume) {
      slidingText.scrollLeft(0);
    } else {
      duration = ((list.outerWidth(true) - slidingText.scrollLeft()) * duration) / list.outerWidth(true)
    }
    
    slidingText.animate({
      scrollLeft: list.outerWidth(true)
    }, {
      duration,
      easing: 'linear',
      complete: animationStart
    });
  }
  
  $(".sliding-text > ul > li").on('mouseenter', () => {
    slidingText.stop(true);
  console.log("enter");
  })
  
  slidingText.on('mouseout', () => {
    animationStart(true);
  console.log("out");
  })

  slidingText.on('click', () => {
    setTimeout(function(){
      $('#tinyguy').addClass('animation');
  })
  
  setTimeout(function(){
    $('#tinyguy').removeClass('animation');
  }, 12000);
  })
  
  animationStart();
});


$(() => {
  const slidingText = $('.sliding-text-1');
  const list = $('.sliding-text-1').find('ul');
  
  list.clone().appendTo(slidingText);
  
  const totalLength = list.outerWidth(true);
  
  const animationStart = (isResume = false) => {
    let duration = 30000;
    
    if(!isResume) {
      slidingText.scrollLeft(totalLength);
    } else {
      duration = (slidingText.scrollLeft() * duration) / list.outerWidth(true)
    }
    
    slidingText.animate({
      scrollLeft: 0
    }, {
      duration,
      easing: 'linear',
      complete: animationStart
    });
  }
  
  slidingText.on('mouseover', () => {
    slidingText.stop(true);
  })
  
  slidingText.on('mouseout', () => {
    animationStart(true);
  })

  slidingText.on('click', () => {
    setTimeout(function(){
      $('#tinyguy').addClass('animation');
  })
  
  setTimeout(function(){
    $('#tinyguy').removeClass('animation');
  }, 12000);
  })
  
  animationStart();
});







(function () {
  $(".toggle").on("click", function () {
    return $(this).toggleClass("on");
  });
}.call(this));




// read-more-less
$('.moreless-button1').click(function() {
  $('.moretext1').slideToggle();
  if ($('.moreless-button1').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});


$('.moreless-button2').click(function() {
  $('.moretext2').slideToggle();
  if ($('.moreless-button2').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});


$('.moreless-button3').click(function() {
  $('.moretext3').slideToggle();
  if ($('.moreless-button3').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});



// utility slider
$(function(){
  $('.slider-thumb').slick({
    autoplay: false,
    vertical: true,
    infinite: true,
    verticalSwiping: true,
    slidesPerRow: 5,
    slidesToShow: 5,
    asNavFor: '.slider-preview',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
        }
      },
    ]
  });


  $('.slider-preview').slick({
    autoplay: false,
    vertical: true,
    infinite: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    asNavFor: '.slider-thumb',
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          fade: true,
        }
      },
    ]
  });

});