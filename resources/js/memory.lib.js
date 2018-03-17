var ranking = 30;

var stars = function () {

    if (ranking == 25) {
        document.getElementById('one').className = "fa fa-star-o";
    } else if (ranking == 18) {
        document.getElementById('two').className = "fa fa-star-o";

    } else if (ranking == 10) {
        document.getElementById('three').className = "fa fa-star-o";

    } else if (ranking == 0) {
        lost();
    }
}

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
    var currentIndex = singleArray.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = singleArray[currentIndex];
        singleArray[currentIndex] = singleArray[randomIndex];
        singleArray[randomIndex] = temporaryValue;
    }
    return singleArray;
}

var cards = function (shuffle) {
    var clicked = 0;
    var selected = [];
    var matched;
    var wingame = vocArray.length;

    var move = 0;
    console.log('wingamestart', wingame);
    console.log('ranking', ranking);

    for (var i = 0; i < shuffle.length; i++) {
        back = document.createElement('div');
        back.className = 'card';
        back.dataset.logo = shuffle[i];
        document.getElementsByClassName('deck')[0].appendChild(back);
        front = document.createElement('div');
        front.innerHTML = shuffle[i];
        back.appendChild(front);


        back.onclick = function () {
            if (this.className == 'card') {
                if (clicked < 2) {
                    clicked++;
                    this.className = 'card open flipped';
                    var card = this.dataset.logo;
                    selected.push(card);


                    if (clicked == 2) {
                        for (var i = 0; i < vocArray.length; i++) {
                            if (vocArray[i].indexOf(selected[0]) >= 0 && vocArray[i].indexOf(selected[1]) >= 0) {
                                matched = true;
                                document.querySelector("[data-logo='" + selected[0] + "']").className = "card done";
                                document.querySelector("[data-logo='" + selected[1] + "']").className = "card done";
                                console.log('innen', vocArray[i]);
                                console.log('bedienung', vocArray[i].indexOf(selected[0]));
                            } else
                                console.log('aussen', vocArray[i]);
                            console.log('bedienungelse', vocArray[i].indexOf(selected[0]));
                        }
                        if (matched) {
                            wingame--
                            matched = false;
                            move++;
                            document.getElementsByClassName('moves')[0].innerHTML = move;
                            console.log(move);
                            console.log('wingameaftermatch', wingame);
                            if (wingame == 0) {
                                win();
                            }
                            clicked = 0;
                            selected = [];
                            move++;
                            console.log(move);
                            document.getElementsByClassName('moves')[0].innerHTML = move;

                            ranking--;
                            stars();
                        } else {
                            document.querySelector("[data-logo='" + selected[0] + "']").className = "card";
                            document.querySelector("[data-logo='" + selected[1] + "']").className = "card";
                            clicked = 0;
                            selected = [];
                            move++;
                            ranking--;
                            stars();

                            console.log('ranking', ranking);
                            document.getElementsByClassName('moves')[0].innerHTML = move;
                        }
                    }



                    /* 
                                        var star = document.getElementsByClassName('stars')[0];
                                        switch (ranking) {
                                            case 47:
                                                star.removeChild(star.childNodes[0]);
                                                var li = document.createElement('li');
                                                var eli = document.createElement('i');
                                                eli.className = 'fa fa-star-o';
                                                li.appendChild(eli);
                                                document.getElementsByClassName('stars')[0].appendChild(li);
                                                break;
                                            case 44:
                                                star.removeChild(star.childNodes[0]);
                                                var li = document.createElement('li');
                                                var eli = document.createElement('i');
                                                eli.className = 'fa fa-star-o';
                                                li.appendChild(eli);
                                                document.getElementsByClassName('stars')[0].appendChild(li);
                                                break;
                                            case 41:
                                                star.removeChild(star.childNodes[0]);
                                                var li = document.createElement('li');
                                                var eli = document.createElement('i');
                                                eli.className = 'fa fa-star-o';
                                                li.appendChild(eli);
                                                document.getElementsByClassName('stars')[0].appendChild(li);
                                                break;
                                            case 39:

                                                break;
                                        } //switch
                     */


                    /* for (var i = 0; i < vocArray.length; i++) {
                        console.log(vocArray[i]);
                        if (vocArray[i].indexOf(selected[0]) >= 0 && vocArray[i].indexOf(selected[1]) >= 0) {
                            wingame--
                            console.log('yes');
                            console.log(wingame);
                            if (wingame == 0) {
                                win();
                            }
                        } else {
                            console.log('no');
                            console.log('query1', document.querySelector("[data-logo='" + selected[0] + "']"));
                            console.log('query2', document.querySelector("[data-logo='" + selected[1] + "']"));
                            document.querySelector("[data-logo='" + selected[0] + "']").className = "card";
                            document.querySelector("[data-logo='" + selected[1] + "']").className = "card";
                            clicked = 0;
                            selected = [];
                        } */
                }
            }
        } // onclick
    } // for shuffel.lenght
} // cards()





setTimeout(function () {
    // mach es erst in einer Sekunde...
}, 1000);