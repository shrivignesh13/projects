const List = document.getElementById("list");
const inputbox = document.getElementById("input");


//alert input
 add=()=>{
if(inputbox.value===''){
    alert("Please Enter Data")
}else{
let li =document.createElement("li");
li.innerHTML=inputbox.value;
List.appendChild(li);

//create close button
 let span=document.createElement("span");
 span.innerHTML="\u00d7";
 li.appendChild(span);
}
inputbox.value="";
saveTask();
}

//checked with green button
List.addEventListener("click",function(event){
    if(event.target.tagName ==="LI"){
    event.target.classList.toggle("checked");
    saveTask();
}else if(event.target.tagName ==="SPAN"){
    event.target.parentElement.remove();
    saveTask();
}
})
// saved to local storage
function saveTask() {
    localStorage.setItem("data",List.innerHTML);
};

//display local storage 
showTask=()=>{
    List.innerHTML=localStorage.getItem("data")
    saveTask();
}
showTask();
