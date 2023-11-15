function avisar(){
    let menuwp = document.getElementById('menuimg');
    let itemenu = document.getElementById('itensmenu')
    if(menuwp.style.transform == 'rotate(360deg)')
    {
        menuwp.style.transform = 'rotate(1080deg)'

        itemenu.style.width = '0vw'
        
    } else{
        menuwp.style.transform = 'rotate(360deg)'
        itemenu.style.width = '40vw'
        
        
    }
   
   
}