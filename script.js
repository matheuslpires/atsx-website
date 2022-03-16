function showLeft(){
    document.querySelector('.carousel-content').style.left= '15px'
}
function showRight(){
    document.querySelector('.carousel-content').style.left= '-620px'
}

var scrollDown = document.getElementById("scroll-down")
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 50) {
        scrollDown.classList.add("scroll-down");
}   else { scrollDown.classList.remove("scroll-down")
    
}
    
})

var mobileMenu = document.querySelector(".mobile-menu")
var clickButton = document.querySelector(".navigation")
var clickOff = document.querySelector(".navigation-off")
clickButton.addEventListener("click",function() {
    mobileMenu.classList.add("mobile-menu-show")
}

)
clickOff.addEventListener("click",function(){
    mobileMenu.classList.remove("mobile-menu-show")
}
)

