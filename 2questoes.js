let frutas=["uva","maçã","pera","uva"]
let nomes=["Zé", "Téo", "Ana", "Bia"]

let ind = nomes.indexOf("Ana")
console.log(ind)

console.log("-------------------------------------------------------------");

let frut = frutas.join("+")
console.log(frut)

console.log("-------------------------------------------------------------");

let result = frutas.concat(nomes)
console.log(result)

console.log("-------------------------------------------------------------");

let copia = frutas.slice(0,3)
console.log(copia)

function maiorQueDez(element, index, array) {
    return index = 2;
   }
[5,2,8].every(maiorQueDez)

function maiorQueDez( ) {
    return element >= 10;
    }
    undefined
    [12, 5, 8, 130, 44].every(maiorQueDez);
