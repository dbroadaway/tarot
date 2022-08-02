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

function changeImage(card, reverse) {
    if (card == undefined) {
        cardImage.src = 'img/blank.jpg';
        cardImage.alt = "Draw A Card";
        cardText.style.display = "none";
    }
    else {
        cardImage.src = card.file;
        cardImage.alt = card.desc;
        console.log(card.meaning);
        cardText.style.display = "block";
        if (reverse) {
            cardImage.style = "transform: scaleY(-1)";
        }
        else {
            cardImage.style = "transform: scaleY(1)"
        }
        document.getElementById("meaning").innerHTML = card.meaning;
        document.getElementById("reverse").innerHTML = card.reverse;
    }
}

function reverseCard() {
    r = randomNumber(5);
    if (r == 4) {
        return true;
    }
    else {
        return false;
    }
}

function drawCard() {
    var reverse = reverseCard();
    console.log(reverse);
    var card = deck[0];
    deck.splice(0, 1);
    changeImage(card, reverse);
}

function sortDeck() {
    loadDeck()
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


