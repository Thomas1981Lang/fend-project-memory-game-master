var welcome = function () {
    location.reload();
}

var win = function () {
    document.getElementsByTagName('h1')[0].innerHTML = 'Congratulations';
    document.getElementsByTagName('button')[0].className = 'hiddenElement';
    formular();
}

var lost = function () {
    document.getElementsByTagName('h1')[0].innerHTML = 'Game Over';
    var h2 = document.createElement('h2')
    h2.innerHTML = 'I\'m sorry you lost';
    document.getElementsByTagName('h1')[0].appendChild(h2);
    document.getElementsByTagName('button')[0].innerText = 'Try Again'
}

var formular = function () {
    document.getElementsByTagName('form')[0].className = 'showElement';
    document.getElementById('winner').submit = function (event) {
        event.preventDefault();
        document.getElementsByTagName('form').className = 'hiddenElement';
        document.getElementsByTagName('button')[0].className = 'button showElement';
    }
}

// TODO: reset
var reset = function () {

}













setTimeout(function () {
    // mach es erst in einer Sekunde...
}, 1000);