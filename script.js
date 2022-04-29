var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

function jump(){

    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");

    },600);
}

function Move(){
    if(block.classList == "animate1"){return}
    block.classList.add("animate1");
    setInterval(checkScore, 25);

}


var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<120 && blockLeft>80 && characterTop>=130){
        alert("Game Over.");
        block.classList.remove("animate1");
    }
}, );



