let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let countDash = ""
 
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    countDash = count + " - "
    saveEl.textContent += countDash //.textContent is preferred to .innerText so it's no longer 
    count = 0
    countEl.textContent = count
}

function reset(){
    countDash = ""
    saveEl.textContent = `Previous Entries: ` 
    count = 0
    countEl.textContent = count 
}
