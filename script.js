var tl= gsap.timeline()
// gsap.from means final to intial
gsap.from(".logo h1 ,nav li",{
    y:-40,
    opacity:0,
    duration:0.7,
    delay:1,
    stagger: 0.15
    
    // scale = size
    })
    tl.from(".hero-text h1",{
        x:-200,
        opacity:0,
        duration:0.6,
        delay : 2
    }) 
       tl.from(".hero-text p",{
        x:-100,
        opacity:0,
        duration:0.4,
        
    })