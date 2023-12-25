let playerCount = null;
let playerIndex = 0;
const playerArray = []


var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck()
{
	let deck = new Array();

	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < values.length; x++)
		{
			let card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}
let deck = getDeck();

function shuffle(deck)
{

	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

function players(number) {
    playerCount = number;
    var pselect = document.getElementById("pselect");
    pselect.style.display = "none";
    var rwindow = document.getElementById("rwindow");
    rwindow.style.display = "grid";

    shuffle(deck);
    for (let i = 0; i < number; i++) {
        playerArray[i] = (i+1);
      }
    var playernumber = document.getElementById("playernumber");
    playernumber.innerText = "Pelaaja " + playerArray[playerIndex];
}

function nextstep() {
    if (deck.length !== 0) {
        deck.shift();
        let card = document.getElementById("card-img");
        card.style.backgroundPosition = "224px -246px";
        var playernumber = document.getElementById("playernumber");
        if (playerArray[playerIndex+1] === undefined) {
            playerIndex = 0;
        } else {
            playerIndex++;
        }
        
        playernumber.innerText = "Pelaaja " + playerArray[playerIndex];
    }
    else {
        alert("Pakka tyhjä");
        shuffle(deck);
    }

}


function showcard() {
    //siirrä backround image vastaamaan deck varin ekaa korttia
}