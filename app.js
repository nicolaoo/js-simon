// Visualizzare in pagina 5 numeri casuali con alert.
// Dopo che l’utente ha chiuso l’alert fate partire un timer di 30 secondi.
// Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
// e quali numeri sono stati individuati tramite console.log


let timer = document.getElementById('timer')
let text = document.querySelector('.title')


const randomNumber = numeriCasuali (5, 1, 100)
let numUser = []
let winnerNumbers = []


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function numeriCasuali(length, min, max){
    let numbersRandom = []

    while(numbersRandom.length < length){
        const num = getRandomIntInclusive(min, max)

        if(!numbersRandom.includes(num)){
            numbersRandom.push(num)
        } 

    }

    return numbersRandom
}

alert('ricorda questi numeri:'+ ' ' + randomNumber)

setTimeout( function() {
    while(numUser.length < randomNumber.length){

        num = parseInt(prompt('inserisci i numeri che ti sei ricordato'))

        if ( randomNumber.includes(num) && (!numUser.includes(num))){
            console.log('hai vinto')

            winnerNumbers.push(num)
        }

        numUser.push(num)
    }

console.log(randomNumber, numUser, num)
console.log(winnerNumbers, 'hai indovinato:'+ ' ' + winnerNumbers.length +' '+ 'cioè il numero' +' '+ winnerNumbers)



}, 3*1000)





// for (let i = 0; i < 5; i++){
//         numUser = parseInt(prompt('inserisci i numeri'))
        
//         arrayUser.push(numUser)
        
        
//         // } else{
//         //     console.log('hai perso')
//         // }
//        console.log()
//     }
 
//     if (numRandom.includes(arrayUser)){
//             console.log(numUser, arrayUser[i],'hai vinto')
//         }
        
        
        
        
// clockWord = setInterval (function() {
//     counter--
    
//     timer.innerHTML = counter
    
//     if (counter === 0){
//             clearInterval(clockWord)
//         }
    
//         console.log( counter)
// }, 1000)
