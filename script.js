var input =document.querySelector("input").value;
input=Number(input);
function add(){
    input=input+1;
    document.querySelector("input").value= input;
}

function sub(){
    var world= document.querySelector("input").value;
    world=world-1;
    document.querySelector("input").value= world;
}