//document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
 

function increment() {
    count += 1
    countEl.textContent = count
    //countEl.innerText = count
}

function save() {
    console.log(count)
}

function save() {
    let countDash = count + " - "
    //saveEl.innerText += countDash 
    saveEl.textContent += countDash //.textContent is preferred to .innerText so it's no longer saveEl.innetText because innerText doesn't show hidden contents, only human readable characters
    count = 0
    countEl.textContent = count
    //countEl.textContent = 0
    //count = 0
}


// console.log("button was clicked")
// console.log(count);