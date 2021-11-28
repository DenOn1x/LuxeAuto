




function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });


    let ua=window.navigator.userAgent;
    let msie=ua.indexOf("MSIE");
    let isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                    isMobile.Android()
                    || isMobile.BlackBerry()
                    || isMobile.iOS()
                    || isMobile.Opera()
                    || isMobile.Windows()
                    );
        }
    }
    function isIE(){
        ua=navigator.userAgent;
        var is_ie=ua.indexOf("MSIE")>-1||ua.indexOf("Trident/")>-1;
        if(isIE()){
            document.querySelector('html').classList.add('ie');
        }
        if(isMobile.any()){
            document.querySelector('html').classList.add('_touch');
        }
    }

    if(isMobile.any()){
        document.body.classList.add('_touch');
    }
    else{
        document.body.classList.add('_pc');
    }

      /* catalog*/

      const anchors = document.querySelectorAll('a[href*="#"]')
    
      for(let anchor of anchors){
          anchor.addEventListener("click",function(event){
              event.preventDefault();
              const blockID = anchor.getAttribute('href')
                  document.querySelector('' + blockID).scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                  })
              
          })
      }
       /* catalog END*/


        /* Page swiper*/

    let swiper = new Swiper(".mySwiper", {
       
       
        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'

        },
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
       
      },
      keyboard: {
        enable:true,
        onlyInViewport:true,
        pageUpDown:true,
      },

      loop: true,
      slidesPerView: 5.2,
      spaceBetween: 5,

      autoplay:{
          delay: 2000,
          disableOnInterection: true,
      },
      speed: 800,
      
      effect:'coverflow',
      cowerflowEffect:{
          rotate:20,
          stretch:50,
          slideShadows:true,
      },

      breakpoints:{
          260:{
              slidesPerView:1,
          },
          480:{
              slidesPerView:2,
          },
          668:{
              slidesPerView:3,
        },
          992:{
              slidesPerView:4,
          },
          1580:{
              slidesPerView:5.2,
        }


      },



    });
    

    /*payment*/

    let myCarousel = document.querySelector('#myCarousel');
    let carousel = new bootstrap.Carousel(myCarousel);

  