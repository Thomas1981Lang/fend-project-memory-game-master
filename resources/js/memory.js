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

    game();
    restart();

    var sArray = singleArray(vocArray);

    var sCards = shuffle(sArray);

    cards(sCards);

    

 var test = function() {
    console.log(vocArray[4]); 
    vocArray[4].sort();
    console.log(vocArray[4]); 

 }

test();
 
} //onload