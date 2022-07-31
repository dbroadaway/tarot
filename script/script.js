var deck = [];
var newDeck = [];
//const cardImage = new Image();
var cardImage = document.getElementById("card");
var cardText = document.getElementById("cardText");

function randomNumber(max) {
    var number = Math.random() * 100;

    while (number > max) {
        number = Math.random() * 100;

    }
    number = Math.floor(number);
    return number;
}


function addCard(item) {
    deck.push(item);
}

function loadDeck() {
    deck = [];
    MajorArcana.forEach(addCard);
    Cups.forEach(addCard);
    Pentacles.forEach(addCard);
    Swords.forEach(addCard);
    Wands.forEach(addCard);
}

function changeImage(card) {
    if (card == undefined) {
        cardImage.src = 'img/blank.jpg';
        cardImage.alt = "Draw A Card";
        cardText.style.display = "none";
        console.log("thisthat");
    }
    else {
        cardImage.src = card.file;
        cardImage.alt = card.desc;
        console.log(card.meaning);
        cardText.style.display = "block";
        document.getElementById("meaning").innerHTML = card.meaning;
        document.getElementById("reverse").innerHTML = card.reverse;
    }
}

function drawCard() {
    var card = deck[0];
    deck.splice(0, 1);
    console.log(deck.length);
    console.log(card);
    changeImage(card);
}

function sortDeck() {
    loadDeck();
    changeImage();
}

function shuffleDeck() {
    loadDeck();
    var i;
    var r;
    var newDeck = [];
    for (i = 0; i < 78; i++) {
        r = randomNumber(deck.length);
        newDeck.push(deck[r]);
        deck.splice(r, 1);
    }
    deck = newDeck;
    console.log(deck);
    changeImage();
}

loadDeck();


