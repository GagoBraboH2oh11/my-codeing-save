var buttom_left = document.querySelector("#buttom_left");
var buttom_right = document.querySelector("#buttom_right");
var Slider = document.querySelector("#slider");
var Photo = document.querySelector("#photo");
var c = 1;

buttom_left.addEventListener("click", () => {
  if (c <= 1) {
    c = 6;
  } else {
    c -= 1;
  }

  Slider.innerHTML = `<img src="IMG/photo${c}.jpeg" alt="" srcset="">`;
});

buttom_right.addEventListener("click", () => {
  c++;
  if (c > 6) {
    c = 1;
  }

  Slider.innerHTML = `<img src="IMG/photo${c}.jpeg" alt="" srcset="">`;
});
