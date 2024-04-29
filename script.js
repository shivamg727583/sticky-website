function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveScroll();

function page1Heading(){
    
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:true,
        pin:true,
    }
})

tl.to("#heading1",{
    transform:`translateY(-100%)`,
})
tl.to(".video2",{
  opacity:1,
})
tl.to("#heading2",{
    transform:`translateY(-200%)`,

})
tl.to(".video3",{
  opacity:1,
})
tl.to("#heading3",{
    transform:`translateY(-224%)`,
    opacity:1
})
tl.to(".video4",{
  opacity:1,
})

tl.to("#heading4",{
    transform:`translateY(-310%)`,
})

}
page1Heading();

function page2Animation(){
gsap.to(".page2",{
  opacity:0,
  scale:.5,
  scrollTrigger:{
    trigger:".page2",
    scroller:".main",
    // markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:true,
    pin:true
  }
})

gsap.to(".page5",{
  opacity:0,
  scale:.5,
  duration:4,
  scrollTrigger:{
    trigger:".page5",
    scroller:".main",
    // markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:true,
    pin:true
  }
})

gsap.to(".page12-container1",{
  opacity:0,
  scale:.5,
  duration:4,
  scrollTrigger:{
    trigger:".page12-container1",
    scroller:".main",
    // markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:true,
    pin:true
  }
})

gsap.to(".page7",{
  opacity:0,
  scale:.5,
  duration:4,
  scrollTrigger:{
    trigger:".page7",
    scroller:".main",
    // markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:true,
    pin:true
  }
})
gsap.to(".page9",{
  opacity:0,
  scale:.5,
  duration:4,
  scrollTrigger:{
    trigger:".page9",
    scroller:".main",
    // markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:true,
    pin:true
  }
})
}
page2Animation();


function page4Animation(){
   
  var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        // markers:true,
        start:"top 00%",
        end:"top -100%",
        scrub:true,
        pin:true,
    }
})

tl.to("#page4-heading1",{
    transform:`translateY(-100%)`,
})

tl.to("#page4-heading2",{
    transform:`translateY(-140%)`,

})
}
page4Animation();

function page10Animation(){
  
  var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page10",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top -200%",
        scrub:true,
        pin:true,
    }
})

tl.to(".chating-img",{
    transform:`translateY(-90%)`,
})
}
page10Animation();

function scrollAnimation(){
  gsap.to(".scroller-elem",{
    transform:`translate(-100%)`,
    duration:8,
    repeat:-1,
    ease:"linear"
  })
}
scrollAnimation();


var appleBtn=document.querySelector(".apple-btn");
var qrcode=document.querySelector(".float-code")
appleBtn.addEventListener("mouseenter",function(){
gsap.to(".float-code",{
  opacity:1,
})
gsap.to(appleBtn,{
  color:"gray",
})

})
appleBtn.addEventListener("mouseleave",function(){
  gsap.to(".float-code",{
    opacity:0,
  })
  gsap.to(appleBtn,{
    color:"black",
  })
  
})
appleBtn.addEventListener("mousemove",function(dets){
  // var value=dets.x-appleBtn.getBoundingClientRect().x;
  gsap.to(".float-code",{
    left:dets.x  +"px"
  })
})