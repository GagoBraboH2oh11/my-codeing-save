const img = document.querySelector("#conteiner")
let idx=0

function carrosel() {

   idx++

  if (idx == 5) {
    idx=0
  }

  img.style.transform=`translateX(${-idx * 500}px)`

  document.title=`SLIDER ${idx}`;

}
//setInterval(carrosel,2000)