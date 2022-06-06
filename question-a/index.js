// Funcão que compara dois números e retorna se o primeiro é maior, menor pou igual ao segundo.

function compare () {
    let text1 = document.querySelector('#number1');
    let text2 = document.querySelector('#number2');
    let res = document.querySelector('#result');

    let n1 = Number(text1.value);
    let n2 = Number(text2.value);

    if (n1 > n2){
       console.log('Maior') 
       document.querySelector('#result').innerHTML = "Maior"
     } 
     else if (n1 < n2){
       console.log('Menor');
       document.querySelector('#result').innerHTML = "Menor"
     } 
     else if (n1 === n2){
       console.log('Igual');
       document.querySelector('#result').innerHTML = "Igual"
     }
}