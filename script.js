const words = [
    "Accurate", "Address", "Afford", "Alert", "Analyze", "Ancestor", "Annual", "Apparent", "Appropriate", "Arena",
    "Arrest", "Ascend", "Assist", "Attempt", "Attentive", "Attractive", "Awkward", "Baggage", "Basic", "Benefit",
    "Blend", "Blossom", "Burrow", "Calculate", "Capable", "Captivity", "Carefree", "Century", "Chamber", "Circular",
    "Coax", "Column", "Communicate", "Competition", "Complete", "Concentrate", "Concern", "Conclude", "Confuse",
    "Congratulate", "Considerable", "Content", "Contribute", "Crafty", "Create", "Demonstrate", "Descend", "Desire",
    "Destructive", "Develop", "Disaster", "Disclose", "Distract", "Distress", "Dusk", "Eager", "Ease", "Entertain",
    "Entire", "Entrance", "Envy", "Essential", "Extraordinary", "Flexible", "Focus", "Fragile", "Frantic", "Frequent",
    "Frontier", "Furious", "Generosity", "Hail", "Hardship", "Heroic", "Host", "Humble", "Impact", "Increase",
    "Indicate", "Inspire", "Instant", "Invisible", "Jagged", "Lack", "Limp", "Limb", "Manufacturer", "Master",
    "Mature", "Meadow", "Mistrust", "Mock", "Modest", "Noble", "Orchard", "Outstanding", "Peculiar", "Peer", "Permit",
    "Plead", "Plentiful", "Pointless", "Portion", "Practice", "Precious", "Prefer", "Prepare", "Proceed", "Queasy",
    "Recent", "Recognize", "Reduce", "Release", "Resist", "Response", "Reveal", "Routine", "Severe", "Shabby", "Shallow",
    "Shore", "Source", "Sole", "Sturdy", "Surface", "Survive", "Terror", "Threat", "Tidy", "Tour", "Tradition", "Tragic",
    "Typical", "Vacant"
];

let currentIndex = 0;

const wordDisplay = document.getElementById("word-display");
const speakButton = document.getElementById("speak-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateWordDisplay() {
    wordDisplay.textContent = words[currentIndex];
}

function showPrevWord() {
    if (currentIndex > 0) {
        currentIndex--;
        updateWordDisplay();
        speakWord();
    }
}

function showNextWord() {
    if (currentIndex < words.length - 1) {
        currentIndex++;
        updateWordDisplay();
        speakWord();
    }
}

function speakWord() {
    const word = words[currentIndex];
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
}

prevButton.addEventListener("click", showPrevWord);
nextButton.addEventListener("click", showNextWord);
speakButton.addEventListener("click", speakWord);

updateWordDisplay();
