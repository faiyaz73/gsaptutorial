// let timevalue = gsap.timevalue()

// timevalue.from("#course .course_item", {
//     y: -30,
//     duration: 1,
    

// })
let tr = gsap.timeline()
tr.from("#course .course_item .item",{
    y:-400,
    duration:0.4,
    stagger:0.3
})