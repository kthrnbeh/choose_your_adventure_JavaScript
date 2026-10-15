
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
                image:
                nextScene:"Dance"
            },
            {
                text:"The snowman wants adventure!",
                image:
                nextScene:"Adventure"
            }
        ]
    },
    Dance:{
        story:"The snowman jolly and bright dances!",
         choices: [
            {
                text:"He does a flip.",
                image:
                nextScene:"Flip"
            },
            {
                text:"He is done.",
                image:
                nextScene:"Return"
            }
        ]

    },
    Flip:{
        story:"Cool Flip Snowman!",
         choices: [
            {
                text:"He's tired now.",
                image:
                nextScene:"Return"
            },
           
        ]

    },
    snowmanSong:{
        story:"Once there was a snow man!",
         choices: [
            {
                text:"He was tall, tall, tall!",
                image:
                nextScene:"Small"
            },
            {
                text:"He wanted adventure!",
                image:
                nextScene:"Adventure"
            },

           
        ]

    },
    Small: {
            story:"Then the sun came out!",
            choices: [
            {
                text:"in the sun he melted!",
                image:
                nextScene:"Melted"
            },
            {
                text:"He wanted adventure!",
                image:
                nextScene:"Adventure"
            },

           
        ]
    },
    Melted: {
            story:"After He melted!",
            choices: [
            {
                text:"he became small, small small!",
                image:
                nextScene:"Return"
            },
            {
                text:"Oh No, no more snowman!",
                image:
                nextScene:"Return"
            },

           
        ]

    },
    Adventure:{
        story:"Cool Flip Snowman!",
         choices: [
            {
                text:"He's tired now.",
                image:
                nextScene:"Return"
            },
         ]
        },

    PopcornSong:{
        story:"I looked out the window and what did I see!",
         choices: [
            {
                text:"Popcorn popping on the apricot tree.",
                image:
                nextScene: "Surprise"
            },
             {
                text:"A beautiful tree but I'm done looking now.",
                image:
                nextScene:"gotoRoom"
            },
           
        ]
    },
   Surprise:{
        story:"Spring has brought me such a nice suprise!",
         choices: [
            {
                text:"Popcorn popping right before my eyes.",
                image:
                nextScene:"Handful"
            },
             {
                text:"Not interested.",
                image:
                nextScene:"Return"
            },
           
        ],
    },
        Handful:{
        story:"I can take a handful that smells so sweet!",
         choices: [
            {
                text:"A popcorn ball that would smell so sweet.",
                image:
                nextScene:"Notso"
            },
             {
                text:"Not interested.",
                image:
                nextScene:"Return"
            },
           
        ],

    },
    Notso:{
        story:"it wasn't really so but it seemed to me!",
         choices: [
            {
                text:"A popcorn ball on the Apricot tree.",
                image:
                nextScene:"Return"
            },
           
        ],

    },
    gotoRoom:{
        story:"The tree was cool and inspired my imagination!",
         choices: [
            {
                text:"Become a princess.",
                image:
                nextScene:"Princess"
            },
            {
                text:"Become a Knight.",
                image:
                nextScene:"Knight"
            },
         ]
        },
        Princess:{
        story:"The tree was cool and inspired my imagination!",
         choices: [
            {
                text:"You find a baby dragon.",
                image:
                nextScene:"Baby"
            },
            {
                text:"Discover a secret garden.",
                image:
                nextScene:"Flowers"
            },
         ]
        },
        Baby:{
        story:"We need to help the baby dragon!",
         choices: [
            {
                text:"Find mom!",
                image:
                nextScene:"Mom"
            },
            {
                text:"Sing baby to sleep",
                image:
                nextScene:"snowmanSong"
            },
         ]
        },
        Mom:{
        story:"See glowing footsteps that look like dragons",
         choices: [
            {
                text:"Follow the footsteps!",
                image:
                nextScene:"Footsteps"
            },
            {
                text:"Give up.",
                image:
                nextScene:"Return"
            },
         ]
        },
        Footsteps:{
        story:"You did it! You found mom she is really grateful.",
         choices: [
            {
                text:"She gives you a magic scarf!",
                image:
                nextScene:"magicScarf"
            },
            {
                text:"Time to headhome.",
                image:
                nextScene:"Return"
            },
         ]
        },
        princessGarden: {
    story:"The princess discovers that all the flowers in the royal garden have disappeared!",
    choices: [
        {
            text:"Follow the glowing petals",
            image:
            nextScene:"flowerPath"
        },
        {
            text:"Search the old fountain",
            image:
            nextScene:"gardenFountain"
        },
    ]
},

flowerPath: {
    story:"The princess follows the glowing petals into the forest and finds a tiny creature hiding behind a tree.",
    choices: [
        {
            text:"Ask the creature what happened",
            image:
            nextScene:"littleCreature"
        },
        {
            text:"Follow the petals farther",
            image:
            nextScene:"littleCreature"
        },
    ]
},

gardenFountain: {
    story:"Inside the old fountain, the princess finds a magical seed glowing beneath the water.",
    choices: [
        {
            text:"Take the seed carefully",
            image:
            nextScene:"littleCreature"
        },
        {
            text:"Use her magic to lift it",
            image:
            nextScene:"littleCreature"
        },
    ]
},

littleCreature: {
    story:"The creature explains that it took the garden's magic because it wanted flowers for its lonely home.",
    choices: [
        {
            text:"Share the garden's magic",
            image:
            nextScene:"shareMagic"
        },
        {
            text:"Invite the creature to the castle",
            image:
            nextScene:"makeFriend"
        },
    ]
},

shareMagic: {
    story:"The princess shares the magical seed with the creature. Together, they plant it in the forest.",
    choices: [
        {
            text:"Water the seed",
            image:
            nextScene:"gardenBloom"
        },
        {
            text:"Sing a happy song",
            image:
            nextScene:"gardenBloom"
        },
    ]
},

makeFriend: {
    story:"The princess invites the creature to live in the royal garden, where it will never be lonely again.",
    choices: [
        {
            text:"Plant flowers together",
            image:
            nextScene:"gardenBloom"
        },
        {
            text:"Show the creature the castle",
            image:
            nextScene:"gardenBloom"
        },
    ]
},

gardenBloom: {
    story:"The magical flowers bloom again, and the princess has made a new friend!",
    choices: [
        {
            text:"Celebrate in the garden",
            image:
            nextScene:"princessEnding"
        },
        {
            text:"Give the creature a flower crown",
            image:
            nextScene:"princessEnding"
        },
    ]
},

princessEnding: {
    story:"The princess learns that kindness can make even the saddest garden bloom.",
    choices: [
        {
            text:"Play again",
            nextScene:"characterChoice"
        },
        {
            text:"Choose another adventure",
            nextScene:"characterChoice"
        },
    ]
},
Knight:{
    story:"The knight hears an angry dragon roaring near the castle!",
    choices: [
        {
            text:"Raise the shield",
            image:
            nextScene:"Shield"
        },
        {
            text:"Talk to the dragon",
            image:
            nextScene:"TalkDragon"
        },
    ]
},

Shield:{
    story:"The dragon knocks the knight down with a powerful gust of wind!",
    choices: [
        {
            text:"Stand up bravely",
            image:
            nextScene:"StandUp"
        },
        {
            text:"Run back to the castle",
            image:
            nextScene:"Return"
        },
    ]
},

StandUp:{
    story:"The knight stands up and notices that the dragon has a thorn stuck in its wing.",
    choices: [
        {
            text:"Help remove the thorn",
            image:
            nextScene:"HelpDragon"
        },
        {
            text:"Use the shield again",
            nextScene:"Return"
        },
    ]
},

TalkDragon:{
    story:"The knight speaks calmly to the dragon and discovers that the dragon is hurt.",
    choices: [
        {
            text:"Help the dragon",
            image:
            nextScene:"HelpDragon"
        },
        {
            text:"Leave the dragon alone",
            image:
            nextScene:"Return"
        },
    ]
},

HelpDragon:{
    story:"The knight carefully removes the thorn from the dragon's wing.",
    choices: [
        {
            text:"Lead the dragon home",
            image:
            nextScene:"LeadDragon"
        },
        {
            text:"Give the dragon food",
            image:
            nextScene:"LeadDragon"
        },
    ]
},

LeadDragon:{
    story:"The dragon is no longer angry. The knight leads the dragon safely back to its family.",
    choices: [
        {
            text:"Celebrate with the dragons",
            image:
            nextScene:"KnightEnding"
        },
        {
            text:"Return to the castle",
            image:
            nextScene:"KnightEnding"
        },
    ]
},

KnightEnding:{
    story:"The knight learns that courage is not only fighting. Sometimes courage means helping someone who is afraid or hurt.",
    choices: [
        {
            text:"Play again",
            nextScene:"Return"
        },
        {
            text:"Choose another adventure",
            nextScene:"Return"
        },
    ]
},
};
