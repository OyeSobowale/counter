// create variables that reference the elements we want to interact with

let countStr = document.getElementById("count")
let increaseBtn = document.getElementById("Increase")
let saveBtn = document.getElementById("Save")
let logStr = document.getElementById("logText")

// create a variable that holds a num value that corresponds to displayed count string
// make sure it starts at 0 like the displayed count string

let count = 0

// create a function that increases the value of our num variable by 1
// and changes the count string to that, as the string can't be operated on directly with math

function Increase() {
    count += 1
    countStr.textContent = count
}

// function that takes the count string and adds it to the log text string

function Save() {
    let log = countStr.textContent
    logStr.textContent += log + " - "
}


// function that resets the value of count and all of the strings to 0 / their default

function Reset() {
    count = 0
    countStr.textContent = count
    logStr.textContent = ""
}