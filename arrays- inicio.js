let nomes = ["jose","maria","joão"]
nomes.push("bia")
//['jose', 'maria', 'joão', 'bia']
nomes.pop()
//['jose', 'maria', 'joão']

let a = [2, 4,1,8]
a.shift()
//[4, 1, 8]

let b = ["julia", "allan", "taina", "isabelly"]
let remove = a.splice(1,1,"enzo")
//['julia', 'enzo', 'taina', 'isabelly']

let nomes1 = ["jose","joao","maria","bia"]
let r = nomes1.splice(1,1,"teo")
//['jose', 'teo', 'maria', 'bia']
nomes1.push("ana")
let d = nomes1.splice(nomes1.length+1,0,"Ana")
//['jose', 'teo', 'maria', 'bia', 'ana', 'Ana']0: "jose"1: "teo"2: "maria"3: "bia"4: "ana"5: "Ana"

let alunos = [
    {nome: "Zé", idade: 43},
    {nome: "Yuri", idade: 34},
    {nome: "Cesar", idade: 38},
    {nome: "Mario", idade:78}
    ];
    alunos.sort (function (a,b) {
        if(a.nome > b.nome){
            return -1;
        }
        if(a.nome < b.nome){
            return 1;
        }
    })
    