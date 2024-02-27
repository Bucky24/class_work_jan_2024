var words = [
    'parse',
    'stringify',
    'api',
    'function',
    'syntax',
    'object',
];

var wordHolderElem = document.getElementById("word-holder");
var winsHolderElem = document.getElementById("wins-holder");
var lossesHolderElem = document.getElementById("losses-holder");
var timeHolderElem = document.getElementById("time-holder");
var startButtonElem = document.getElementById("start-button");

var myWord;
var dashes;
var wins = 0;
var losses = 0;
var timeLeft;
var interval;

function chooseWord() {
    var randomIndex = Math.floor(Math.random() * words.length);
    myWord = words[randomIndex];
    dashes = "";
    timeLeft = 10;
    timeHolderElem.textContent = timeLeft;
    clearInterval(interval);
    for (var i=0;i<myWord.length;i++) {
        dashes = dashes + "-";
    }

    interval = setInterval(function () {
        timeLeft --;
        timeHolderElem.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(interval);
            losses ++;
            localStorage.setItem("losses", losses);
            init();
        }
    }, 1000);
}

function renderWord() {
    wordHolderElem.textContent = dashes;
}

function processKey(key) {
    for (var i=0;i<myWord.length;i++) {
        if (key === myWord[i]) {
            var dashesArray = dashes.split("");
            dashesArray[i] = myWord[i];
            dashes = dashesArray.join("");
        }
    }

    if (myWord === dashes) {
        wins ++;
        localStorage.setItem("wins", wins);
        init();
    }

    renderWord();
}

document.addEventListener("keyup", function(event) {
    event.preventDefault();

    var key = event.key;

    processKey(key);
});

startButtonElem.addEventListener("click", function() {
    init();
});

function init() {
    chooseWord();
    renderWord();

    var storedWins = localStorage.getItem("wins");
    if (storedWins) {
        wins = storedWins;
    }

    winsHolderElem.textContent = wins;
    
    var storedLosses = localStorage.getItem("losses");
    if (storedLosses) {
        losses = storedLosses;
    }

    lossesHolderElem.textContent = losses;
}