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
    var tabuada = [0, 5]
} else if(link == 'normal'){
    var modo = 'm'
    var tabuada = [6, 10]
} else if(link == 'dificil'){
    var modo = 'd'
   link = 'difícil'
   console.log(link)
    var tabuada = [11, 20]
}



avisoh1.innerText = `Você esta na dificuldade ${link} , logo a tabuada irá de ${tabuada[0]} até ${tabuada[1]}`


class tabuadaConstructor{
    constructor(){
        this.tabuadaarray = []
        this.teste = []
    }

    construir(dificuldade){
        if(dificuldade == 'f'){
            for(let i = 1; i <= 5; i++){
                for(let a = 1; a <= 10; a++){
                    this.tabuadaarray.push([i,a])
                }
            }
        }
    }

    random(){
        const indiceAleatorio = Math.floor(Math.random() * this.tabuadaarray.length);
       
        if(this.tabuadaarray.length == 1){
            console.log('A')
            return this.tabuadaarray[0]
        } else {
            
            return this.tabuadaarray[indiceAleatorio]
        }
        
    }

    retiratabuada(numero){
        var guardanumero = this.tabuadaarray
        
        var verif = false
        
        this.tabuadaarray = []

        
        for(var i = 0 ; i <= guardanumero.length - 1; i++){
                
            if(guardanumero[i][0] == numero[0] && guardanumero[i][1] == numero[1]){
                verif = true    
            } else if(verif == false){
                this.tabuadaarray[i] = guardanumero[i]
            } else {
                this.tabuadaarray[i - 1] = guardanumero[i]
            }
        }

       

    }

}

var tabuada = new tabuadaConstructor()

var operacaobtn = document.querySelectorAll('.btn-operacao')

var resposta = document.querySelectorAll('.resposta')


operacaobtn.forEach((e) => {
    e.addEventListener('click', () => {
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

        var numeroAleatorio = Math.floor(Math.random() * 3);
        
        
        
        if(numeroAleatorio == 0){
            resposta[0].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
            resposta[1].innerText = eval(`(${randomArray[0]} + 1) ${op} ${randomArray[1]}`)
            resposta[2].innerText = eval(`(${randomArray[0]} + 2) ${op} ${randomArray[1]}`)
            resposta[3].innerText = eval(`(${randomArray[0]} - 1) ${op} ${randomArray[1]}`)
        } 
        
        if(numeroAleatorio == 1){
            resposta[1].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
            resposta[0].innerText = eval(`(${randomArray[0]} + 1)${op} ${randomArray[1]}`)
            resposta[2].innerText = eval(`(${randomArray[0]} + 2)${op} ${randomArray[1]}`)
            resposta[3].innerText = eval(`(${randomArray[0]} - 1)${op} ${randomArray[1]}`)
        }

        if(numeroAleatorio == 2){
            resposta[2].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
            resposta[1].innerText = eval(`(${randomArray[0]} + 1)${op} ${randomArray[1]}`)
            resposta[3].innerText = eval(`(${randomArray[0]} + 2)${op} ${randomArray[1]}`)
            resposta[0].innerText = eval(`(${randomArray[0]} - 1)${op} ${randomArray[1]}`)
        }

        if(numeroAleatorio == 3){
            resposta[3].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
            resposta[0].innerText = eval(`(${randomArray[0]} + 1)${op} ${randomArray[1]}`)
            resposta[2].innerText = eval(`(${randomArray[0]} + 2)${op} ${randomArray[1]}`)
            resposta[1].innerText = eval(`(${randomArray[0]} - 1)${op} ${randomArray[1]}`)
        }


        })
})





resposta.forEach((e) =>{
    e.addEventListener('click', () => { 

        tabuada.retiratabuada([randomArray[0],randomArray[1]])

        if(tabuada.tabuadaarray.length == 0){
            
            var gameArea = document.querySelector('.game-area')
            
            gameArea.style.display = 'none'

      

        } else {
         
            
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

            var numeroAleatorio = Math.floor(Math.random() * 3);
            
            
            if(numeroAleatorio == 0){
                resposta[0].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
                resposta[1].innerText = eval(`(${randomArray[0]} + 1) ${op} ${randomArray[1]}`)
                resposta[2].innerText = eval(`(${randomArray[0]} + 2) ${op} ${randomArray[1]}`)
                resposta[3].innerText = eval(`(${randomArray[0]} - 1) ${op} ${randomArray[1]}`)
            } 
            
            if(numeroAleatorio == 1){
                resposta[1].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
                resposta[0].innerText = eval(`(${randomArray[0]} + 1)${op} ${randomArray[1]}`)
                resposta[2].innerText = eval(`(${randomArray[0]} + 2)${op} ${randomArray[1]}`)
                resposta[3].innerText = eval(`(${randomArray[0]} - 1)${op} ${randomArray[1]}`)
            }

            if(numeroAleatorio == 2){
                resposta[2].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
                resposta[1].innerText = eval(`(${randomArray[0]} + 1)${op} ${randomArray[1]}`)
                resposta[3].innerText = eval(`(${randomArray[0]} + 2)${op} ${randomArray[1]}`)
                resposta[0].innerText = eval(`(${randomArray[0]} - 1)${op} ${randomArray[1]}`)
            }

            if(numeroAleatorio == 3){
                resposta[3].innerText = eval(`${randomArray[0]} ${op} ${randomArray[1]}`)
                resposta[0].innerText = eval(`(${randomArray[0]} + 1)${op} ${randomArray[1]}`)
                resposta[2].innerText = eval(`(${randomArray[0]} + 2)${op} ${randomArray[1]}`)
                resposta[1].innerText = eval(`(${randomArray[0]} - 1)${op} ${randomArray[1]}`)
            }
            
            }
        
    })    
})


