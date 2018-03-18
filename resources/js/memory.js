/************************
 *  Variablen
 */

var rankingdefault = 30;
var ranking = rankingdefault;
var move;
var rate;
var getname;
var getmoves;
var getstars;
var getsec;



var vocArray = [
    ['dog', 'Hund'],
    ['cat', 'Katze'],
    ['snake', 'Schlange'],
    ['lion', 'Löwe'],
    ['mouse', 'Maus'],
    ['bug', 'Käfer'],
    ['ant', 'Ameise'],
    ['horse', 'Pferd'],
    ['cow', 'Kuh'],
    ['sheep', 'Schaf']
];



window.onload = function () {
    highscorewelcome();
    game();
    restart();

    var sArray = singleArray(vocArray);
    var sCards = shuffle(sArray);
    cards(sCards);

} //onload