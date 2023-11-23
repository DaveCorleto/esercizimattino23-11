// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore. 

// const firstNumber = parseInt(prompt("Inserisci il primo numero"));

// const secondNumber = parseInt(prompt("Inserisci il secondo numero"));

// let numberWinner;

// if (firstNumber > secondNumber) {
//     numberWinner = firstNumber;
// } else if (secondNumber > firstNumber) {
//     numberWinner = secondNumber;
// } else {
//     numberWinner = "Pari!";
// }

// console.log(numberWinner);


// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga. 

// const firstWord = prompt('Inserisci la prima parola');
// const secondWord = prompt('Inserisci la seconda parola');

// let wordWinner;
// let wordLoser;

// if (firstWord.length > secondWord.length) {
//     wordWinner = firstWord;
//     wordLoser = secondWord;
// } else if (secondWord.length > firstWord.length) {
//     wordWinner = secondWord;
//     wordLoser = firstWord;
// } else {
//     alert("Le parole sono lunghe uguali")
// }

// console.log(wordWinner + wordLoser);



// let somma = 0;

// for (let i = 1; i <= 5; i++) {
//   const numero = parseInt(prompt(`Inserisci il ${i}° numero`));
//   somma += numero;
// }

// console.log(somma)


// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// Array vuoto 

let list = [];

// chiedi per 6 volte all'utente di inserire un numero

for (let i = 1; i <= 6; i++) {
  const newitem = parseInt(prompt(`Inserisci il ${i}° numero`));

  if (newitem % 2 !== 0 ){
    list.push(newitem);
  }
}

console.log(list)


