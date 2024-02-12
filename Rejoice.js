// let page1Content = document.querySelector(".page1-content");
// let cursor = document.querySelector(".cursor");

// page1Content.addEventListener("mousemove", function (charsi) {
//   cursor.style.left = charsi.x + "px";
//   cursor.style.top = charsi.y + "px";
// });

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoScroll();

function cursoreffect() {
  let page1Content = document.querySelector(".page1-content");
  let cursor = document.querySelector(".cursor");

  page1Content.addEventListener("mousemove", function (charsi) {
    gsap.to(cursor, {
      x: charsi.x,
      y: charsi.y,
    });
  });
  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursoreffect();

function page2Animation() {
  gsap.from(".elem h1", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      // marker:true,
      scrub: 2,
    },
  });
}

page2Animation();

function page4Animation() {
  gsap.from(".elem4 h1", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: ".page4",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      // marker: true,
      scrub: 2,
    },
  });
}

page4Animation();

function swipperjs() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    speed: 800,
  });
}

swipperjs();

function page6Animation() {
  gsap.from(".elem6 h1", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: ".page6",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      // marker: true,
      scrub: 2,
    },
  });
}

page6Animation();


let ab = gsap.timeline();

ab.from(".loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  delay: 1
});
ab.to(".loader h3", {
    opacity:0,
    x:-40,
    stagger:0.1,
    duration:1
});
ab.to(".loader ", {
    opacity:0
});
ab.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.4
});
ab.to(".loader ", {
    display:"none"
});


function movingAnimaton() {
  gsap.to(".page5 svg",{
    rotation: 250,
    duration: 1,
    // delay:1,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "#main",
      start: "top 30%",
      end: "top 30%",
      // marker:true,
      scrub: 2,
    },
  })
  
}

movingAnimaton()






