let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCount = 0

function add1Home(){
    homeCount += 1
    homeScore.textContent = homeCount
}

function add2Home(){
    homeCount += 2
    homeScore.textContent = homeCount
}

function add3Home(){
    homeCount += 3
    homeScore.textContent = homeCount
}

let guestCount = 0 

function add1Guest(){
    guestCount += 1
    guestScore.textContent = guestCount
}

function add2Guest(){
    guestCount += 2
    guestScore.textContent = guestCount
}

function add3Guest(){
    guestCount += 3
    guestScore.textContent = guestCount
}

function resetScore(){
    guestCount = 0
    homeCount = 0
    guestScore.textContent = guestCount
    homeScore.textContent = homeCount
}