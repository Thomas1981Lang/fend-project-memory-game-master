/************************
 *  Variablen
 */

const rankingdefault = 40;
let ranking = rankingdefault;
let move;
let rate;
let getname;
let getmoves;
let getstars;
let getsec;
let t;
let seconds = 0;


const vocArray = [
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

    let sArray = singleArray(vocArray);
    let sCards = shuffle(sArray);
    cards(sCards);

} //onload