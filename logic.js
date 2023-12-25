let playerCount = null;
let playerIndex = 0;
const playerArray = []


var suits = ["spade", "diamond", "club", "heart"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck()
{
	let deck = new Array();

	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < values.length; x++)
		{
			let card = {value: values[x], suit: suits[i]};
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




function isInt(value) {
    const intValue = parseInt(value, 10);
    return !isNaN(intValue) && intValue.toString() === value.toString();
}

function players(number) {
    if (number === 2) {
        //playerCount = document.getElementById("nofplayers").value;
        if (isInt(number)) {
            var pselect = document.getElementById("pselect");
            pselect.style.display = "none";
            var rwindow = document.getElementById("rwindow");
            rwindow.style.display = "grid";
        
            shuffle(deck);
            for (let i = 0; i < number; i++) {
                playerArray[i] = (i+1);
              }
            var playernumber = document.getElementById("playernumber");
            playernumber.innerText = "Pelaaja: " + playerArray[playerIndex];
        } else {
            alert("Syötä numero");
        }
        
    } else {
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
        playernumber.innerText = "Pelaaja: " + playerArray[playerIndex];
    }
    

}

function nextstep() {
    if (deck.length > playerCount) {
        deck.shift();
        let card = document.getElementById("card-img");
        card.style.backgroundPosition = "224px -246px";
        var playernumber = document.getElementById("playernumber");
        if (playerArray[playerIndex+1] === undefined) {
            playerIndex = 0;
            let rwindow = document.getElementById("rwindow");
            rwindow.style.display = "none";
            let endwindow = document.getElementById("endwindow");
            endwindow.style.display = "grid";
        } else {
            playerIndex++;
        }
        
        playernumber.innerText = "Pelaaja: " + playerArray[playerIndex];
    }
    else {
        alert("Pakka liian tyhjä, sekoitetaan");
        shuffle(deck);
    }

}

function nextround() {
    let endwindow = document.getElementById("endwindow");
    endwindow.style.display = "none";
    let rwindow = document.getElementById("rwindow");
    rwindow.style.display = "grid";
}

function showcard() {
    let topCard = deck[0];
    let card = document.getElementById("card-img");
    console.log(topCard);
    let w;
    let h;


    if (topCard.suit === "spade") {
        h = "246px";
    } else if (topCard.suit === "diamond") {
        h = "-246px";
    } else if (topCard.suit === "club") {
        h = "0px";
    } else {
        h = "497px"
    }

    if (topCard.value === "A") {
        w = "0px";
    } else if (topCard.value === "2") {
        w = "-224px";
    } else if (topCard.value === "3") {
        w = "-448px";
    } else if (topCard.value === "4") {
        w = "-672px";
    } else if (topCard.value === "5") {
        w = "-896px";
    } else if (topCard.value === "6") {
        w = "-1120px";
    } else if (topCard.value === "7") {
        w = "-1344px";
    } else if (topCard.value === "8") {
        w = "-1568px";
    } else if (topCard.value === "9") {
        w = "-1792px";
    } else if (topCard.value === "10") {
        w = "-2016px";
    } else if (topCard.value === "J") {
        w = "-2240px";
    } else if (topCard.value === "Q") {
        w = "-2464px";
    } else if (topCard.value === "K") {
        w = "-2688px";
    } else {
        w = "0px";
    }

    card.style.backgroundPosition = " " + w + " " + h;
}