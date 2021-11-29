





document.querySelector("button").addEventListener("click", countBudget);

let kostnadLista = [];
let inkomstLista = [];

function countBudget(e) {
    e.preventDefault();

const option = document.querySelector("select");
    console.log(option.value);

if(option.value == "+"){

    const description = document.querySelector(".desc").value;
    const value = document.querySelector(".value").value;
    inkomstLista.push(value);
    const div = document.querySelector(".inkomst-container");

    //console.log(div);
    div.innerHTML += `<li>${description} : ${value}</li>`
}

if(option.value == "-"){

    const description = document.querySelector(".desc").value;
    const value = document.querySelector(".value").value;
    kostnadLista.push(value);
    const kostnadDiv = document.querySelector(".kostnad-container");

    //console.log(div);
    kostnadDiv.innerHTML += `<li>${description} : ${value}</li>`
}
    console.log(inkomstLista, kostnadLista);

var inkomstSumma = 0;
    for(var i = 0; i<inkomstLista.length; i++){
        inkomstSumma += Number(inkomstLista[i]);
    }
    
var kostnadSumma = 0;
    for(var i = 0; i<kostnadLista.length; i++){
        kostnadSumma += Number(kostnadLista[i]);
    }
    console.log(inkomstSumma, kostnadSumma);

/*const vinstDiv = document.querySelector(".vinst");
    vinstDiv.textContent = inkomstSumma - kostnadSumma*/
    document.querySelector(".vinst-summa").textContent = inkomstSumma - kostnadSumma; 
}

