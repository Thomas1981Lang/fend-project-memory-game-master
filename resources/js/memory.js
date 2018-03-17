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



} //onload