var welcome = function () {
    location.reload();
}

var game = function () {
    document.getElementsByTagName('button')[0].onclick = function () {
        document.getElementById('game').className = 'game showElement';
        document.getElementById('info').className = 'game hiddenElement';
    }
}

var win = function () {
    document.getElementById('info').className = 'game showElement';
    document.getElementById('game').className = 'game hiddenElement';
    document.getElementsByTagName('h1')[0].innerHTML = 'Congratulations';
    document.getElementsByTagName('button')[0].className = 'hiddenElement';
    formular();
}

var lost = function () {
    document.getElementById('info').className = 'game showElement';
    document.getElementById('game').className = 'game hiddenElement';
    document.getElementsByTagName('h1')[0].innerHTML = 'Game Over';
    var h2 = document.createElement('h2')
    h2.innerHTML = 'I\'m sorry you lost';
    document.getElementsByTagName('h1')[0].appendChild(h2);
    document.getElementsByTagName('button')[0].innerText = 'Try Again'
}

var formular = function () {
    document.getElementsByTagName('form')[0].className = 'showElement';
    document.getElementById('winner').onsubmit = function (event) {
        event.preventDefault();
        document.getElementsByTagName('form').className = 'hiddenElement';
        document.getElementsByTagName('button')[0].className = 'button showElement';
    }
}

// TODO: reset
var reset = function () {
    //TODO:
}

var restart = function () {
    document.getElementsByClassName('restart')[0].onclick = function () {
        welcome();
    }
}
var singleArray = function (multiArray) {
    var i, singleArray = [];

    for (i = 0; i < multiArray.length; i++) {
        singleArray = singleArray.concat(multiArray[i]);
    }

    return singleArray;
}


var shuffle = function (singleArray) {
    var currentIndex = singleArray.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = singleArray[currentIndex];
        singleArray[currentIndex] = singleArray[randomIndex];
        singleArray[randomIndex] = temporaryValue;
    }
    return singleArray;
}











setTimeout(function () {
    // mach es erst in einer Sekunde...
}, 1000);