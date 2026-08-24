// import gsap from "gsap";
gsap.to("#box1",{
    x:1000,
    duration:1,
   rotate:360,
   backgroundColor:"yellow",
    delay:2,
    borderRadius:"50%",
    // stagger:1
   
    
})
gsap.from("#box2",{
    x:1000,
    duration:3,
 
    delay:5,
   
    
})
gsap.to("#box3",{
    x:1000,
    duration:1,
   rotate:360,
   backgroundColor:"blue",
    delay:2,
    borderRadius:"50%",
    height:200,
    width:200,
    delay:2,
    yoyo:true,
    
    // stagger:1
   
    
})

gsap.from("h1",{
    opacity:0,
    duration:2,
    y:400,
    stagger:0.5,   // one by one chalana h  to es propety ka use  krege
})