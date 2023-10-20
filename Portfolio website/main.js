let btn= document.getElementById('btnn')
window.onscroll= function(){
    if (scrollY >=2400) {
        btn.style.display='block'
    }else{
        (scrollY < 2400) 
            btn.style.display='none'
    }
}
btn.onclick=function(){
    window.scroll(0,0)
}