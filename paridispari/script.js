const selectEl = document.querySelector(".user-select");
const inputEl = document.getElementById("par-disp");
const btnEl = document.querySelector(".btn");

const risEl = document.getElementById("ris");
const outEl = document.querySelector(".output");

//genera un numero tra 1 e 5
function generaNum(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}
//funzione che stabilisce se la somma dei suoi argomenti è pari o dispari
function parDir(num1, num2) {
    let sum = num1 + num2;
    let ris;
    if (sum % 2 === 0) {
        ris = "pari";
    } else if (sum % 2 === 1) {
        ris = "dispari";
    }
    return ris;
}
//console.log(parDir(0,100));
//console.log(generaNum(1,5));

btnEl.addEventListener("click", function () {
    //raccolgo input utente
    let selectVal = selectEl.value;
    let userNumber = parseInt(inputEl.value); //numero scelto dall'utente

    //console.log(selectVal,userNumber);
    //numero scelto dal computer
    let cpuNumber = generaNum(1,5);
    let sum = userNumber + cpuNumber;

    risEl.innerHTML = `Hai scelto: ${userNumber}<br>La cpu ha scelto: ${cpuNumber}<br>
    La somma è ${sum}`;

    let result = parDir(userNumber,cpuNumber);

    if (selectVal === result) {
        outEl.innerHTML = `<span class="success">Hai scelto ${selectVal}, la somma è ${result},
        hai vinto!</span>`;
    } else {
        outEl.innerHTML = `<span class="fail">Hai scelto ${selectVal}, la somma è ${result},
        hai perso.</span>`;
    }
})