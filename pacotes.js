var buttonPacEcommerce = document.querySelector(".bt-config-ecommerce")
var pacEcommerce = document.querySelector(".pac-config-ecommerce")
buttonPacEcommerce.addEventListener("click",function() {
    pacBanners.classList.remove("show")
    pacCadastroProdutos.classList.remove("show")
    pacEcommerce.classList.add("show")

})

var buttonPacCadastroProdutos = document.querySelector(".bt-cadastro-produtos")
var pacCadastroProdutos = document.querySelector(".pac-cadastro-produtos")
buttonPacCadastroProdutos.addEventListener("click",function() {
    pacBanners.classList.remove("show")
    pacEcommerce.classList.remove("show")
    pacCadastroProdutos.classList.add("show")

})
var buttonPacBanners = document.querySelector(".bt-banners")
var pacBanners = document.querySelector(".pac-banners")
buttonPacBanners.addEventListener("click", function() {
    pacCadastroProdutos.classList.remove("show")
    pacEcommerce.classList.remove("show")
    pacBanners.classList.add("show")

})