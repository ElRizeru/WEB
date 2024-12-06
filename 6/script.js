const dialogueText = document.getElementById('dialogue-text');
const pikachuSprite = document.getElementById('pikachu-sprite');
const ivysaurSprite = document.getElementById('ivysaur-sprite');
const explosion = document.querySelector('.explosion');
const pidgeotto = document.querySelector('.pidgeotto');
const pidgeottoSprite = document.getElementById('pidgeotto-sprite');

const dialogue = [
    { character: "pikachu", text: "Івозавр, привіт!!!", sprite: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"},
    { character: "ivysaur", text: "Пікачу...", sprite: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif"},
    { character: "pikachu", text: "Анекдот", sprite: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"},
    { character: "pikachu", text: "Дзвонить ведмідь п'явці:", sprite: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"},
    { character: "ivysaur", text: "О ні...", sprite: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif"},
    { character: "pikachu", text: "- Алло, п'явко, ти де?", sprite: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"},
    { character: "pikachu", text: "- На озері, кр...", sprite: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif"},
    { character: "ivysaur", text: "...", sprite: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ivysaur.gif"},
    { character: "explosion", text: "" }, // ВЗРИВ НАХУЙ
    { character: "pidgeotto", text: "АХАХАХАХ!", sprite: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif"}
];

let currentDialogueIndex = 0;

function createFallingLeaves() {
    const leavesContainer = document.querySelector('.falling-leaves');

    for (let i = 0; i < 10; i++) {
        const leaf = document.createElement('img');
        leaf.src = 'https://s11.gifyu.com/images/SG2zE.gif';
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 5 + 5}s`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leavesContainer.appendChild(leaf);
    }
}

function displayDialogue() {
    const currentLine = dialogue[currentDialogueIndex];

    pikachuSprite.classList.remove("speaking");
    ivysaurSprite.classList.remove("speaking");
    pidgeotto.classList.remove("speaking");
    dialogueText.style.opacity = 0;

    setTimeout(() => {
        dialogueText.textContent = currentLine.text;
        dialogueText.style.opacity = 1;

        if (currentLine.character === "pikachu") {
            pikachuSprite.src = currentLine.sprite;
            pikachuSprite.classList.add("speaking");
        } else if (currentLine.character === "ivysaur") {
            if (currentLine.text === "...") {
                ivysaurSprite.style.transform = "rotateY(180deg)";
            }
            ivysaurSprite.src = currentLine.sprite;
            ivysaurSprite.classList.add("speaking");
        } else if (currentLine.character === "explosion") {
            explosion.classList.remove("hidden");
            pidgeotto.classList.remove("hidden");

            setTimeout(() => {
                explosion.classList.add("hidden");

                currentDialogueIndex++;
                const nextLine = dialogue[currentDialogueIndex];
                pidgeottoSprite.src = nextLine.sprite;
                pidgeotto.classList.add("speaking");
                dialogueText.textContent = nextLine.text;
                dialogueText.style.opacity = 1;

                setTimeout(displayDialogue, 2000);
            }, 1000);

            return;
        }

        currentDialogueIndex++;

        if (currentLine.character !== "explosion") {
            setTimeout(displayDialogue, 2000);
        }
    }, 50);
}

createFallingLeaves()
displayDialogue();