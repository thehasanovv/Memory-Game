document.addEventListener("DOMContentLoaded", () => {



    const cardArray = [
        {
            name: "cheeseburger",
            img: "./asserts/css/images/cheeseburger.png"
        },
        {
            name: "cheeseburger",
            img: "./asserts/css/images/cheeseburger.png"
        },
        {
            name: "fries",
            img: "./asserts/css/images/fries.png"
        },
        {
            name: "fries",
            img: "./asserts/css/images/fries.png"
        },
        {
            name: "hotdog",
            img: "./asserts/css/images/hotdog.png"
        },
        {
            name: "hotdog",
            img: "./asserts/css/images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "./asserts/css/images/ice-cream.png"
        },
        {
            name: "ice-cream",
            img: "./asserts/css/images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "./asserts/css/images/milkshake.png"
        },
        {
            name: "milkshake",
            img: "./asserts/css/images/milkshake.png"
        },
        {
            name: "pizza",
            img: "./asserts/css/images/pizza.png"
        },
        {
            name: "pizza",
            img: "./asserts/css/images/pizza.png"
        }
    ];

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardChoosen = [];
    var cardsChoosenId = [];
    var cardsWon = [];


    function createBoard() {
        cardArray.forEach(function (value, index) {
            var card = document.createElement('img');
            card.setAttribute('src', './asserts/css/images/blank.png');
            card.setAttribute('data-id', index);
            card.addEventListener('click', flipcard);
            grid.append(card);
        })
    }
    createBoard()

    // Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChoosenId[0];
        const optionTwoId = cardsChoosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', './asserts/css/images/blank.png')
            cards[optionTwoId].setAttribute('src', './asserts/css/images/blank.png')
            alert('You have clicked the same image!')
        } else if (cardChoosen[0] === cardChoosen[1]) {
            alert('You found a matche')
            cards[optionOneId].setAttribute('src', './asserts/css/images/white.png')
            cards[optionTwoId].setAttribute('src', './asserts/css/images/white.png')
            cardsWon.push(cardChoosen)
        } else {
            cards[optionOneId].setAttribute('src', './asserts/css/images/blank.png');
            cards[optionTwoId].setAttribute('src', './asserts/css/images/blank.png')
            alert('Sorry, try again')
        }
        cardChoosen = []
        cardsChoosenId = []
        resultDisplay.textContent = " " + cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations!'
        }
    }

    // Flip your card

    function flipcard() {
        var cardId = this.getAttribute('data-id');
        cardChoosen.push(cardArray[cardId].name)
        cardsChoosenId.push(cardId)

        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChoosenId.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
})