let gols3 = golsF.filter(x=>x>1)
console.log(gols3)
 function filtro(gols2){
    return gols2>1
}
let gols4 = golsF.filter(filtro)
console.log(gols4)

golsF.map(x=>x*2)

golsF.filter(x=>x>1)


golsF.reduce((acc,x)=>acc+x)

const tarefas = [
    {
    'nome' : 'estudar Javascript',
    'duracao' : 150
    },
    {
    'nome' : 'correr',
    'duracao' : 60
    },
    {
    'nome' : 'netflix',
    'duracao' : 120
    }
   ];
let maiorQueUm = tarefas.filter(x=>x.duracao>60)

let maiorQueDois = tarefas.map(x=>x.duracao*2)

let filt = tarefas.filter(x=>x.duracao*2)

let soma = tarefas.reduce((acc,x)=>acc+x.duracao,0)

let q1 = tarefas.forEach(x=>console.log(x))

let y = maiorQueUm.forEach(x =>console.log(x))




