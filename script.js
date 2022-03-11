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


// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 10) {
//             $("#scroll-down").addClass("scroll-down");
//         } else {
//             //remove the background property so it comes transparent again (defined in your css)
//            $("#scrol-down").removeClass("scroll-down");
//         }
//     });
// });