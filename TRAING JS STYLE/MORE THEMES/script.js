var theme1 = document.querySelector("#theme1")
var theme2 = document.querySelector("#theme2")
var Header = document.querySelector("#header")
var Body = document.querySelector("#conteiner")



theme1.addEventListener("click", () => {
    Body.style.background = "white"
    Header.style.background = "black"
    Body.style.transition = "1s"
    Header.innerHTML='<img src="IMG/sol-braco.png" class="rotatesun">'
})

theme2.addEventListener("click", () => {
    Body.style.transition = "1s"
    Body.style.background = "black"
    Header.style.background = "white"
    Header.innerHTML='<img src="IMG/lua-preta.png" class="rotatemoon">'
})
