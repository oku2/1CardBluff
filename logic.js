let playerCount = null;


function players(number) {
    playerCount = number;
    var pselect = document.getElementById("pselect");
    pselect.style.display = "none";
    var rwindow = document.getElementById("rwindow");
    rwindow.style.display = "grid";
    var playernumber = document.getElementById("playernumber");
    playernumber.innerText = "Pelaaja " + number;
}