// First of all make clickable button 'start' and add some actions
let $start = document.querySelector('#start')

// 
let $game = document.querySelector('#game')

//
let $time = document.querySelector('#time')

//
let score = 0

// to check game status
var isGameStarted = false

// action to start game when button is clicked
$start.addEventListener('click', startGame) 


$game.addEventListener('click', boxClick)

// actions for start button
function startGame() {
    // when button clicked we remove the button from field
    $start.classList.add('hide')
    // make field white for game
    $game.style.backgroundColor = '#fff'

    // Game started
    isGameStarted = true


    // set up timer
    let interval = setInterval(function () {
        var time = parseFloat($time.textContent)

        if (time <= 0) {
            // end game
            clearInterval(interval)
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)


    // add main game function
    renderBox()
}


// generate random box in the game field 
function renderBox() {
    // to prevent to dublicate containers
    $game.innerHTML = ''
    
    // create box in the game mode
    let smallBox = document.createElement('div')

    // generates random size to box
    let boxSize = getRandom(30, 100)
    console.log(boxSize) // random num from 30 to 100

    // get info about game field 
    let fieldSize = $game.getBoundingClientRect()
    console.log(fieldSize) // DOMRect { x: 810, y: 72.5, width: 300, height: 300, top: 72.5, right: 1110, bottom: 372.5, left: 810 }

    // create max top & max left sizes to generate a new boxes
    let maxTop = fieldSize.height - boxSize
    let maxLeft = fieldSize.width - boxSize

    // make styles for the box
    smallBox.style.height = smallBox.style.width = boxSize + 'px'
    smallBox.style.backgroundColor = 'red'
    smallBox.style.position = 'absolute'
    smallBox.style.cursor = 'pointer'
    smallBox.style.top = getRandom(0, maxTop) + 'px'
    smallBox.style.left = getRandom(0, maxLeft) + 'px'
    // allow understand when clicking in the game field where box
    smallBox.setAttribute('data-box', 'true')

    // insert box to the game section insertAdjasmentElement(position, element)
    // position = 1.beforebigin 2.afterbegin 3.beforeemd 4.afterend 
    $game.insertAdjacentElement("afterbegin", smallBox)
}

function boxClick(event) {
    if (!isGameStarted) {
        return
    }
    
    
    
    // allow understand when clicking in the game field where is a box
    // if clicked on the box score++ and new box
    if (event.target.dataset) {
        score++
        renderBox()
    }
}


// to generate random sizes of boxes and position
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}



// endGame function
function endGame() {
    isGameStarted = false
}