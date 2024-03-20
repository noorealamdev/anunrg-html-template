/*	IE 10 Fix*/
(function ($) {
	'use strict';
	
	jQuery(document).ready(function () {

        // Preloader
        setTimeout(function() {
            $('#preloader').addClass('hide');
        }, 1000);

        // Add Menu Item Current Class Auto
        function dynamicCurrentMenuClass(selector) {
          let FileName = window.location.href.split("/").reverse()[0];

          selector.find("li").each(function () {
            let anchor = $(this).find("a");
            if ($(anchor).attr("href") == FileName) {
              $(this).addClass("active");
            }
          });
          // if any li has .active element then add class
          selector.children("li").each(function () {
            if ($(this).find(".active").length) {
              $(this).addClass("active");
            }
          });
          // if no file name return
          if ("" == FileName) {
            selector.find("li").eq(0).addClass("active");
          }
        }
        
        if ($('.mainnav .main-menu').length) {
          dynamicCurrentMenuClass($('.mainnav .main-menu'));
		}

        // Mobile Responsive Menu 
        var mobileLogoContent = $('header .logo').html();
        var mobileMenuContent = $('.mainnav').html();
		$('.mr-menu .logo').append(mobileLogoContent);
		$('.mr-menu .mr_navmenu').append(mobileMenuContent);
        $( '.mr-menu .mr_navmenu ul.main-menu li.menu-item-has-children').append( $( "<span class='submenu_opener'><i class='bi bi-chevron-right'></i></span>" ) );

        // Sub-Menu Open On-Click
        $('.mr-menu ul.main-menu li.menu-item-has-children .submenu_opener').on("click", function(e){
            $(this).parent().toggleClass('nav_open');
            $(this).siblings('ul').slideToggle();
            e.stopPropagation();
            e.preventDefault();
        });
        
        // Active Mobile Responsive Menu : Add Class in body tag
        $('.mr-menu_toggle').on('click', function(e) {
            $('body').addClass('mr-menu_active');
            e.stopPropagation();
            e.preventDefault();
        });
        $('.mr-menu_close').on('click', function(e) {
            $('body').removeClass('mr-menu_active');
            e.stopPropagation();
            e.preventDefault();
        });
        $('.mr-menu_overlay').on('click', function(e) {
            $('body').removeClass('mr-menu_active');
            e.stopPropagation();
            e.preventDefault();
        });
    

        // Aside info bar
        $('.aside_open').on("click", function(e) {
            e.preventDefault();
            $('.aside_info_wrapper').addClass('show');
        });
        $('.aside_close').on("click", function(e) {
            e.preventDefault();
            $('.aside_info_wrapper').removeClass('show');
        });

        // Toggle Header Search
        $('.header_search .form-control-submit').on("click", function() {
            $('.open_search').toggleClass('active');
        });

        // Sticky Header
        // var header = $("header");
        // $(window).scroll(function() {
        //     var scroll = $(window).scrollTop();
        //
        //     if (scroll >= 50) {
        //         header.addClass("sticky");
        //     } else {
        //         header.removeClass("sticky");
        //     }
        // });

        // Marquee text
        const text = document.querySelector(".performance-guarantee-circle-text .text");
        text.innerHTML = text.innerText
            .split("")
            .map(
                (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
            )
            .join("");

        // GSAP Starts
        // Features section homepage using GSAP
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({ease: "none", duration: 2});

        // create a sequence that moves 3 of the panels in from different directions
        const tl = gsap.timeline();
        tl.from(".feature-item-two", {xPercent: -100,delay : 1})
            .from(".feature-item-three", {xPercent: 100,delay : 1})
            .from(".feature-item-four", {yPercent: -100,delay : 1})
            .from(".feature-item-five", {yPercent: 100,delay : 1});

        // pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer.
        ScrollTrigger.create({
            animation: tl,
            trigger: ".features-section .feature-wrapper",
            start: "top top",
            end: "+=4000",
            scrub: true,
            pin: true,
            anticipatePin: 1
        });

    });      
})(jQuery);



// Hide header on scroll down
const nav = document.querySelector(".header");
const scrollUp = "top-up";
let lastScroll = 50;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 50) {
        nav.classList.remove(scrollUp);
        $('.totop').removeClass('show');
        return;
    }

    if (currentScroll > lastScroll) {
        // down
        nav.classList.add(scrollUp);
        $('.totop').addClass('show');

    } else if (currentScroll < lastScroll) {
        // up
        nav.classList.remove(scrollUp);
        $('.totop').removeClass('show');
    }
    lastScroll = currentScroll;
});