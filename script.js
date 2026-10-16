// These objects hold the information for the two characters the player can choose.
const character_one ={
    name: "SnowMan",
    color: "white",
    season:"winter",
    story:"Once there was a snowman...",
    choices: [
        { text:"Follow the song! 🎵🎵",
            nextScene: "snowmanSong"
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

// These references connect the JavaScript to the parts of the HTML page that change during the game.
const heading =document.getElementById("character_choice");
const choicesContainer = document.getElementById("choices");
const PopcornTreeButton = document.getElementById("tree");
const snowManButton = document.getElementById("snowman");


function restartGame() {

    // Show the opening message and remove the current story choices.

    heading.textContent = "Let the adventure begin!";
    choicesContainer.innerHTML = "";

    choicesContainer.appendChild(PopcornTreeButton);
    choicesContainer.appendChild(snowManButton);
}


function displayScene(character) {
    // Show the selected story and clear the buttons from the previous scene.
    heading.textContent = character.story;
    choicesContainer.innerHTML = "";

    character.choices.forEach(function(choice) {
        // Create one button for each choice in the current scene.
        const choiceButton = document.createElement("button");

        if (choice.image && choice.image !== "images/") {
            // Add the choice image when that choice has a valid image path.
            const choiceImage = document.createElement("img");
            choiceImage.src = choice.image;
            choiceImage.alt = choice.text;
            choiceButton.appendChild(choiceImage);
        }

        choiceButton.append(choice.text);
        choicesContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", function() {
            // Return to the character choices when a scene ends.
            if (choice.nextScene === "Return") {
                return restartGame();
            } else {
                // Otherwise, move to the scene named by the selected choice.
                try{
                    displayScene(scenes[choice.nextScene]);
                } catch(error){
                    heading.textContent = "Sorry this scene could not be loaded.";
                }
            }

        });
    });
}

// Start the adventure when the player chooses the Snowman.
snowManButton.addEventListener("click", function() {
    displayScene(character_one);
});

// Start the adventure when the player chooses the Popcorn Tree.
PopcornTreeButton.addEventListener("click", function() {
    displayScene(character_two);
});

// This object stores every story scene so choices can move between them.
const scenes = {
    // These are the two starting scenes connected to the character buttons.
    snowMan: character_one,
    popcornTree: character_two,

    // Snowman scenes begin here.
    magicScarf: {
        story: "As the snowman received the blue scarf, magic came upon him.",
        choices: [
            {
                text:"The snowman begins to dance.",
                image:"images/dance_snowman.png",
                nextScene:"Dance"
            },
            {
                text:"The snowman wants adventure!",
                image:"images/snow_adventure.png",
                nextScene:"Adventure"
            }
        ]
    },
    Dance:{
        story:"The snowman dances, jolly and bright!",
         choices: [
            {
                text:"He does a flip.",
                image:"images/snow_flip.png",
                nextScene:"Flip"
            },
            {
                text:"He is done.",
                image:"images/all_done_snow.png",
                nextScene:"Return"
            }
        ]

    },
    Flip:{
        story:"The snowman did a cool flip!",
         choices: [
            {
                text:"He's tired now.",
                image:"images/snow_tired.png",
                nextScene:"Return"
            },
           
        ]

    },
    snowmanSong:{
        story:"Once there was a snowman!",
         choices: [
            {
                text:"He was tall, tall, tall!",
                image:"images/tall.png",
                nextScene:"Small"
            },
            {
                text:"He wanted adventure!",
                image:"images/snow_adventure.png",
                nextScene:"Adventure"
            },

           
        ]

    },
    Small: {
            story:"Then the sun came out!",
            choices: [
            {
                text:"In the sun, he melted!",
                image:"images/supersmall.png",
                nextScene:"Melted"
            },
            {
                text:"He wanted adventure!",
                image:"images/snow_adventure.png",
                nextScene:"Adventure"
            },

           
        ]
    },
    Melted: {
        story:"After he melted...",
            choices: [
            {
                text:"He became small, small, small!",
                image:"images/small.png",
                nextScene:"Return"
            },
            {
                text:"Oh No, no more snowman!",
                image:"images/snow_melt.png",
                nextScene:"Return"
            },

           
        ]

    },
    Adventure:{
        story:"The snowman did a cool flip!",
         choices: [
            {
                text:"He's tired now.",
                image:"images/snow_tired.png",
                nextScene:"Return"
            },
         ]
        },

    // Popcorn Tree scenes begin here.
    PopcornSong:{
        story:"I looked out the window and what did I see!",
         choices: [
            {
                text:"Popcorn popping on the apricot tree.",
                image:"images/looking.png",
                nextScene: "Surprise"
            },
             {
                text:"A beautiful tree but I'm done looking now.",
                image:"images/turn_away.png",
                nextScene:"gotoRoom"
            },
           
        ]
    },
   Surprise:{
        story:"Spring has brought me such a nice surprise!",
         choices: [
            {
                text:"Popcorn popping right before my eyes.",
                image:"images/see.png",
                nextScene:"Handful"
            },
             {
                text:"Not interested.",
                image:"images/turn_away.png",
                nextScene:"Return"
            },
           
        ],
    },
        Handful:{
        story:"I can take a handful that smells so sweet!",
         choices: [
            {
                text:"A popcorn ball that would smell so sweet.",
                image:"images/popcorn.png",
                nextScene:"Notso"
            },
             {
                text:"Dance with the tree.",
                image:"images/dance_tree.png",
                nextScene:"Return"
            },
           
        ],

    },
    Notso:{
        story:"It wasn't really so, but it seemed that way to me!",
         choices: [
            {
                text:"A popcorn ball on the apricot tree.",
                image:"images/popcorn.png",
                nextScene:"Return"
            },
           
        ],

    },
    gotoRoom:{
        story:"The tree was cool and inspired my imagination!",
         choices: [
            {
                text:"Become a princess.",
                image:"images/princess_choice.png",
                nextScene:"Princess"
            },
            {
                text:"Become a knight.",
                image:"images/knight.png",
                nextScene:"Knight"
            },
         ]
        },
        Princess:{
        story:"The tree was cool and inspired my imagination!",
         choices: [
            {
                text:"Find a baby dragon.",
                image:"images/baby_dragon.png",
                nextScene:"Baby"
            },
            {
                text:"Discover a secret garden.",
                image:"images/garden_door.png",
                nextScene:"princessGarden"
            },
         ]
        },
        Baby:{
        story:"We need to help the baby dragon!",
         choices: [
            {
                text:"Find mom!",
                image:"images/lead.png",
                nextScene:"Mom"
            },
            {
                text:"Sing the baby to sleep.",
                image:"images/song.png",
                nextScene:"snowmanSong"
            },
         ]
        },
        Mom:{
        story:"You see glowing footsteps that look like dragon tracks.",
         choices: [
            {
                text:"Follow the footsteps!",
                image:"images/path.png",
                nextScene:"Footsteps"
            },
            {
                text:"Give up.",
                image:"images/give_up.png",
                nextScene:"Return"
            },
         ]
        },
        Footsteps:{
        story:"You did it! You found Mom, and she is really grateful.",
         choices: [
            {
                text:"She gives you a magic scarf!",
                image:"images/scarf_blue.png",
                nextScene:"magicScarf"
            },
            {
                text:"Time to head home.",
                image:"images/reunited.png",
                nextScene:"Return"
            },
         ]
        },
    // Princess garden scenes begin here.
    princessGarden: {
    story:"The princess discovers that all the flowers in the royal garden have disappeared!",
    choices: [
        {
            text:"Follow the glowing petals.",
            image:"images/glow.png",
            nextScene:"flowerPath"
        },
        {
            text:"Search the old fountain.",
            image:"images/fountain.png",
            nextScene:"gardenFountain"
        },
    ]
},

flowerPath: {
    story:"The princess follows the glowing petals into the forest and finds a tiny creature hiding behind a tree.",
    choices: [
        {
            text:"Ask the creature what happened.",
            image:"images/hide.png",
            nextScene:"littleCreature"
        },
        {
            text:"Follow the petals farther.",
            image:"images/notflower.png",
            nextScene:"littleCreature"
        },
    ]
},

gardenFountain: {
    story:"Inside the old fountain, the princess finds a magical seed glowing beneath the water.",
    choices: [
        {
            text:"Take the seed carefully.",
            image:"images/careful.png",
            nextScene:"littleCreature"
        },
        {
            text:"Use her magic to lift it.",
            image:"images/seed.png",
            nextScene:"littleCreature"
        },
    ]
},

littleCreature: {
    story:"The creature explains that it took the garden's magic because it wanted flowers for its lonely home.",
    choices: [
        {
            text:"Share the garden's magic.",
            image:"images/creature.png",
            nextScene:"shareMagic"
        },
        {
            text:"Invite the creature to the castle.",
            image:"images/castle.png",
            nextScene:"makeFriend"
        },
    ]
},

shareMagic: {
    story:"The princess shares the magical seed with the creature. Together, they plant it in the forest.",
    choices: [
        {
            text:"Water the seed.",
            image:"images/plant.png",
            nextScene:"gardenBloom"
        },
        {
            text:"Sing a happy song.",
            image:"images/sing.png",
            nextScene:"gardenBloom"
        },
    ]
},

makeFriend: {
    story:"The princess invites the creature to live in the royal garden, where it will never be lonely again.",
    choices: [
        {
            text:"Plant flowers together.",
            image:"images/plant_flower.png",
            nextScene:"gardenBloom"
        },
        {
            text:"Show the creature the castle.",
            image:"images/castle_look.png",
            nextScene:"gardenBloom"
        },
    ]
},

gardenBloom: {
    story:"The magical flowers bloom again, and the princess has made a new friend!",
    choices: [
        {
            text:"Celebrate in the garden.",
            image:"images/celebrate.png",
            nextScene:"princessEnding"
        },
        {
            text:"Give the creature a flower crown.",
            image:"images/crown.png",
            nextScene:"princessEnding"
        },
    ]
},

princessEnding: {
    story:"The princess learns that kindness can make even the saddest garden bloom.",
    choices: [
        {
            text:"The End.",
            nextScene:"Return"
        },
       
    ]
},
// Knight and dragon scenes begin here.
Knight:{
    story:"The knight hears an angry dragon roaring near the castle!",
    choices: [
        {
            text:"Raise the shield.",
            image:"images/block.png",
            nextScene:"Shield"
        },
        {
            text:"Talk to the dragon.",
            image:"images/angry_dragon.png",
            nextScene:"TalkDragon"
        },
    ]
},

Shield:{
    story:"The dragon knocks the knight down with a powerful gust of wind!",
    choices: [
        {
            text:"Stand up bravely.",
            image:"images/dragon_blow.png",
            nextScene:"StandUp"
        },
        {
            text:"Run back to the castle.",
            image:"images/run.png",
            nextScene:"Return"
        },
    ]
},

StandUp:{
    story:"The knight stands up and notices that the dragon has a thorn stuck in its wing.",
    choices: [
        {
            text:"Help remove the thorn.",
            image:"images/thorn.png",
            nextScene:"HelpDragon"
        },
        {
            text:"Use the shield again.",
            nextScene:"Return"
        },
    ]
},

TalkDragon:{
    story:"The knight speaks calmly to the dragon and discovers that the dragon is hurt.",
    choices: [
        {
            text:"Help the dragon.",
            image:"images/help_dragon1.png",
            nextScene:"HelpDragon"
        },
        {
            text:"Leave the dragon alone.",
            image:"images/run.png",
            nextScene:"Return"
        },
    ]
},

HelpDragon:{
    story:"The knight carefully removes the thorn from the dragon's wing.",
    choices: [
        {
            text:"Lead the dragon home.",
            image:"images/help_dragon1.png",
            nextScene:"LeadDragon"
        },
        {
            text:"Give the dragon food.",
            image:"images/food.png",
            nextScene:"LeadDragon"
        },
    ]
},

LeadDragon:{
    story:"The dragon is no longer angry. The knight leads the dragon safely back to its family.",
    choices: [
        {
            text:"Celebrate with the dragons.",
            image:"images/dragon_celebrate.png",
            nextScene:"KnightEnding"
        },
        {
            text:"Return to the castle.",
            image:"images/last.png",
            nextScene:"KnightEnding"
        },
    ]
},

KnightEnding:{
    story:"The knight learns that courage is not only fighting. Sometimes courage means helping someone who is afraid or hurt.",
    choices: [
        {
            text:"The End.",
            nextScene:"Return"
        },
       
    ]
},
};
