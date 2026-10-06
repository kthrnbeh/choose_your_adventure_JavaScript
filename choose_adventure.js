const storyText = document.querySelector("#adventure-text");

storyText.textContent = "You wake up at the entrance of a mysterious forest.";
const princessButton = document.querySelector("#princess-button");
const wizardButton = document.querySelector("#wizard-button");

const adventureText = document.getElementById("#adventure-text");
const characterButtons = document.getElementById("#character-buttons");
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
    const textNode = document.getElementById("adventure-text");
    textNode.textContent = "You have chosen your character!";
    characterButtons.style.display = "none";
}
function selectOption (characterButtons) {
    
}