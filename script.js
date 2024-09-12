(function() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
    });
  
    function loaderAnimation() {
      var loader = document.querySelector("#loader");
      setTimeout(function() {
        loader.style.top = '-100%';
      }, 4000);
    }
  
    function page4Animation() {
      var elemC = document.querySelector("#elem-container");
      var fixed = document.querySelector("#fixed-image");
      elemC.addEventListener("mouseenter", function() {
        fixed.style.display = "block";
      });
      elemC.addEventListener("mouseleave", function() {
        fixed.style.display = "none";
      });
  
      var elems = document.querySelectorAll(".elem");
      elems.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
          var image = e.getAttribute("data-image");
          fixed.style.backgroundImage = `url(${image})`;
        });
      });
    }
  
    function swipperAnimation() {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
       
        spaceBetween: 100,
      });
    }
    
    function menuScreen() {
      var flag;
      var menu = document.querySelector("#menu");
      var full =document.querySelector("#full-screen");
      var navimg =document.querySelector("nav img");
      
      menu.addEventListener("click",function(){
        while(flag!=0){
        if(flag==1){
        full.style.top="-100";
        navimg.style.opacity="1";
        flag++;
        }
        else{
          full.style.top="0%";
          navimg.style.opacity="0";
          flag=0;
        }
      }
      });
     }
  
    loaderAnimation();
    swipperAnimation();
    page4Animation();
    menuScreen();
  })();
