let navigation = document.querySelector(".navigation")

window.addEventListener("scroll", () => {
    let scrollYPosition = window.pageYOffset;
    if (scrollYPosition>50){
        navigation.classList.add("scroll")
    }else{
        navigation.classList.remove("scroll")
    }

});

let firstSlide = document.querySelector(".first")
let secondSlide = document.querySelector(".second")
let thirdSlide = document.querySelector(".third")

firstSlide.addEventListener('click', () => {
    firstSlide.classList.add('active')
    secondSlide.classList.remove('active')
    thirdSlide.classList.remove('active')
    
})
    secondSlide.addEventListener('click', () => {
        secondSlide.classList.add('active')
        firstSlide.classList.remove('active')
        thirdSlide.classList.remove('active')
        
    })
    thirdSlide.addEventListener('click', () => {
        thirdSlide.classList.add('active')
        firstSlide.classList.remove('active')
        secondSlide.classList.remove('active')
        
    })
