//count buttons
var buttonCount = document.querySelectorAll(".drum").length;

//add on click event listener to buttons
for (var i=0; i<buttonCount; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick(){
    alert("I got clicked!");
}