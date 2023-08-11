var avisoh1 = document.querySelector('.h1aviso')
var link = window.location.href
link = link.slice(link.indexOf('?') + 1)
var op = '*'
var acerto = 0
var erro = 0
var randomArray



if(link == 'facil'){
    var modo = 'f'
    link = link.replace('a', 'á')
    var tabuada = [0, 10]
} else if(link == 'normal'){
    var modo = 'm'
    var tabuada = [11, 20]
} else if(link == 'dificil'){
    var modo = 'd'
   link = 'difícil'
   console.log(link)
    var tabuada = [21, 30]
}



avisoh1.innerText = `Você esta na dificuldade ${link} , logo a tabuada irá de ${tabuada[0]} até ${tabuada[1]}`


class tabuadaConstructor{
    constructor(){
        this.tabuadaarray = []
    }

    construir(dificuldade){
        if(dificuldade == 'f'){
            for(let i = 1; i <= 10; i++){
                for(let a = 1; a <= 10; a++){
                    this.tabuadaarray.push([i,a])
                }
            }
        }
    }

    random(){
        const indiceAleatorio = Math.floor(Math.random() * this.tabuadaarray.length);
        return this.tabuadaarray[indiceAleatorio];
    }

    retiratabuada(){
    }

}

var tabuada = new tabuadaConstructor()

var operacaobtn = document.querySelectorAll('.btn-operacao')

var resposta = document.querySelectorAll('.resposta')

operacaobtn.forEach((e) => {
    e.addEventListener('click', () => {
        console.log(e.value)
        switch(e.value){
            case 'soma':  op = '+' 
            break

            case 'menos':  op = '-' 
            break

            case 'mult':  op = '*' 
            break

            case 'div':  op = '/' 
            break

            case 'pot':  op = '**' 
            break

        }

       

        tabuada.construir('f')

        var secaviso = document.querySelector('.aviso')
        secaviso.style.display = 'none'
        var main = document.querySelector('main')
        main.style.display = 'flex'   

        var pergunta = document.getElementById('pergunta')

        randomArray = tabuada.random()

        pergunta.innerText = `${randomArray[0]} ${op} ${randomArray[1]}`

        var numeroAleatorio = Math.floor(Math.random() * 2);

        if(numeroAleatorio == 0){
            resposta[0].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
            resposta[1].innerText = eval(`(${randomArray[0]} + 1) ${op} ${randomArray[1]}`)
        } else {
            resposta[1].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
            resposta[0].innerText = eval(`(${randomArray[0]} + 1)${op} ${randomArray[1]}`)
        }

        })
})





resposta.forEach((e) =>{
    e.addEventListener('click', () => { 

        var pergunta = document.getElementById('pergunta')

        if(e.innerText == eval(`${randomArray[0]} ${op} ${randomArray[1]}`)){

            var msgacerto = document.getElementById('acerto')
            acerto++
            msgacerto.innerText = `Acerto: ${acerto}`
            
        } else {
            var msgerro = document.getElementById('erro')
            erro++
            msgerro.innerText = `Erro: ${erro}`
        }
       
        randomArray = tabuada.random()
        
        resposta = document.querySelectorAll('.resposta')
        
        pergunta.innerText = `${randomArray[0]} ${op} ${randomArray[1]}`
        
        numeroAleatorio = Math.floor(Math.random() * 2)

        if(numeroAleatorio == 0){
            resposta[0].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
            resposta[1].innerText = eval(`(${randomArray[0]} + 1) ${op} ${randomArray[1]}`)
        } else {
            resposta[1].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
            resposta[0].innerText = eval(`(${randomArray[0]} + 1)${op} ${randomArray[1]}`)
        }

        
    })    
})


