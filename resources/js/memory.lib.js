var reset = function () {
    ranking = rankingdefault;
    var newdeck = document.getElementsByClassName('deck')[0].innerHTML = '';
    var resetmoves = document.getElementsByClassName('moves')[0].innerHTML = '0';
    document.getElementById('one').className = "fa fa-star";
    document.getElementById('two').className = "fa fa-star";
    document.getElementById('three').className = "fa fa-star";
    var clicked = 0;
    var selected = [];
    var matched;
    var wingame = vocArray.length;
    var move = 0;
    var sArray = singleArray(vocArray);

    var sCards = shuffle(sArray);

    cards(sCards);

}

var highscore = function () {
    var move = 15;
    var rate = 3;
    if (localStorage.length !== 0) {
        if (localStorage.getItem("moves") > move && localStorage.getItem("stars") <= rate ) {
            console.log(localStorage.getItem("moves") > move);
            var highname = "tim";
            var highmoves = move;
            var highstars = rate;
            var highsec = 100;
            localStorage.setItem("name", highname);
            localStorage.setItem("stars", "3");
            localStorage.setItem("moves", highmoves);
            localStorage.setItem("seconds", highsec);
            formular();
        } else {
            console.log(localStorage.getItem("moves") > move);
            console.log('pech');
        }
    } else {
        document.getElementById('highscore').innerHTML = '';
        var createhighscore = document.getElementById('highscore');
        createhighscore.innerHTML = '<td class="highname">Thomas</td><td class="highstars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td><td class="highmoves">30</td><td class="highsec">100</td>';
    }
}


var stars = function () {
    var rate = 3;
    if (ranking == 25) {
        document.getElementById('one').className = "fa fa-star-o";
        rate = 2;
    } else if (ranking == 18) {
        document.getElementById('two').className = "fa fa-star-o";
        rate = 1
    } else if (ranking == 10) {
        document.getElementById('three').className = "fa fa-star-o";
        rate = 0
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
    highscore();
    
}

var lost = function () {
    document.getElementById('info').className = 'game showElement';
    document.getElementById('game').className = 'game hiddenElement';
    document.getElementsByTagName('h1')[0].innerHTML = 'Game Over';
    var h2 = document.createElement('h2')
    h2.innerHTML = 'I\'m sorry you lost';
    document.getElementsByTagName('h1')[0].appendChild(h2);
    document.getElementsByTagName('button')[0].innerText = 'Try Again'
    reset();
}

var formular = function () {
    document.getElementsByTagName('form')[0].className = 'showElement';
    document.getElementById('winner').onsubmit = function (event) {
        event.preventDefault();
        document.getElementsByTagName('form').className = 'hiddenElement';
        document.getElementsByTagName('button')[0].className = 'button showElement';
    }
}



var restart = function () {
    document.getElementsByClassName('restart')[0].onclick = function () {
        reset();
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
        cardcontainer = document.createElement('div');
        cardcontainer.className = 'card';
        cardcontainer.dataset.logo = shuffle[i];
        document.getElementsByClassName('deck')[0].appendChild(cardcontainer);
        back = document.createElement('div');
        back.className = 'back';
        /* back.innerHTML = shuffle[i]; */
        cardcontainer.appendChild(back);
        front = document.createElement('div');
        front.className = 'front';
        front.innerHTML = shuffle[i];
        cardcontainer.appendChild(front);


        cardcontainer.onclick = function () {
            if (this.className == 'card') {
                if (clicked < 2) {
                    clicked++;
                    this.className = 'card open flipped';
                    var card = this.dataset.logo;
                    selected.push(card);

                    setTimeout(function () {
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

                    }, 3000);

                }
            }
        } // onclick
    } // for shuffel.lenght
} // cards()