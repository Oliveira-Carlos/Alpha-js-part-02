// Funcão que compara duas strings e retorna se o tamanho da primeira string é maior, menor ou igual à segunda string.

function compare () {
    let text1 = document.querySelector('#text1');
    let text2 = document.querySelector('#text2');
    let res = document.querySelector('#result');

    let str1 = (text1.value);
    let str2 = (text2.value);

    let leng1 = Number(str1.length)
    let leng2 = Number(str2.length)
    console.log(leng1, leng2)


    if (leng1 > leng2){
        console.log('Maior') 
        document.querySelector('#result').innerHTML = "Maior"
      } 
      else if (leng1 < leng2){
        console.log('Menor');
        document.querySelector('#result').innerHTML = "Menor"
      } 
      else if (leng1 === leng2){
        console.log('Igual');
        document.querySelector('#result').innerHTML = "Igual"
      }
}
