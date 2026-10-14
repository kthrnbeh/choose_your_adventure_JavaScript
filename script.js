// 1. Create the story data
//    - Each scene needs story text
//    - Each scene needs one or more choices
//    - Each choice should point to another scene
const character_one ={
    name: "SnowMan",
    color: "white",
    season:"winter",
    story:"Once there was a snowman...",
    choices: ["follow the song", "Give him a magic scarf"]
}
const character_two ={
    name: "PopcornTree",
    color:"brown",
    season:"spring",
    story:"You look out your window...",
    choices:["follow the song", "Go to your room."]
}
const heading =document.getElementById("character_choice");
const choicesContainer = document.getElementById("choices");
const treeButton = document.getElementById("tree");
const snowManButton=document.getElementById("snowman");

button.addEventListener("click", function() {
    // Instructions go here when the button is clicked.
    heading.textContent= character_one.story
    heading.textContent=character_two.story

});
//let currentScene="start";

//const story ={}