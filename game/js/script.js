let squares = document.querySelectorAll('.game__board-square')
let points = document.querySelector('.game__score')
let lives = document.querySelectorAll('.game__heart')
let endScore = document.querySelector('.game__board-loseScreen .score')
let loseScreen = document.querySelector('.game__board-loseScreen')
const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')
const btnPlayAgain = document.querySelector('.again')

let livesLeft = 2
let isAlive = true
let actualBinPosition = 159
let respawnFruitTime = 4000
let speedFallingTime = 1000

let playAgain = () => {
	respawnFruitTime = 4000
	speedFallingTime = 1000
	squares.forEach(x => {
		x.className = 'game__board-square '
	})
	loseScreen.style.display = 'none'
	livesLeft = 2
	lives.forEach(x => {
		x.classList.remove('lostHeart')
	})
	actualBinPosition = 159
	squares[actualBinPosition].classList.add('bin')
	points.textContent = '0'
	isAlive = true
}

let getRandom = (min, max) => {
	return parseInt(Math.random() * (max - min) + min)
}

let checkHearts = x => {
	console.log(livesLeft)
	if (livesLeft != 0) {
		livesLeft--
		lives[x].classList.add('lostHeart')
		return true
	} else {
		return false
	}
}
let addingFruit = () => {
	if (isAlive == true) {
		squares[getRandom(0, 10)].classList.add('fruit', 'fruit' + getRandom(1, 10))
	}
	respawning = setTimeout(addingFruit, respawnFruitTime)
}
function gamePlay() {
	if (isAlive == true) {
		for (let i = squares.length - 1; i >= 0; i--) {
			if (squares[i].classList.contains('fruit')) {
				if (squares[i + 11] === undefined) {
					isAlive = checkHearts(livesLeft)
					squares[i].className = 'game__board-square'
					if (isAlive == false) {
						lives[livesLeft].classList.add('lostHeart')
						break
					}
					continue
				} else if (squares[i + 11].classList.contains('bin')) {
					points.textContent = 10 + parseInt(points.textContent)
					respawnFruitTime *= 0.97
					speedFallingTime *= 0.97
					squares[i].className = 'game__board-square'
					continue
				} else {
					squares[i + 11].classList = squares[i].classList
					squares[i].classList = 'game__board-square'
				}
			}
		}
	} else {
		loseScreen.style.display = 'flex'
		if (points.textContent != 0) endScore.textContent = points.textContent
		else endScore.textContent = '0'
	}
	gaming = setTimeout(gamePlay, speedFallingTime)
}

let respawning = setTimeout(addingFruit, respawnFruitTime)
let gaming = setTimeout(gamePlay, speedFallingTime)

function arrowLeft() {
	if (isAlive == true) {
		if (actualBinPosition != 154) {
			squares[actualBinPosition].classList.remove('bin')
			actualBinPosition--
			squares[actualBinPosition].classList.add('bin')
		}
	}
}

let arrowRight = function () {
	if (isAlive == true) {
		if (actualBinPosition != 164) {
			squares[actualBinPosition].classList.remove('bin')
			actualBinPosition++
			squares[actualBinPosition].classList.add('bin')
		}
	}
}
document.onkeydown = function (event) {
	switch (event.keyCode) {
		case 37:
			arrowLeft()
			break
		case 39:
			arrowRight()
			break
		case 65:
			arrowLeft()
			break
		case 68:
			arrowRight()
			break
	}
}

leftArrow.addEventListener('click', arrowLeft)
rightArrow.addEventListener('click', arrowRight)
btnPlayAgain.addEventListener('click', playAgain)
