# The great Memory Game

The game board consists of twenty "cards" arranged in a grid. The deck is made up of ten different animals in two languages - English/German, each card with different vocabulary on one side. The cards are arranged randomly on the grid with the vocabulary face down.

The gameplay rules are simple: flip over two hidden cards at a time to locate the ones that match the right vocabulary!

Each turn:

    - The player flips one card over to reveal its underlying vocabulary.
    - The player then turns over a second card, trying to find the corresponding card with the right translation.
    - If the cards match, both cards stay flipped over.
    - If the cards do not match, both cards are flipped face down.

The game ends once all cards have been correctly matched.

If you like to get into the high score you need to be better than the given high score and only then you win really the game.

## Used technologies

To realize the game HTML5, CSS3 with CSS Flexbox, Vanilla JS and jQuery was used.

The card deck mixing method was implemented using the Fisher-Yates shuffle algorithm provided by Udacity, which can be found on this page https://bost.ocks.org/mike/shuffle/.
