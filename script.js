
const character_one ={
    name: "SnowMan",
    color: "white",
    season:"winter",
    story:"Once there was a snowman...",
    choices: [
        { text:"Follow the song! 🎵🎵",
            nextScene: "snowManSong"
        }, {text:"Give him a magic scarf!☃️",
            nextScene:"magicScarf"
        }
    ]
}
const character_two ={
    name: "PopcornTree",
    color:"brown",
    season:"spring",
    story:"You look out your window...",
    choices:[
        {text:"Follow the song🎵🎵",
         nextScene: "PopcornSong"
         },
         {text: "Go to your room.",
            nextScene:"gotoRoom"
         }

    ]
}
const heading =document.getElementById("character_choice");
const choicesContainer = document.getElementById("choices");
const PopcornTreeButton = document.getElementById("tree");
const snowManButton=document.getElementById("snowman");
// Restart the game and return to character selection.
function restartGame() {

    // Change the question back to "Pick your Character".
     heading.textContent ="Let the adventure begin!";
    // Remove the current adventure choice buttons.
    choicesContainer.innerHTML = "";

    // Put the Popcorn Tree button back on the webpage.
    choicesContainer.appendChild(PopcornTreeButton)
    // Put the Snowman button back on the webpage.
    choicesContainer.appendChild(snowManButton)

}


function displayScene(character){
    // Display the story belonging to the character received.
    heading.textContent = character.story
    // Remove the previous choices.
    choicesContainer.innerHTML = "";

    // Go through each choice in the selected character.
   
    character.choices.forEach(function(choice) {
        // Create a new button.

        const choiceButton = document.createElement('button');
    // Give the button the text stored in choice.
        choiceButton.textContent=choice.text;
        choicesContainer.appendChild(choiceButton);
                // Listen for the player to click a choice.
        choiceButton.addEventListener("click", function() {
            if (choice.nextScene === "Return") {
                // We will call restartGame() here.
                return restartGame();
            } else {
                // Display the next adventure scene.
                displayScene(scenes[choice.nextScene]);
            }

        }); 

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




    
//holds all the story lines 
// Store all adventure scenes in one place.
const scenes = {
    snowMan: character_one,
    popcornTree: character_two,

    magicScarf: {
        story: "As the snowman received the blue scarf, magic came upon him.",
        choices: [
            // The two choices for this scene go here.
            {
                text:"The snowman begins to dance.",
                nextScene:"Dance"
            },
            {
                text:"The snowman wants adventure!",
                nextScene:"Adventure"
            }
        ]
    },
    Dance:{
        story:"The snowman jolly and bright dances!",
         choices: [
            // The two choices for this scene go here.
            {
                text:"He does a flip.",
                nextScene:"Flip"
            },
            {
                text:"He is done.",
                nextScene:"Return"//restart the game
            }
        ]

    },
    Flip:{
        story:"Cool Flip Snowman!",
         choices: [
            // The two choices for this scene go here.
            {
                text:"He's tired now.",
                nextScene:"Return"//end of choices return to start
            },
           
        ]

    },
};
    
        
    
    

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