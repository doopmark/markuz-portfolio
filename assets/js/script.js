console.log(window.innerWidth)
if(window.innerWidth >= 1024) {

    let scrollpos = window.scrollY
    const header = document.querySelector("nav")
    const add_class_on_scroll = () => header.classList.add("fade-in")
    const remove_class_on_scroll = () => header.classList.remove("fade-in")
    console.log(window.screen.width)
    window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;
        if (scrollpos >= 10) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
        // console.log(scrollpos)
    })
} else {
    const header = document.querySelector("nav")
    header.classList.add("mobile-nav");
}

// .nav-shrink {
//     min-height: 60px;
//     padding: 8px 5rem;
//   }