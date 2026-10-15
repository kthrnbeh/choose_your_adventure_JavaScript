
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
function restartGame() {

     heading.textContent ="Let the adventure begin!";
    choicesContainer.innerHTML = "";

    choicesContainer.appendChild(PopcornTreeButton)
    choicesContainer.appendChild(snowManButton)

}


function displayScene(character){
    heading.textContent = character.story
    choicesContainer.innerHTML = "";

    character.choices.forEach(function(choice) {
        const choiceButton = document.createElement('button');
        choiceButton.textContent=choice.text;
        choicesContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", function() {
            if (choice.nextScene === "Return") {
                return restartGame();
            } else {
                displayScene(scenes[choice.nextScene]);
            }

        }); 

    }); 

} 
        

   
snowManButton.addEventListener("click", function() {
    displayScene(character_one);
 
});
PopcornTreeButton.addEventListener("click", function() {
    displayScene(character_two);
    
});
const scenes = {
    snowMan: character_one,
    popcornTree: character_two,

    magicScarf: {
        story: "As the snowman received the blue scarf, magic came upon him.",
        choices: [
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
            {
                text:"He does a flip.",
                nextScene:"Flip"
            },
            {
                text:"He is done.",
                nextScene:"Return"
            }
        ]

    },
    Flip:{
        story:"Cool Flip Snowman!",
         choices: [
            {
                text:"He's tired now.",
                nextScene:"Return"
            },
           
        ]

    },
    snowmanSong:{
        story:"Once there was a snow man!",
         choices: [
            {
                text:"He was tall, tall, tall!",
                nextScene:"Small"
            },
            {
                text:"He wanted adventure!",
                nextScene:"Adventure"
            },

           
        ]

    },
    Small: {
            story:"Then the sun came out!",
            choices: [
            {
                text:"in the sun he melted!",
                nextScene:"Melted"
            },
            {
                text:"He wanted adventure!",
                nextScene:"Adventure"
            },

           
        ]
    },
    Melted: {
            story:"After He melted!",
            choices: [
            {
                text:"he became small, small small!",
                nextScene:"Return"
            },
            {
                text:"Oh No, no more snowman!",
                nextScene:"Return"
            },

           
        ]

    },
    PopcornSong:{
        story:"I looked out the window and what did I see!",
         choices: [
            {
                text:"Popcorn popping on the apricot tree.",
                nextScene: "Surprise"
            },
             {
                text:"A beautiful tree but I'm done looking now.",
                nextScene:"gotoRoom"
            },
           
        ]
    },
   Surprise:{
        story:"Spring has brought me such a nice suprise!",
         choices: [
            {
                text:"Popcorn popping right before my eyes.",
                nextScene:"Handful"
            },
             {
                text:"Not interested.",
                nextScene:"Return"
            },
           
        ],
    },
        Handful:{
        story:"I can take a handful that smells so sweet!",
         choices: [
            {
                text:"A popcorn ball that would smell so sweet.",
                nextScene:"Notso"
            },
             {
                text:"Not interested.",
                nextScene:"Return"
            },
           
        ],

    },
    Notso:{
        story:"it wasn't really so but it seemed to me!",
         choices: [
            {
                text:"A popcorn ball on the Apricot tree.",
                nextScene:"Return"
            },
           
        ],

    },
    gotoRoom:{
        story:"The tree was cool and inspired my imagination!",
         choices: [
            {
                text:"Become a princess.",
                nextScene:"Princess"
            },
            {
                text:"Become a Knight.",
                nextScene:"Knight"
            },
         ]
        },
        Princess:{
        story:"The tree was cool and inspired my imagination!",
         choices: [
            {
                text:"You find a baby dragon.",
                nextScene:"Baby"
            },
            {
                text:"Become a Knight.",
                nextScene:"Knight"
            },
         ]
        },
    Adventure:{
        story:"Cool Flip Snowman!",
         choices: [
            {
                text:"He's tired now.",
                nextScene:"Return"
            },
         ]
        },

};
    
        
    
    

