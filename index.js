// First of all make clickable button 'start' and add some actions
let $start = document.querySelector('#start')

// 
let $game = document.querySelector('#game')
let score = 0
// action to start game when button is clicked
$start.addEventListener('click', startGame) 


$game.addEventListener('click', boxClick)

// actions for start button
function startGame() {
    // when button clicked we remove the button from field
    $start.classList.add('hide')
    // make field white for game
    $game.style.backgroundColor = '#fff'

    // add main game function
    renderBox()
}


// generate random box in the game field 
function renderBox() {
    
    // create box in the game mode
    let smallBox = document.createElement('div')
    // make styles for the box
    smallBox.style.height = smallBox.style.width = '30px'
    smallBox.style.backgroundColor = 'red'
    smallBox.style.position = 'absolute'
    smallBox.style.cursor = 'pointer'
    smallBox.style.top = '50px'
    smallBox.style.left = '75px'
    // allow understand when clicking in the game field where box
    smallBox.setAttribute('data-box', 'true')

    // insert box to the game section insertAdjasmentElement(position, element)
    // position = 1.beforebigin 2.afterbegin 3.beforeemd 4.afterend 
    $game.insertAdjacentElement("afterbegin", smallBox)
}

function boxClick(event) {
    // 38 line 
    // if clicked on the box score++ and new box
    if (event.target.dataset) {
        score++
        renderBox()
    }
}


