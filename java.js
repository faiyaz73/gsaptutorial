// // import gsap from "gsap";
// gsap.to("#box1",{
//     x:1000,
//     duration:1,
//    rotate:360,
//    backgroundColor:"yellow",
//     delay:2,
//     borderRadius:"50%",
//     // stagger:1
   
    
// })
// gsap.from("#box2",{
//     x:1000,
//     duration:3,
 
//     delay:5,
   
    
// })
// gsap.to("#box3",{
//     x:1000,
//     duration:1,
//    rotate:360,
//    backgroundColor:"blue",
//     delay:2,
//     borderRadius:"50%",
//     height:200,
//     width:200,
//     delay:2,
//     yoyo:true,
    
//     // stagger:1
   
    
// })

// gsap.from("h1",{
//     opacity:0,
//     duration:2,
//     y:400,
//     stagger:0.5,   // one by one chalana h  to es propety ka use  krege
// })


// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     borderRadius:"50%",
//     repeat:-1,
//     yoyo:true,
//     ease:"power1.inOut",
//     backgroundColor:"blue",
//     border:"5px solid red",



    
    
// })

// gsap.to("#item1",{
//     x:1500,
//     duration:1,
//     delay:1,
//     // repeat:-1,
//     // yoyo:true
// })
// gsap.to("#item2",{
//     x:1500,
//     duration:1,
//     delay:2,
//     // repeat:-1,
//     // yoyo:true
// })
// gsap.to("#item3",{
//     x:1500,
//     duration:1,
//     delay:3,
//     // repeat:-1,
//     // yoyo:true
// })


// timeline property  agr hme calculation  bachna h delay se related 


const ti = gsap.timeline()

ti.to("#item1",{
    duration:1,
    x:1200,
    delay:1,
    rotate:360
})

ti.to("#item2",{
    duration:1,
    x:1200,
   delay:1,
   rotate:360   
})
ti.to("#item3",{
    duration:1,
    x:1200,
   delay:1,
   rotate:360 
})


let value = gsap.timeline()


value.from("h1",{
    y:-30,
    duration:1,
    opacity:0,
  
})

value.from("#box h2",{
    y:-30,
    opacity:0,
    stagger:0.1,
    duration:0.3,
   
})

value.from("h3",{
    y:20,
    opacity:0,
    duration:0.3,
    scale:0
})