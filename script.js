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
// 2. Make the character buttons work
//    - Listen for a click on the Snowman button
//    - Change the story text to the Snowman's story
//    - Listen for a click on the Popcorn Tree button
//    - Change the story text to the Popcorn Tree's story


// 3. Show the next two choices
//    - Remove the old character buttons
//    - Get the two choices from the selected character
//    - Create a new button for each choice
//    - Display those buttons on the webpage


// 4. Create the different adventure scenes
//    - Create a scene for following the Snowman song
//    - Create a scene for giving Snowman a magic scarf
//    - Create a scene for following the Popcorn Tree song
//    - Create a scene for going to the girl's room
//    - Give each scene its own story text
//    - Give each scene two choices
//    - Connect each choice to the next scene


// 5. Change the pictures as the story continues
//    - Find the place in HTML where the story picture will appear
//    - Display the picture that belongs to the current scene
//    - Change the picture when the player makes a choice


// 6. Keep track of the current scene
//    - Create a variable to remember which scene the player is in
//    - Update that variable when the player makes a choice


// 7. Create a function to display scenes
//    - Get the story text for the current scene
//    - Display the correct picture
//    - Display the two available choices
//    - Make the new buttons respond to clicks


// 8. Add a restart option
//    - Create a restart button
//    - Listen for the restart button to be clicked
//    - Return the player to the character selection screen
//    - Show the Popcorn Tree and Snowman pictures again


// 9. Test the completed game
//    - Test both starting characters
//    - Test every choice and story path
//    - Make sure the pictures change correctly
//    - Make sure restart works