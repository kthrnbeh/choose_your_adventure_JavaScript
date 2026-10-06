const adventureText = document.querySelector("#adventure-text");
const characterButtons = document.querySelector("#character-buttons");

const textNodes = {
    1: {
        text: "Choose your character:",
        options: [
            { text: "Choose the princess", nextText: 2 },
            { text: "Choose the wizard", nextText: 3 },
            { text: "Choose the knight", nextText: 4 },
        ],
    },
    2: {
        text: "You are a brave princess on a quest to save your kingdom!",
        options: [
            { text: "Continue your journey", nextText: 5 },
            { text: "Return to the forest entrance", nextText: 1 },
            { text: "Rest for a while", nextText: 6 },
            { text: "Explore the surroundings", nextText: 7 },
        ],
    },
    3: {
        text: "You are a wise wizard seeking ancient knowledge!",
        options: [
            { text: "Continue your journey", nextText: 5 },
            { text: "Return to the forest entrance", nextText: 1 },
            { text: "Rest for a while", nextText: 6 },
            { text: "Explore the surroundings", nextText: 7 },
        ],
    },
    4: {
        text: "You are a valiant knight defending the realm!",
        options: [
            { text: "Continue your journey", nextText: 5 },
            { text: "Return to the forest entrance", nextText: 1 },
            { text: "Rest for a while", nextText: 6 },
            { text: "Explore the surroundings", nextText: 7 },
        ],
    },
    5: {
        text: "You continue your journey through the forest, facing various challenges and making new discoveries.",
        options: [
            { text: "Return to the forest entrance", nextText: 1 },
            { text: "Rest for a while", nextText: 6 },
        ],
    },
    6: {
        text: "You rest beneath a large tree and regain your strength.",
        options: [{ text: "Continue your journey", nextText: 5 }],
    },
    7: {
        text: "You discover a hidden path leading deeper into the forest.",
        options: [{ text: "Continue your journey", nextText: 5 }],
    },
};

function showTextNode(nodeId) {
    const textNode = textNodes[nodeId];

    adventureText.textContent = textNode.text;
    characterButtons.replaceChildren();

    textNode.options.forEach((option) => {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = option.text;
        button.addEventListener("click", () => showTextNode(option.nextText));
        characterButtons.appendChild(button);
    });
}

showTextNode(1);
