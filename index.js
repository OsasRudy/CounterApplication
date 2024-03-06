
let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let count = 0; 


function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

function save() {
    const countStr = count + " - "
    saveEL.textContent += countStr;
    reset();
    // console.log(count);
}

function reset () {
    count = 0; 
    countEl.textContent = count;
}

