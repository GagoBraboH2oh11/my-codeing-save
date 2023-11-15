var number = prompt("digite qualuqer numero")
var numbert = parseFloat(number)
var res = document.querySelector(".res")
res.innerHTML= `numero escolhido ${numbert}`; 

function adiçao() {
    var adi = parseFloat(prompt("digite qualquer numero") )     
    res.innerHTML = `${numbert} + ${adi} = ${numbert/adi}`; 
}

function subtraçao() {
    var sub = parseFloat(prompt("digite qualquer numero") )     
    res.innerHTML = `${numbert} - ${sub} = ${numbert/sub}`;  
}

function multiplicaçao () {
    var multi = parseFloat(prompt("digite qualquer numero") )     
    res.innerHTML = `${numbert} X ${multi} = ${numbert/multi}`; 
}

function divisao () {
    var div = parseFloat(prompt("digite qualquer numero") )     
    res.innerHTML = `${numbert} / ${div} = ${numbert/div}`; 
}