/*global $, document*/
$(window).on('load', function() {
    $('body.transition-none').removeClass('transition-none')
})
$(document).ready(function () {
    
    'use strict';

    let pageDir = $('html[dir="rtl"]').length > 0;
    console.log(pageDir)
    if(!pageDir) {
        $('.dropdown-menu').addClass('dropdown-menu-right')
    }

    // nav btn
	$('.nav-btn').click(function () {
		$('.header .nav-list, .header .overlay').addClass('show')
		$(this).addClass('active')
	});
	$('.header .overlay, .close-bar').click(function () {
		$('.header .nav-list, .header .overlay').removeClass('show')
		$('.nav-btn').removeClass('active')
	});

    // home links navigator
    $('.nav-list a[href*="#"]').on('click', function(e) {
        e.preventDefault()
        let elTarget = $(this).attr('href');

        $('.nav-list a').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $(elTarget).offset().top
        }, 500 , 'swing')
    });

    $(window).on('scroll', function(){
        scrNav();
    });
    function scrNav() {
        var sTop = $(window).scrollTop();
        $('.spy-section').each(function() {
          var id = $(this).attr('id'),
              offset = $(this).offset().top-1,
              height = $(this).height();
          if(sTop >= offset && sTop < offset + height) {
            $('.nav-list a[href*="#"]').removeClass('active');
            $(`.nav-list a[href*="#${id}"]`).addClass('active');
          }
        });
      }
      scrNav();

    // puse video 
    $(".video-modal").on('hidden.bs.modal', function (e) {
        $(this).find('iframe').attr("src", '');
    });
    $("[data-type='video_btn']").on('click', function (e) {
        let dataSrc = $(this).data("src")
        $('.video-modal').find('iframe').attr("src", dataSrc);
    });

    // show password 
    $('.group-input .password-show i').click(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active')
            $(this).siblings('input').attr('type', 'password')
        } else {
            $(this).addClass('active')
            $(this).siblings('input').attr('type', 'text')
        }
    })

    // fave icon effect
    $('.fave-icon').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).addClass('far').removeClass('active fas');
        } else {
            $(this).removeClass('far').addClass('active fas');
        }
    });

    // comment likes
    $('.comment-likes .like').on('click', function() {
        if($(this).siblings('.dislike').hasClass('active')) {

            $(this).addClass('active');
            $(this).siblings('.dislike').removeClass('active');
            $(this).find('i').removeClass('far').addClass('fas')
            $(this).siblings('.dislike').find('i').removeClass('fas').addClass('far');
            
        } else if($(this).hasClass('active')) {
            
            $(this).removeClass('active');
            $(this).find('i').removeClass('fas').addClass('far')
            
        } else {
            
            $(this).addClass('active');
            $(this).find('i').removeClass('far').addClass('fas')
        }
    });
    $('.comment-likes .dislike').on('click', function() {
        if($(this).siblings('.like').hasClass('active')) {
            
            $(this).addClass('active');
            $(this).siblings('.like').removeClass('active');
            $(this).find('i').removeClass('far').addClass('fas')
            $(this).siblings('.like').find('i').removeClass('fas').addClass('far');
            
        } else if($(this).hasClass('active')) {
            
            $(this).removeClass('active');
            $(this).find('i').removeClass('fas').addClass('far')
            
        } else {

            $(this).addClass('active');
            $(this).find('i').removeClass('far').addClass('fas')
        }
    });

    // select2
    $('.timeline-sort').select2({
        minimumResultsForSearch: 6,
        dir: pageDir ? "rtl" : "ltr"
    });
    $('.friends-filter-select').select2({
        minimumResultsForSearch: 6,
        dir: pageDir ? "rtl" : "ltr"
    });
    $('.features-mselect').select2({
        minimumResultsForSearch: 6,
        dir: pageDir ? "rtl" : "ltr"
    });
    $('.select2-input').select2({
        minimumResultsForSearch: 6,
        dir: pageDir ? "rtl" : "ltr"
    });

    $('.select-country').select2({
        minimumResultsForSearch: 6,
        dir: pageDir ? "rtl" : "ltr"
    });

    //    news slider
    $('.news-slide').owlCarousel({
        loop: false,
        margin: 30,
        autoplay: false,
        nav: true,
        dots: true,
        rtl: pageDir,
        autoplayTimeout: 6000,
        smartSpeed: 1500,
        dragEndSpeed: 1500,
        slidSpeed: 5000,
        navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>',
        ],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            576 : {
                items: 2,
            },
            1000 : {
                items: 3,
            },
            // breakpoint from 768 up
            1200 : {
                items: 3,
            }
        }
    });
    //    news slider
    $('.gallary-slide').owlCarousel({
        loop: false,
        margin: 15,
        autoplay: false,
        nav: true,
        dots: true,
        rtl: pageDir,
        autoplayTimeout: 6000,
        smartSpeed: 1500,
        dragEndSpeed: 1500,
        slidSpeed: 5000,
        navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>',
        ],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            576 : {
                items: 2,
            },
            1000 : {
                items: 3,
            },
            // breakpoint from 768 up
            1200 : {
                items: 3,
            }
        }
    });
  

    $('.home-slide').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        nav: false,
        dots: true,
        rtl: pageDir,
        autoplayTimeout: 6000,
        smartSpeed:450,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        touchDrag  : false,
        mouseDrag  : false,
    });

    $(`<i class="fas fa-chevron-right prev"></i>`).insertBefore('.home-slide .owl-dots');
    $(`<i class="fas fa-chevron-left next"></i>`).insertAfter('.home-slide .owl-dots');

    // Custom Navigation Events
    $(document).on("click", ".home-slide .prev", function () {
        $('.home-slide').trigger('next.owl.carousel');
        console.log('sss')
    });
    $(document).on("click", ".home-slide .next", function () {
        $('.home-slide').trigger('prev.owl.carousel');
    });

    // header dropdown arrow position
    $('.user-drops > button').click(function() {
        setTimeout(() => {
            let elPostition = $(this).offset().left;
            let elwidth = $(this).outerWidth() / 2;
            let listPostition = $(this).siblings('.dropdown-menu').offset().left;
            let listWidth = $(this).siblings('.dropdown-menu').outerWidth();
            let arrow = $(this).siblings('.dropdown-menu').find('.arrow');
            if(pageDir) {
                arrow.css('left', elPostition - (listPostition - elwidth));
            } else {
                arrow.css('right', ((listPostition + listWidth) - (elPostition + (elwidth * 2)) + elwidth));
            }
            console.log(elwidth)
            
        }, 50);
    });

    // count up
    var $counter = $('.counter');
    let countUpFunc = function() {

        var countTo = $counter.attr('data-count');
    
        $({ countNum: $counter.text() }).animate({
            countNum: countTo
        },{
    
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $counter.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $counter.text(new Intl.NumberFormat().format(this.countNum))
                }
    
            });
    }
    let counted = false
    if($counter.length > 0 && $counter.offset().top <= ($(window).scrollTop() + ($(window).height() - 30)) & !counted) {
        countUpFunc()
    }
    $(window).on('scroll', function() {
        if($counter.length > 0 && $counter.offset().top <= ($(window).scrollTop() + ($(window).height() - 30)) & !counted) {
            countUpFunc();
            counted = true
        }
    })
    
    // world-types parent color change
    $('.world-types .normal-tabs li:nth-child(3n+1) a').click(function() {
        $(this).parents('.world-types').css('background-color', 'rgba(102,171,162,.24)');
    });
    $('.world-types .normal-tabs li:nth-child(3n+2) a').click(function() {
        $(this).parents('.world-types').css('background-color', 'rgba(180,82,82,.24)');
    });
    $('.world-types .normal-tabs li:nth-child(3n+3) a').click(function() {
        $(this).parents('.world-types').css('background-color', 'rgba(192,157,58,.24)');
    });

    // activate collapse button action in small screens
    if($(window).width() <= 768)
    $('.responsive-collapse-btn').attr('data-toggle', "collapse");

    // range slider
    if($( "#slider-range" ).length > 0) {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 5000,
            values: [ 1000, 3000 ],
            slide: function( event, ui ) {
              $( "#min" ).val("$" + $( "#slider-range" ).slider( "values", 0 ));
              $( "#max" ).val("$" + $( "#slider-range" ).slider( "values", 1 ) );
            }
          });
          $( "#min" ).val("$" + $( "#slider-range" ).slider( "values", 0 ));
          $( "#max" ).val("$" + $( "#slider-range" ).slider( "values", 1 ) );
    }
    // tooltip activation
    $('[data-toggle="tooltip"]').tooltip();

    // drop zone
    if($( "#dz" ).length > 0) {
      $("#dz").dropzone({ url: "img/test" });
    };

    // .project-box activations color
    $('.project-box .project-head').on('click', function() {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
        } else {
            $('.project-box').removeClass('active')
            $(this).parent().addClass('active')

        }
    });

    // reply comment
    let replyForm = "";
    replyForm += `<form action="" class="reply-form">`;
        replyForm += `<img src="img/client2.png" alt="">`;
        replyForm += `<input type="text" placeholder="هذا النص هو مثال لنص يمكن أن يستبدل">`;
        replyForm += `<button class="button">`;
            replyForm += `<i class="fas fa-location-arrow"></i>`;
        replyForm += `</button>`;
    replyForm += `</form>`;
    $('.comment-box .comment-likes .reply').on('click', function() {
        $('.reply-form').remove();
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.comment-box .comment-likes .reply').removeClass('active');
            $(this).addClass('active');
            $(replyForm).insertAfter($(this).parents('.comment-likes'));
            
        }
    });

    // responsive projects filter
    $('.responsive-filter-content .head').on('click', function() {
        $('.filter-overlay, .projects-filter').addClass('show')
    });
    $('.filter-overlay').on('click', function() {
        $('.filter-overlay, .projects-filter').removeClass('show')
    });

    // collapse block
    $('.collapse-block .block-head').on('click', function() {
        $(this).toggleClass('collapsed')
        $(this).siblings('.block-body').slideToggle()
    });
});

// project pox toggle collapse
$('.project-box').on('click', function() {
    $(this).find('.collapse').collapse('toggle');
});
$('.project-box .name, .project-box .img, .project-box .user').on('click', function(e) {
    e.stopPropagation()
});

// fixed header
setTimeout(function () {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        if (window.pageYOffset > 60) {
            $('.header').addClass('shadow')
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                $('.header').css({
                    top: '0'
                });
            } else {
                $('.header').css({
                    top: '-100px'
                });
            }
            prevScrollpos = currentScrollPos;
        } else {
            $('.header').removeClass('shadow')
            $('.header').css({
                top: '0'
            });
        }
    }
}, 2000);



























