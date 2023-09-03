

class dificuldade{
    constructor(){
        var link = window.location.href
        link = link.slice(link.indexOf('?') + 1)
        
        this.linkCorrigido = link
        this.modo = ''
    }

    setdificuldade(){
        
        var tabuada

        if(this.linkCorrigido == 'times'){
            this.modo = 't'
            var avisoh1 = document.querySelector('.h1aviso')
            avisoh1.innerText = `Você está no modo Endless Times, onde operações aleatórias irão aparecer, e a cada vez que você responde, fica mais difícil, e caso você erre o jogo termina.`

        }

        if(this.linkCorrigido == 'speed'){
            this.modo = 's'
            var avisoh1 = document.querySelector('.h1aviso')
            avisoh1.innerText = `Você está no modo SpeedMath, onde operações aleatórias irão aparecer com um tempo curto para respondê-las, e a cada vez que você responde, fica mais difícil, e caso você erre o jogo termina.`
        }

        
       
    }
}

class tabuadaConstructor{
    constructor(){
        this.tabuadaGlobal = []
        this.guardaqtd = 0
        this.nivelcont = 0
    }

    construirTabuada(dificuldade){
        switch(dificuldade){
            
            case 't':
                this.tabuadaGlobal = []
                this.nivelcont++
                var n1
                var n2
                if(this.nivelcont == 1){
                    n1 = 1
                    n2 = 3
                } else {
                    n1 = n2
                    n2 = n2 + 2
                }    

                for(let i = n1; i <= n2; i++){
                    for(let a = 1; a <= 10; a++){
                        this.tabuadaGlobal.push([i,a])
                    }
                }

            case 's':

        }   
        console.log(this.tabuadaGlobal)
    }

    random(){
        const indiceAleeatorio = Math.floor(Math.random() * this.tabuadaGlobal.length)

        if(this.tabuadaGlobal.length == 1){
            return this.tabuadaGlobal[0]
        } else{
            return this.tabuadaGlobal[indiceAleeatorio]
        }
    }

    
    retiratabuada(numero){
        var guardanumero = this.tabuadaGlobal
        var verif = false
        this.tabuadaGlobal = []

        for(var i = 0; i <= guardanumero.length - 1; i++){

            if(guardanumero[i][0] == numero[0] && guardanumero[i][1] == numero[1]){
                verif = true
            } else if(verif == false){
                this.tabuadaGlobal[i] = guardanumero[i]
            } else{
                this.tabuadaGlobal[i - 1] = guardanumero[i]
            }
        }
    }

}




class jogoSet{
    constructor(){
        this.numeroAleatorio = Math.floor(Math.random() * 3)
        this.randomArray = []
        this.randomOp
    }

    gameset(){
        var fechaviso = document.querySelector('.aviso')
        fechaviso.style.display = 'none'

        var main = document.querySelector('main')
        main.style.display = 'flex'

        tabuadaSeter.construirTabuada(dificuldadeseter.modo)
    }

    perguntaset(){
        var pergunta = document.getElementById('pergunta')

        this.randomArray  = tabuadaSeter.random()

        this.randomOp = this.randomOpF()
        
        try{
            pergunta.innerText = `${this.randomArray[0]} ${this.randomOp} ${this.randomArray[1]}`
        } catch {
           
        }


    }

    randomOpF(){
        var opAleatoria = Math.floor(Math.random()* 5) 

        console.log(opAleatoria)
        switch(opAleatoria){
            case 0:
                console.log('A')
                return '+'
                
            case 1:
                console.log('B')
                return '-'
                
            case 2:
                return '*'
                
            case 3:
                console.log('D')
                return '/'
                
            case 4:
                console.log('E')
                return '**'
                
            default:
                console.log('F')
                return '+'
                
        }
    }


}

class aleatorioBotao{
    constructor(){
        this.resposta = document.querySelectorAll('.resposta')
        
    }

    botaorandom(op){
        var numeroAleatorio = Math.floor(Math.random() * 3)

        if(numeroAleatorio == 0){
            this.resposta[0].innerText = eval(`${jogoSeter.randomArray[0]} ${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[1].innerText = eval(`(${jogoSeter.randomArray[0]} + 1) ${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[2].innerText = eval(`(${jogoSeter.randomArray[0]} + 2) ${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[3].innerText = eval(`(${jogoSeter.randomArray[0]} - 1) ${op} ${jogoSeter.randomArray[1]}`)
        } 
        
        if(numeroAleatorio == 1){
            this.resposta[1].innerText = eval(`${jogoSeter.randomArray[0]} ${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[0].innerText = eval(`(${jogoSeter.randomArray[0]} + 1)${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[2].innerText = eval(`(${jogoSeter.randomArray[0]} + 2)${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[3].innerText = eval(`(${jogoSeter.randomArray[0]} - 1)${op} ${jogoSeter.randomArray[1]}`)
        }

        if(numeroAleatorio == 2){
            this.resposta[2].innerText = eval(`${jogoSeter.randomArray[0]} ${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[1].innerText = eval(`(${jogoSeter.randomArray[0]} + 1)${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[3].innerText = eval(`(${jogoSeter.randomArray[0]} + 2)${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[0].innerText = eval(`(${jogoSeter.randomArray[0]} - 1)${op} ${jogoSeter.randomArray[1]}`)
        }

        if(numeroAleatorio == 3){
            this.resposta[3].innerText = eval(`${jogoSeter.randomArray[0]} ${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[0].innerText = eval(`(${jogoSeter.randomArray[0]} + 1)${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[2].innerText = eval(`(${jogoSeter.randomArray[0]} + 2)${op} ${jogoSeter.randomArray[1]}`)
            this.resposta[1].innerText = eval(`(${jogoSeter.randomArray[0]} - 1)${op} ${jogoSeter.randomArray[1]}`)
        }

    }
}

class contadorResp{
    constructor(){
        this.acertos = 0
    }

    atualiza(resp){
        if(resp == 0){
            this.acertos++
            var msgacerto = document.getElementById('acerto')
            msgacerto.innerText = `Acerto: ${this.acertos}`
            console.log(this.acertos)
        } else{
            window.location.reload()
        }   
    }

}



var contadorSeter = new contadorResp()

var dificuldadeseter = new dificuldade
dificuldadeseter.setdificuldade()

var jogoSeter = new jogoSet()

var tabuadaSeter = new tabuadaConstructor()

var aleatorioBotaoSeter = new aleatorioBotao() 
var cmcbtn = document.getElementById('cmc')
cmcbtn.addEventListener('click', () => {
    jogoSeter.gameset()

    jogoSeter.perguntaset()

    aleatorioBotaoSeter.botaorandom(jogoSeter.randomOp)

    
})

var resposta = document.querySelectorAll('.resposta')

resposta.forEach((e) => {
    e.addEventListener('click', () => {
        tabuadaSeter.retiratabuada([jogoSeter.randomArray[0], jogoSeter.randomArray[1]])

        if(tabuadaSeter.tabuadaGlobal.length == 0){
           

        } else {
            if(e.innerText == eval(`${jogoSeter.randomArray[0]} ${jogoSeter.randomOp} ${jogoSeter.randomArray[1]}`)){
                contadorSeter.atualiza(0)
            } else {
                contadorSeter.atualiza(1)
          
            }

            jogoSeter.perguntaset(jogoSeter.randomOp)

            aleatorioBotaoSeter.botaorandom(jogoSeter.randomOp)

        }

    })
})
