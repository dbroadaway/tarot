var deck = [];
var newDeck = [];
var cardImage = new Image();

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

function addDrawButton () {
    document.getElementById("card").innerHTML += '<figcaption>Draw A Card</figcaption>'
}

function sortDeck() {
    deck = [];
    MajorArcana.forEach(addCard);
    Cups.forEach(addCard);
    Pentacles.forEach(addCard);
    Swords.forEach(addCard);
    Wands.forEach(addCard);
    document.getElementById("card").innerHTML = '<img src="img/blank.jpg " alt="Draw a Card" />'
  
}

function changeImage(card) {
    document.getElementById("card").src=card.file;
    document.getElementById("card").alt=card.desc;
    document.getElementById("meaning").innerHTML=card.meaning;
    document.getElementById("reverse").innerHTML=card.reverse;
}


function drawCard() {
    if (deck.length != 0) {
        var card = deck[0];
        deck.splice(0, 1);
        console.log(deck.length);
        console.log(card);
        changeImage(card);
       
    }
       
}


function shuffleDeck() {
    sortDeck();
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
    document.getElementById("card").innerHTML = '<img src="img/blank.jpg " /><figcaption>Draw A Card</figcaption>'
}
function notify(i) {
    console.log("loaded " + deck[i].name)
}
function preloadDeck() {
    for (i = 0; i < deck.length; i++) {
        cardImage.src = deck[i].file;
        cardImage.onload = notify(i);
    }

}

sortDeck();
preloadDeck();

