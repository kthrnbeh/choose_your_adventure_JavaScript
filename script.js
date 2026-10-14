
const character_one ={
    name: "SnowMan",
    color: "white",
    season:"winter",
    story:"Once there was a snowman...",
    choices: ["Follow the song! 🎵🎵", "Give him a magic scarf!☃️"]
}
const character_two ={
    name: "PopcornTree",
    color:"brown",
    season:"spring",
    story:"You look out your window...",
    choices:["Follow the song🎵🎵", "Go to your room.🚪"]
}
const heading =document.getElementById("character_choice");
const choicesContainer = document.getElementById("choices");
const PopcornTreeButton = document.getElementById("tree");
const snowManButton=document.getElementById("snowman");


function displayScene(character){
    // Display the story belonging to the character received.
    heading.textContent =character.story
    // Remove the previous choices.
    choicesContainer.innerHTML = "";

    // Go through each choice in the selected character.
   
    character.choices.forEach(function(choice) {
        // Create a new button.

        const choiceButton = document.createElement('button');
    // Give the button the text stored in choice.
        choiceButton.textContent=choice;
        choicesContainer.appendChild(choiceButton);
        
        

    // Add the button to choicesContainer.

    });
     

}

    
snowManButton.addEventListener("click", function() {
    // Change the heading to the Snowman's story
    displayScene(character_one);
 
});
PopcornTreeButton.addEventListener("click", function() {
    // Change the heading to the popcorn tree story
    displayScene(character_two);
    
});
//let currentScene="start";

//const story ={}



// 4. Create the different adventure scenes
//    - Create a scene for following the Snowman song
//    - Create a scene for giving Snowman a magic scarf
//    - Create a scene for following the Popcorn Tree song
//    - Create a scene for going to the girl's room
//    - Give each scene its own story text
//    - Give each scene two choices
//    - Connect each choice to the next scene
    const magicScarf= {
        story:"As the snowman received the blue scarf magic came upon him.",
        choices:["He began to dance","He wanted adventure"],
    }


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