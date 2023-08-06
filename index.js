let wordSection = document.querySelector('.text')
let keyboardSection = document.querySelector('.keyboard')
let figure = document.querySelector('.figure')

var herfler = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
]

let human = ['head', 'body', 'rightarm', 'leftarm', 'leftleg', 'rightleg']
let randomWord = ""

var createKeyboard = () => {
    keyboardSection.innerHTML = ""
    for (let i = 0; i < herfler.length; i++) {
        let square = document.createElement('div')
        square.classList.add('lettersquare')
        square.textContent = herfler[i]
        keyboardSection.appendChild(square)
    }
}

let createWord = () => {
    wordSection.innerHTML = ""
    randomWord = selectWord()
    for (let z = 0; z < 8; z++) {
        let square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('data-value', randomWord[z])
        wordSection.appendChild(square)
    }
}

let selectWord = () => {
    var word = [
        "BUZZWORD",
        "BACKWORD",
        "WHIPCORD",
        "KEYWORDS",
        "CHECKBOX",
        "GRIZZLED",
        "DIZZYING",
        "KNOCKOFF",
        "EQUIPPED",
        "KICKSHAW",
        "FOCALIZE",
        "PACKSACK",
        "LUNCHBOX",
        "COPYBOOK",
        "PAYBACKS",
        "WORKFLOW",
        "JAMMABLE",
        "JOVIALTY",
        "MAXIMUMS",
        "CREDENZA",
        "CYCLICLY",
        "RUCKSACK",
        "OVERJOYS"
    ]
    let randomWord = Math.floor(Math.random() * word.length)
    console.log(word[randomWord]);
    return keyWord = Array.from(word[randomWord])
}

let generateBody = (value) => {
    let bodyPart = document.createElement('div')
    bodyPart.classList.add(human[value])
    figure.appendChild(bodyPart)
}

let startGame = () => {
    createKeyboard()
    createWord()
    let buttons = document.querySelectorAll('.lettersquare')
    let squares = document.querySelectorAll('.square')
    let figureSection = document.querySelectorAll('.figure div')
    let wrongCount = 0
    let trueCount = 0
    figureSection.forEach(item => {
        if (!item.getAttribute('data-value')) item.remove()
    })
    buttons.forEach(item => {
        item.addEventListener('click', (e) => {
            let chosenLetter = e.target.textContent
            if (randomWord.includes(chosenLetter)) {
                e.target.classList.add('correct')
                squares.forEach(item => {
                    if (item.getAttribute('data-value') === chosenLetter) {
                        item.textContent = item.getAttribute('data-value')
                        item.classList.add('show')
                        trueCount++
                    }
                })
                if (trueCount === 8) {
                    buttons.forEach(item => {
                        item.classList.add('close')
                    })
                    squares.forEach(item => {
                        item.style.background = 'green'
                    })
                    setTimeout(() => {
                        startGame()
                    }, 3000)
                }
            }
            else {
                e.target.classList.add('wrong')
                wrongCount++
                generateBody(wrongCount - 1)
                if (wrongCount === 6) {
                    buttons.forEach(item => {
                        item.classList.add('close')
                    })
                    squares.forEach(item => {
                        item.classList.add('show')
                        item.style.background = 'red'
                    })
                    setTimeout(() => {
                        startGame()
                    }, 3000)
                }
            }
        })
    })
}

startGame()