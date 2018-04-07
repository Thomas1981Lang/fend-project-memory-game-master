/*************************************
 * Timer for Highscore
 * 
 *************************************/


let add = function () {
    seconds++;
    $('.seconds').html(seconds);
    timer();
};

let timer = function () {
    t = setTimeout(add, 1000);
};

let cleart = function () {
    clearTimeout(t);
};

/************************************
 * Reset Board
 ***********************************/
let reset = function () {
    cleart();
    seconds = 0;
    $('.seconds').html(seconds);
    ranking = rankingdefault;
    let newdeck = document.getElementsByClassName('deck')[0].innerHTML = '';
    let resetmoves = document.getElementsByClassName('moves')[0].innerHTML = '0';
    document.getElementById('one').className = "fa fa-star";
    document.getElementById('two').className = "fa fa-star";
    document.getElementById('three').className = "fa fa-star";
    let clicked = 0;
    let selected = [];
    let matched;
    let wingame = vocArray.length;
    move = 0;
    rate = 3;
    let sArray = singleArray(vocArray);
    let sCards = shuffle(sArray);
    cards(sCards);

};

/************************************
 * Highscore initialization
 * write LocalStorage Data if !exits
 * or queries the data
 ***********************************/
let highscorewelcome = function () {
    if (localStorage.length !== 0) { // sind daten vorhanden?
        //ja
        let highname = localStorage.getItem("name");
        let highmoves = localStorage.getItem("moves");
        let highstars = localStorage.getItem("stars");
        let highsec = localStorage.getItem("seconds");
        localStorage.setItem("name", highname);
        localStorage.setItem("stars", "3");
        localStorage.setItem("moves", highmoves);
        localStorage.setItem("seconds", highsec);

        document.getElementsByClassName('highname')[0].innerHTML = localStorage.getItem('name');
        document.getElementsByClassName('highmoves')[0].innerHTML = localStorage.getItem('moves');
        document.getElementsByClassName('highsec')[0].innerHTML = localStorage.getItem('seconds');

    } else { // nein
        document.getElementById('highscore').innerHTML = '';
        let createhighscore = document.getElementById('highscore');
        createhighscore.innerHTML = '<td class="highname">Thomas</td><td class="highstars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td><td class="highmoves">25</td><td class="highsec">100</td>';
        localStorage.setItem("name", "Thomas");
        localStorage.setItem("stars", "3");
        localStorage.setItem("moves", "25");
        localStorage.setItem("seconds", "100");
    } // das nächste mal sollten Daten vorhanden sein
    $('.gameinfo').hide();
};

/***********************************
 * Enter Highscore if better save
 * Data to Local Storage
 * if not Game Over with try again  
 ***********************************/

let highscore = function () {

    if (localStorage.getItem("moves") > move && localStorage.getItem("stars") <= rate) {
        win();
        document.getElementById('formular').className = 'showElement';
        document.getElementsByClassName('highname')[0].innerHTML = localStorage.getItem('name');
        document.getElementsByClassName('highmoves')[0].innerHTML = localStorage.getItem('moves');
        document.getElementsByClassName('highsec')[0].innerHTML = localStorage.getItem('seconds');

        getname = document.getElementById('winner');
        getmoves = move;
        getstars = rate;
        getsec = seconds;

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
        };



    } else {
        lost();
        document.getElementsByTagName('h2')[0].innerHTML = 'I\'m sorry you are not good enough <br>&#128532;<br>Try to be better next time<br>&#128170;';
    }
}; // highscore


/*******************************
 * Star Rating
 *******************************/
let stars = function () {
    rate = 3;
    if (ranking == 25) {
        document.getElementById('one').className = "fa fa-star-o";
        rate = 2;
        return rate;
    } else if (ranking == 18) {
        document.getElementById('two').className = "fa fa-star-o";
        rate = 1;
        return rate;
    } else if (ranking == 10) {
        document.getElementById('three').className = "fa fa-star-o";
        rate = 0;
        lost();
        return rate;
    }
    return rate;
};


let game = function () {
    document.getElementsByTagName('button')[0].onclick = function () {
        document.getElementById('game').className = 'game showElement';
        document.getElementById('info').className = 'game hiddenElement';
    };
};

/*******************************
 * Show the Gameboard
 *******************************/

let info = function () {
    $('.gameinfo').show();
    switch (rate) {
        case 3:
        console.log('rate 3',rate);
        $('.info_star')
        .html("<i class='fa fa-star'></i>" + "<i class='fa fa-star' ></i>" + "<i class='fa fa-star'></i>");
        break;
        case 2:
        console.log('rate 2',rate);
        $('.info_star')
        .html("<i class='fa fa-star'></i>" + "<i class='fa fa-star' ></i>" + "<i class='fa fa-star-o'></i>");
        break;
        case 1:
        console.log('rate 1',rate);
        $('.info_star')
        .html("<i class='fa fa-star'></i>" + "<i class='fa fa-star-o' ></i>" + "<i class='fa fa-star-o'></i>");
        break;
        default: 
        console.log('rate default',rate);
        $('.info_star')
            .html("<i class='fa fa-star-o'></i>" + "<i class='fa fa-star-o' ></i>" + "<i class='fa fa-star-o'></i>");
            break;
    }
    $('.info_moves').html(move);
    $('.info_time').html(seconds);
};
/*******************************
 * Show the Winner Message
 ******************************/
let win = function () {
    document.getElementById('info').className = 'game showElement';
    document.getElementById('game').className = 'game hiddenElement';
    document.getElementsByTagName('h1')[0].innerHTML = 'Congratulations';
    document.getElementsByTagName('button')[0].className = 'hiddenElement';
    info();
};

/*******************************
 * Show the Looser Message
 ******************************/
let lost = function () {
    document.getElementById('info').className = 'game showElement';
    document.getElementById('game').className = 'game hiddenElement';
    document.getElementsByTagName('h1')[0].innerHTML = 'Game Over';
    let h2 = document.createElement('h2');
    h2.innerHTML = 'I\'m sorry you lost';
    document.getElementsByTagName('h1')[0].appendChild(h2);
    document.getElementsByTagName('button')[0].innerText = 'Try Again';
    document.getElementsByClassName('highname')[0].innerHTML = localStorage.getItem('name');
    document.getElementsByClassName('highmoves')[0].innerHTML = localStorage.getItem('moves');
    document.getElementsByClassName('highsec')[0].innerHTML = localStorage.getItem('seconds');
    info();
    reset();
};

/*******************************
 * Activates Reset on click
 ******************************/
let restart = function () {
    document.getElementById('restart').onclick = function () {
        reset();
    };
};

/********************************
 * Split multi array into a single Array 
 * @param {array} multiArray 
 ********************************/
let singleArray = function (multiArray) {
    let i, singleArray = [];

    for (i = 0; i < multiArray.length; i++) {
        singleArray = singleArray.concat(multiArray[i]);
    }

    return singleArray;
};

/***********************************
 * Shuffle a normal single Array 
 * @param {array} singleArray
 * @return {array} shuffled Array
 **********************************/
let shuffle = function (singleArray) {
    let currentIndex = singleArray.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = singleArray[currentIndex];
        singleArray[currentIndex] = singleArray[randomIndex];
        singleArray[randomIndex] = temporaryValue;
    }
    return singleArray;
};




/*********************************
 *  
 */
let cards = function (shuffle) {
    let cardcontainer;
    let back;
    let front;
    let clicked = 0;
    let selected = [];
    let matched;
    let wingame = vocArray.length;
    move = 0;
    cleart();
    seconds = 0;





    for (let i = 0; i < shuffle.length; i++) {
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
            if (seconds <= 0) {
                timer();
            } else {
                console.log('erledigt');
            }

            console.log('seconds', seconds);
            if (this.className == 'card') {
                if (clicked < 2) {
                    clicked++;
                    this.className = 'card open flipped';
                    let card = this.dataset.logo;
                    selected.push(card);

                    setTimeout(function () {
                        if (clicked == 2) {
                            for (let i = 0; i < vocArray.length; i++) {
                                if (vocArray[i].indexOf(selected[0]) >= 0 && vocArray[i].indexOf(selected[1]) >= 0) {
                                    matched = true;
                                    document.querySelector("[data-logo='" + selected[0] + "']").className = "card done";
                                    document.querySelector("[data-logo='" + selected[1] + "']").className = "card done";

                                }
                            }
                            if (matched) {
                                matched = false;
                                move++;
                                wingame--;
                                document.getElementsByClassName('moves')[0].innerHTML = move;
                                if (wingame === 0) {

                                    rate = stars();
                                    highscore();


                                }
                                clicked = 0;
                                selected = [];


                                document.getElementsByClassName('moves')[0].innerHTML = move;
                            } else {
                                document.querySelector("[data-logo='" + selected[0] + "']").className = "card";
                                document.querySelector("[data-logo='" + selected[1] + "']").className = "card";
                                clicked = 0;
                                selected = [];
                                move++;
                                ranking--;
                                rate = stars();

                                document.getElementsByClassName('moves')[0].innerHTML = move;
                            }
                        }

                    }, 3000);

                }
            }
        }; // onclick
    } // for shuffel.lenght
}; // cards()