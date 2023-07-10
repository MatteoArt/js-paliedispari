const inputEl = document.querySelector(".input-parola");
const btnEl = document.querySelector(".btn");

const outEl = document.querySelector(".output");

function palindroma(parola) {
    //variabile che conterrà la stringa letta al contrario
    let reverse = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        reverse += parola[i];
    }
    //ora reverse contiene parola al contrario
    if (reverse === parola) {
        return true;
    } else {
        return false;
    }
}

//console.log(palindroma("dado"));

btnEl.addEventListener("click", function () {
    let inputVal = inputEl.value;

    if (palindroma(inputVal) === true) {
        outEl.innerHTML = `<span class="success">La parola inserita ${inputVal} è palindroma</span>`;
    } else {
        outEl.innerHTML = `<span class="failed">La parola inserita ${inputVal} non è palindroma</span>`;
    }
})