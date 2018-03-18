/************************************
 * Reset Board
 ***********************************/
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
    move = 0;
    rate = 3;

    var sArray = singleArray(vocArray);
    var sCards = shuffle(sArray);
    cards(sCards);

}

/************************************
 * Highscore initialization
 * write LocalStorage Data if !exits
 * or queries the data
 ***********************************/
var highscorewelcome = function () {
    if (localStorage.length !== 0) { // sind daten vorhanden?
        //ja
        var highname = localStorage.getItem("name");
        var highmoves = localStorage.getItem("moves");
        var highstars = localStorage.getItem("stars");
        var highsec = localStorage.getItem("seconds");
        localStorage.setItem("name", highname);
        localStorage.setItem("stars", "3");
        localStorage.setItem("moves", highmoves);
        localStorage.setItem("seconds", highsec);

        document.getElementsByClassName('highname')[0].innerHTML = localStorage.getItem('name');
        document.getElementsByClassName('highmoves')[0].innerHTML = localStorage.getItem('moves');
        document.getElementsByClassName('highsec')[0].innerHTML = localStorage.getItem('seconds');

    } else { // nein
        document.getElementById('highscore').innerHTML = '';
        var createhighscore = document.getElementById('highscore');
        createhighscore.innerHTML = '<td class="highname">Thomas</td><td class="highstars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td><td class="highmoves">20</td><td class="highsec">100</td>';
        localStorage.setItem("name", "Thomas");
        localStorage.setItem("stars", "3");
        localStorage.setItem("moves", "20");
        localStorage.setItem("seconds", "100");
    } // das nächste mal sollten Daten vorhanden sein
}

/***********************************
 * Enter Highscore if better save
 * Data to Local Storage
 * if not Game Over with try again  
 ***********************************/

var highscore = function () {
    console.log('highscore move', move);
    console.log('highscore rate', rate);
    console.log('highscore bedingung', localStorage.getItem("moves") > move && localStorage.getItem("stars") <= rate);
    console.log('highscore localStorage', localStorage);

    if (localStorage.getItem("moves") > move && localStorage.getItem("stars") <= rate) {
        win();
        document.getElementById('formular').className = 'showElement';
        document.getElementsByClassName('highname')[0].innerHTML = localStorage.getItem('name');
        document.getElementsByClassName('highmoves')[0].innerHTML = localStorage.getItem('moves');
        document.getElementsByClassName('highsec')[0].innerHTML = localStorage.getItem('seconds');

        getname = document.getElementById('winner');
        getmoves = move;
        getstars = rate;
        getsec = 100;
       
        document.getElementById('btn').onclick = function (event) {
            event.preventDefault();
            localStorage.setItem('name', getname.value);
            localStorage.setItem('stars', "3");
            localStorage.setItem('moves', getmoves);
            localStorage.setItem('seconds', getsec);

            document.getElementById('formular').className = 'hiddenElement';
            document.getElementsByTagName('button')[0].className = 'start';
            document.getElementsByClassName('highname')[0].innerHTML = localStorage.getItem('name');
            document.getElementsByClassName('highmoves')[0].innerHTML = localStorage.getItem('moves');
            document.getElementsByClassName('highsec')[0].innerHTML = localStorage.getItem('seconds');
            reset();
        }



    } else {
        lost();
        document.getElementsByTagName('h2')[0].innerHTML = 'I\'m sorry you are not good enough <br>&#128532;<br>Try to be better next time<br>&#128170;'
    }
} // highscore


/*******************************
 * Star Rating
 *******************************/
var stars = function () {
    rate = 3;
    if (ranking == 25) {
        document.getElementById('one').className = "fa fa-star-o";
        rate = 2;
        return rate;
    } else if (ranking == 18) {
        document.getElementById('two').className = "fa fa-star-o";
        rate = 1
        return rate;
    } else if (ranking == 10) {
        document.getElementById('three').className = "fa fa-star-o";
        rate = 0
        return rate;
    } else if (ranking == 0) {
        lost();
    }
    return rate;
}


/* 
var welcome = function () {
    location.reload();
}
 */

/*******************************
 * Show the Gameboard
 *******************************/
var game = function () {
    document.getElementsByTagName('button')[0].onclick = function () {
        document.getElementById('game').className = 'game showElement';
        document.getElementById('info').className = 'game hiddenElement';
    }
}

/*******************************
 * Show the Winner Message
 ******************************/
var win = function () {
    document.getElementById('info').className = 'game showElement';
    document.getElementById('game').className = 'game hiddenElement';
    document.getElementsByTagName('h1')[0].innerHTML = 'Congratulations';
    document.getElementsByTagName('button')[0].className = 'hiddenElement';
}

/*******************************
 * Show the Looser Message
 ******************************/
var lost = function () {
    document.getElementById('info').className = 'game showElement';
    document.getElementById('game').className = 'game hiddenElement';
    document.getElementsByTagName('h1')[0].innerHTML = 'Game Over';
    var h2 = document.createElement('h2')
    h2.innerHTML = 'I\'m sorry you lost';
    document.getElementsByTagName('h1')[0].appendChild(h2);
    document.getElementsByTagName('button')[0].innerText = 'Try Again';
    document.getElementsByClassName('highname')[0].innerHTML = localStorage.getItem('name');
    document.getElementsByClassName('highmoves')[0].innerHTML = localStorage.getItem('moves');
    document.getElementsByClassName('highsec')[0].innerHTML = localStorage.getItem('seconds');
    reset();
}

/*******************************
 * Activates Reset on click
 ******************************/
var restart = function () {
    document.getElementById('restart').onclick = function () {
        reset();
    }
}

/********************************
 * Split multi array into a single Array 
 * @param {array} multiArray 
 ********************************/
var singleArray = function (multiArray) {
    var i, singleArray = [];

    for (i = 0; i < multiArray.length; i++) {
        singleArray = singleArray.concat(multiArray[i]);
    }

    return singleArray;
}

/***********************************
 * Shuffle a normal single Array 
 * @param {array} singleArray
 * @return {array} shuffled Array
 **********************************/
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


/*********************************
 *  
 */
var cards = function (shuffle) {
    var clicked = 0;
    var selected = [];
    var matched;
    var wingame = vocArray.length;
    move = 0;

    console.log('beginn cards move', move);
    console.log('beginn cards rate', rate);
    console.log('beginn cards bedingung', localStorage.getItem("moves") > move && localStorage.getItem("stars") <= rate);
    console.log('beginn cards localStorage', localStorage);


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


                                    console.log('move', move);
                                    console.log('rate', rate);
                                    console.log('bedingung', localStorage.getItem("moves") > move && localStorage.getItem("stars") <= rate);
                                    console.log('localStorage', localStorage);
                                }
                            }
                            if (matched) {
                                matched = false;
                                move++;
                                wingame--;
                                document.getElementsByClassName('moves')[0].innerHTML = move;
                                if (wingame == 0) {
                                    rate = stars();
                                    highscore();

                                    console.log('wingame 0 move', move);
                                    console.log('wingame 0 rate', rate);
                                    console.log('wingame 0 bedingung', localStorage.getItem("moves") > move && localStorage.getItem("stars") <= rate);
                                    console.log('wingame 0 localStorage', localStorage);
                                    


                                }
                                clicked = 0;
                                selected = [];

                                console.log('card matched move', move);
                                console.log('card matched rate', rate);
                                console.log('card matched bedingung', localStorage.getItem("moves") > move && localStorage.getItem("stars") <= rate);
                                console.log('card matched localStorage', localStorage);


                                document.getElementsByClassName('moves')[0].innerHTML = move;
                            } else {
                                document.querySelector("[data-logo='" + selected[0] + "']").className = "card";
                                document.querySelector("[data-logo='" + selected[1] + "']").className = "card";
                                clicked = 0;
                                selected = [];
                                move++;
                                ranking--;
                                rate = stars();


                                console.log('card wrong move', move);
                                console.log('card wrong rate', rate);
                                console.log('card wrong bedingung', localStorage.getItem("moves") > move && localStorage.getItem("stars") <= rate);
                                console.log('card wrong localStorage', localStorage);


                                document.getElementsByClassName('moves')[0].innerHTML = move;
                            }
                        }

                    }, 1000);

                }
            }
        } // onclick
    } // for shuffel.lenght
} // cards()