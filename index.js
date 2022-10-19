let count = 0
let saveEl = document.getElementById
("save-el")
let countEl = document.getElementById("count-el")
function increment() {
    count = count + 1
    countEl.innerText = count
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent = saveEl.textContent + countStr
    countEl.textContent = 0
    count = 0
}



