// Visualizzare in pagina 5 numeri casuali con alert.
// Dopo che l’utente ha chiuso l’alert fate partire un timer di 30 secondi.
// Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log


let timer = document.getElementById('timer')
let text = document.querySelector('.title')

let clockWord


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let numRandom = getRandomIntInclusive(1, 100)

for (let i = 0; i < 5; i++){
    numRandom = getRandomIntInclusive(1, 100)
    
    alert(numRandom)
    console.log(numRandom)
}


let counter = 30

clockWord = setInterval (function() {
    counter--
    
    timer.innerHTML = counter

    if (counter === 0){
        clearInterval(clockWord)
    }

    console.log( counter)
}, 1000)

