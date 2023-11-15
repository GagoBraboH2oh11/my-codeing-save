const output = document.querySelector('.output')

function criartabuada () {

    var number=prompt("digite seu numero");
    number = parseFloat(number) ;
    var i = 1;
    while(i <= 1000){
    
        var msg = `${number} X ${i}: ${number*i}`
        i++
       

 }
 output.innerHTML = msg
}





