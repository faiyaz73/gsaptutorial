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
    scrollTrigger:"#page2 #box"
})
gsap.from("#page3 #box", {
    scale:0,
    duration: 0.3,
    delay: 1,
    rotate:360,
    scrollTrigger:"#page3 #box"

})