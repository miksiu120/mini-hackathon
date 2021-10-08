const burgerBtn = document.querySelector('.nav__burger')
const mobileNavBtn = document.querySelector('.mobileNav__arrow')
const mobileNav = document.querySelector('.mobileNav')
const navList = document.querySelectorAll('.mobileNav__menu-item')
let titbitBtn = document.querySelector('.tidbits--btn')
let titbit = document.querySelector('.tidbits__tidbit')
const titbits = [
	'Butelki, torebki śniadaniowe bądź torby na zakupy stanowią ok. 7% masy wszystkich śmieci, ale zajmują dużo miejsca, niemal 30% wszystkich odpadów.',
	'Do produkcji tony papieru, trzeba wyciąć ok. 17 drzew.',
	'Plastikowa butelka rozkłada się od 100 do 1000 lat.',
	'Grabba ma najmniej śmieszne żarty na świecie.',
	'Przeciętny Polak produkuje około 350kg śmieci rocznie!',
	'Według danych ONZ co roku przez śmieci w oceanach ginie ponad milion zwierząt.',
	'Wielka Pacyficzna Plama Śmieci ma powierzchnie wynoszącą 1.6 mln km²',
	'45 tysięcy Polaków umiera co roku z powodu złej jakości powietrza',
	'W Polsce marnuje się 9 mln ton jedzenia rocznie.',
	'Foliowa torba rozkłada się około 300 lat',
	'Przez katastrofę klimatyczną Morza Aaralskiego tokszyczny pył z jego dna wykryto nawet na kole podbiegunowym.',
	'Przez ostatnie 40 lat powierzchnia Morza Martwego zmniejszyła się o 30% procent.',
	'Przeciętny samolot pasażerski emituje do atmosfery 8 razy więcej dwutlenku węgla niż pociąg pendolino.',
	'Tworzyw sztucznych nie można poddawac recyklingowi w nieskończoność z powodu obecności niepożądanych składników.',
	'Od pewnego czasu szampony i odżywki do włosów można kupować w formie mydełek, bez plastikowych butelek.',
	'Zamiast kupować owoce w reklamówkach można zaopatrzyć się w wielorazowe, ściągane woreczki z poliestru z recyklingu.',
	'Stworzono aplikacje sprzedawające jedzenie uratowane przed wyrzuceniem w atrakcyjnych cenach.',
	'Zwykła guma do żucia wypluta na trawnik rozkłada się przez 5 lat.',
]
console.log(titbitBtn)
console.log(titbit)
const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min)
}

const changeTidbit = function () {
	titbit.classList.add('goDown-class')

	setTimeout(() => {
		titbit.innerText = titbits[randomNumber(0, titbits.length)]
        titbit.classList.remove('goDown-class')
	}, 390)
 
}

const moveMobileNav = function () {
	mobileNav.classList.toggle('move')
}
const moveBackMobileNav = function () {
	mobileNav.classList.toggle('move')
}

titbitBtn.addEventListener('click', changeTidbit)
burgerBtn.addEventListener('click', moveMobileNav)
mobileNavBtn.addEventListener('click', moveBackMobileNav)
navList.forEach(x => {
	x.addEventListener('click', moveBackMobileNav)
})
