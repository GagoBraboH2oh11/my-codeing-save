var Calc = document.querySelector("#calc__button")
c=0;
Calc.addEventListener("click",()=>{
    
    c++
    Calc.innerHTML=`Calc: ${c}`
})