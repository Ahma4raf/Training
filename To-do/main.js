const input_box= document.getElementById('input-box')
const Tasks= document.getElementById('Tasks')
function addTask(){
    if(input_box.value === ''){
        alert("Write Something")
    }
    else{
        let li =document.createElement("li")
        li.innerHTML =input_box.value;
        Tasks.appendChild(li)
      

        let span =document.createElement("span");
        span.innerHTML= "\u00d7"
        li.appendChild(span)
        
  

        li.appendChild(span)
li.addEventListener('click', function(){
    this.classList.toggle('checked');
}) //that code to check the code


span.addEventListener('click', function(){
    Tasks.removeChild(li) //that code to remove the task
})
    }
    input_box.value= "";
    
}
