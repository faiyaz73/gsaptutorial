gsap.from("#page1 #box", {
    scale:0,
    duration: 0.3,
    delay: 1,
    rotate:360

})
gsap.from("#page2 #box", {
    scale:0,
    duration: 0.3,
    delay: 1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        scrub:true,      //  jaise jaise window upar niche krege animate hoga  number v de sakte h 1-5 bich smoothness ke liye
        pin:
    }
    
})

gsap.from("#page3 #box", {
    scale:0,
    duration: 0.3,
    delay: 1,
    rotate:360,
    // scrollTrigger:"#page3 #box"
    scrollTrigger:{
         trigger:"#page3 #box",
         scroller:"body",
         markers:true,
         start:"top 60%"
    }}) 



    gsap.from(" #page4 #boxinput h1",{
    x:500,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page4 #boxinput h1",
        scroller:"body",
        markers:true,
        start:"top 60%"
        
    }
})
    gsap.from(" #page4 #boxinput h2",{
    x:-500,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page4 #boxinput h2",
        scroller:"body",
        markers:true,
        start:"top 60%"
        
    }
})
