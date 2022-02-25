let navigation = document.querySelector(".navigation")

window.addEventListener("scroll", () => {
    let scrollYPosition = window.pageYOffset;
    if (scrollYPosition>50){
        navigation.classList.add("scroll")
    }else{
        navigation.classList.remove("scroll")
    }

})
