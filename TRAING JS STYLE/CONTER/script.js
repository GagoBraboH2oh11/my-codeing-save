var result = document.querySelector("#result");
var more = document.querySelector("#more")
var reset = document.querySelector("#reset")
var down = document.querySelector("#down")
var Alert = document.querySelector("#alert")
var c = 0;

more.addEventListener("click", ()=>{
	result.innerHTML=c+=1;
	Alert.innerHTML="";
})

reset.addEventListener("click",()=>{
	result.innerHTML=0;
	c=0
})

down.addEventListener("click", ()=>{
	if (c <= 0) {
		Alert.innerHTML="Já deu no minino, que é zero!"
	}else{
		result.innerHTML=c-=1;
	}
})

result.innerHTML=c;