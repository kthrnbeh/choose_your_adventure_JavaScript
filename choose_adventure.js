const storyText = document.querySelector("#adventure-text");

storyText.textContent = "You wake up at the entrance of a mysterious forest.";
const princessButton = document.querySelector("#princess-button");
const wizardButton = document.querySelector("#wizard-button");

const adventureText = document.getElementById("#adventure-text");
const characterButtons = document.getElementById("#character-buttons");
let state = {
    state ={};
    showTextNode(1);
};
function chooseCharacter(character) {
    if (character === "princess") {
        storyText.textContent = "You are a brave princess on a quest to save your kingdom!";
    } else if (character === "wizard") {
        storyText.textContent = "You are a wise wizard seeking ancient knowledge!";
    } else if (character === "knight") {
        storyText.textContent = "You are a valiant knight defending the realm!";
    }
    characterButtons.style.display = "none";
}
function showTextNode(characterButtons) {
    const textNode = textNodes.find((textNode) => textNode.id === 1);
    textElement.innerText=textNode.text;
    while(characterButtons.firstChild) {
        characterButtons.removeChild(characterButtons.firstChild);
    }
    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.classList.add("btn");
            button.addEventListener("click", () => selectOption(option));
            characterButtons.appendChild(button);
        }
}
function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}
function selectOption (characterButtons) {
    contst nextTextNodeId = option.nextText;
    state=Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);

}
const textNodes = {
    id: 1,
    text: "Choose your character:",
    options: [
        {
            text: "Choose the princess",
            requiredState: (currentState) => currentState.princess,
            setState: { princess: true },
            nextText: 2
        },
        {
            text: "Choose the wizard",
            requiredState: (currentState) => currentState.wizard,
            setState: { wizard: true },
            nextText: 3
        },
        {
            text: "Choose the knight",
            requiredState: (currentState) => currentState.knight,
            setState: { knight: true },            
            nextText: 4
        }
    ]
    id: 2,
    text: "You are a brave princess on a quest to save your kingdom!",
    options: [
        {
            text: "Continue your journey",
            nextText: 5
        }
        {
            text: "Return to the forest entrance",
            nextText: 1
        }
        {
            text: "Rest for a while",
            nextText: 6
        }
        {
            text: "Explore the surroundings",
            nextText: 7
        }
    ]   
    id: 3,
    text: "You are a wise wizard seeking ancient knowledge!",
    options: [
        {
            text: "Continue your journey",
            nextText: 5
        }
        {
            text: "Return to the forest entrance",
            nextText: 1
        }
        {
            text: "Rest for a while",
            nextText: 6
        }
        {
            text: "Explore the surroundings",
            nextText: 7     
        }
    ]
    id: 4,
    text: "You are a valiant knight defending the realm!",
    options: [
        {
            text: "Continue your journey",  
            nextText: 5
        }
        {
            text: "Return to the forest entrance",      
            nextText: 1
        }
        {
            text: "Rest for a while",      
            nextText: 6
        }
        {
            text: "Explore the surroundings",      
            nextText: 7
        }
    ]
    id: 5,
    text: "You continue your journey through the forest, facing various challenges and making new discoveries.",
    options: [
         {
            text: "Return to the forest entrance",
            nextText: 1
        }
        {
            text: "Rest for a while",
            nextText: 6
        }   

    

};

chooseCharacter("princess");
chooseCharacter("wizard");
chooseCharacter("knight");