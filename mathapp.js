//Variaveis
var op

class dificuldade{
    constructor(){
        var link = window.location.href
        link = link.slice(link.indexOf('?') + 1)
        
        this.linkCorrigido = link
        this.modo = ''
    }

    setdificuldade(){
        
        var tabuada

        if(this.linkCorrigido == 'facil'){
            this.modo = 'f'
            this.linkCorrigido = this.linkCorrigido.replace('a', 'á')
            tabuada = [0, 5]
        } else if(this.linkCorrigido == 'normal'){
            this.modo = 'm'
            tabuada = [6, 10]
        } else if(this.linkCorrigido == 'dificil'){
            this.modo = 'd'
            this.linkCorrigido = 'difícil'
            tabuada = [11, 15]
        } else if(this.linkCorrigido == 'custom'){
            var divcustom = document.getElementById('divcustom')
            var divaviso = document.querySelector('.divaviso')
            divaviso.style.display = 'none'
            divcustom.style.display = 'flex'
            tabuada = [0, 5]
        } else {
            this.modo = 'f'
            this.linkCorrigido = 'Fácil'
            tabuada = [0, 5]
        }

        var avisoh1 = document.querySelector('.h1aviso')
        avisoh1.innerText = `Você esta na dificuldade ${this.linkCorrigido} , logo a tabuada irá de ${tabuada[0]} até ${tabuada[1]}`
    }
    
}

var dificuldadeseter = new dificuldade
dificuldadeseter.setdificuldade()

class tabuadaConstructor{
    constructor(){
        this.tabuadaGlobal = []
        this.guardaqtd = 0
    }

    construirTabuada(dificuldade){
        
        if(dificuldade == 'f'){
            for(let i = 1; i <= 5; i++){
                for(let a = 1; a <= 10; a++){
                    this.tabuadaGlobal.push([i,a])
                }
            }
        }

        if(dificuldade == 'm'){
            for(let i = 6; i <= 10; i++){
                for(let a = 1; a <= 10; a++){
                    this.tabuadaGlobal.push([i,a])
                }
            } 
        }

        if(dificuldade == 'd'){
            for(let i = 11; i <= 15; i++){
                for(let a = 1; a <= 10; a++){
                    this.tabuadaGlobal.push([i,a])
                }
            }
        }

        if(dificuldade == 'cm'){
            var n1 = Number(document.getElementById('n1').value) 
            var n2 = Number(document.getElementById('n2').value)
            console.log(n1)
            console.log(n2)
            if(n1 > n2){
                var n3 = n1
                n1 = n2
                n2 = n3
            } else if(n1 == n2){
                console.log(this.tabuadaGlobal + 'Teste')
                 this.construirTabuada('cs')
                return
            } 


            for(let i = n1; i <= n2; i++){
                
                for(let a = 1; a <= 10; a++){
                    this.tabuadaGlobal.push([i,a])
                }
            }
            console.log(this.tabuadaGlobal)

        }

        if(dificuldade == 'cs'){
            var n3 = Number(document.getElementById('n3').value) 
            for(let i = n3; i < n3 + 1; i++){
                
                for(let a = 1; a <= 10; a++){
                    this.tabuadaGlobal.push([i,a])
                }
            }
        }

        this.guardaqtd = this.tabuadaGlobal.length
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
        this.randomArray
    }

    gameset(){
        console.log(dificuldadeseter.modo)
        tabuadaSeter.construirTabuada(dificuldadeseter.modo)
        console.log(tabuadaSeter.tabuadaGlobal)

        var fechaviso = document.querySelector('.aviso')
        fechaviso.style.display = 'none'

        var main = document.querySelector('main')
        main.style.display = 'flex'

    }

    perguntaset(op){
        var pergunta = document.getElementById('pergunta')

        this.randomArray  = tabuadaSeter.random()

        
        try{
            pergunta.innerText = `${this.randomArray[0]} ${op} ${this.randomArray[1]}`
        } catch {
           
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
        this.erros = 0    
    }

    atualiza(resp){
        if(resp == 0){
            this.acertos++
            var msgacerto = document.getElementById('acerto')
            msgacerto.innerText = `Acerto: ${this.acertos}`
            console.log(this.acertos)
        } else{
            this.erros++
            var msgerro = document.getElementById('erro')
            msgerro.innerText = `Erro: ${this.erros}`
        }
    }

}

class jogotermina{
    constructor(){

    }

    termina(){
         
        var gameArea = document.querySelector('.game-area')
            
        gameArea.style.display = 'none'

        var tela_final = document.querySelector('.tela-final')

        tela_final.style.display = 'flex'
        
        var acertos = document.getElementById('acertos')
        acertos.style.display = 'none'
        var erros = document.getElementById('erros')
        erros.style.display = 'none'

        var acf = document.getElementById('acertof')
        acf.innerText = `Acertos: ${constadorSeter.acertos}`

        var erf = document.getElementById('errof')
        erf.innerText = `Erros: ${constadorSeter.erros}`

        var msgfinal = document.getElementById('msgfinal')

        this.classificacaoFinal(msgfinal, constadorSeter.acertos)



    }

    classificacaoFinal(msgfinal, acertos){

        if(tabuadaSeter.guardaqtd >= 20 && tabuadaSeter.guardaqtd <= 50){
                
            if(acertos <= Math.floor(tabuadaSeter.guardaqtd / 2.45)){
                var img_final = document.querySelector('.img-final')
                img_final.src = 'images/burro.jpg'


                msgfinal.innerText = `Você teve ${acertos} acertos?, BURRO!`
            }

            if(acertos >= Math.floor(tabuadaSeter.guardaqtd / 2) && acertos <= Math.floor(tabuadaSeter.guardaqtd / 1.5)){
                var img_final = document.querySelector('.img-final')

                img_final.src = 'images/alto.jpg'

                msgfinal.innerText = `Você teve ${acertos} acertos, YOU ARE GENIUS?`
            }

            if(acertos > Math.floor(tabuadaSeter.guardaqtd / 1.2)){
                var img_final = document.querySelector('.img-final')

                img_final.src = 'images/mais-alto.webp'

                msgfinal.innerText = `Você teve ${acertos} acertos, VOCÊ SABE`
            }

        }


        if(tabuadaSeter.guardaqtd >= 10 && tabuadaSeter.guardaqtd < 20){
            if(acertos < 5){
                var img_final = document.querySelector('.img-final')
                img_final.src = 'images/burro.jpg'


                msgfinal.innerText = `Você teve ${acertos} acertos?, BURRO!`
            }


            if(acertos >= 5 && acertos <= 7){
                var img_final = document.querySelector('.img-final')

                img_final.src = 'images/alto.jpg'

                msgfinal.innerText = `Você teve ${acertos} acertos, YOU ARE GENIUS?`
            }

            if(acertos > 7){
                var img_final = document.querySelector('.img-final')

                img_final.src = 'images/mais-alto.webp'

                msgfinal.innerText = `Você teve ${acertos} acertos, VOCÊ SABE`
            }
        }

        if(tabuadaSeter.guardaqtd > 50){
            if(acertos <= Math.floor(tabuadaSeter.guardaqtd / 3)){
                var img_final = document.querySelector('.img-final')
                img_final.src = 'images/burro.jpg'
    
                msgfinal.innerText = `Você teve ${acertos} acertos?, BURRO!`
            }
    
            if(acertos >=  Math.floor(tabuadaSeter.guardaqtd / 3) && acertos <=  Math.floor(tabuadaSeter.guardaqtd / 2)){
                var img_final = document.querySelector('.img-final')
    
                img_final.src = 'images/media.png'
    
                msgfinal.innerText = `Você teve ${acertos} acertos, Não esta colando não né?`
            }
    
            if(acertos >= Math.floor(tabuadaSeter.guardaqtd / 2) && acertos <= Math.floor(tabuadaSeter.guardaqtd / 1.5)){
                var img_final = document.querySelector('.img-final')
    
                img_final.src = 'images/alto.jpg'
    
                msgfinal.innerText = `Você teve ${acertos} acertos, YOU ARE GENIUS?`
            }
    
            if(acertos > Math.floor(tabuadaSeter.guardaqtd / 1.2)){
                var img_final = document.querySelector('.img-final')
    
                img_final.src = 'images/mais-alto.webp'
    
                msgfinal.innerText = `Você teve ${acertos} acertos, VOCÊ SABE`
            }
    
        }
        }

    
    }



var tabuadaSeter = new tabuadaConstructor()

var jogoSeter = new jogoSet()

var aleatorioBotaoSeter = new aleatorioBotao()

var operacaobtn = document.querySelectorAll('.btn-operacao')

var constadorSeter = new contadorResp()

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


        jogoSeter.gameset()

        jogoSeter.perguntaset(op)

        aleatorioBotaoSeter.botaorandom(op)
    })

})

var resposta = document.querySelectorAll('.resposta')

resposta.forEach((e) => {
    e.addEventListener('click', () => {
        tabuadaSeter.retiratabuada([jogoSeter.randomArray[0], jogoSeter.randomArray[1]])

        if(tabuadaSeter.tabuadaGlobal.length == 0){
            if(e.innerText == eval(`${jogoSeter.randomArray[0]} ${op} ${jogoSeter.randomArray[1]}`)){     
                constadorSeter.atualiza(0)
            } else {
                constadorSeter.atualiza(1)
            }
            console.log(tabuadaSeter.tabuadaGlobal.length)
            var TerminaSeter = new jogotermina
            TerminaSeter.termina()

        } else {
            if(e.innerText == eval(`${jogoSeter.randomArray[0]} ${op} ${jogoSeter.randomArray[1]}`)){
                
                constadorSeter.atualiza(0)
            } else {
                constadorSeter.atualiza(1)
          
            }

            jogoSeter.perguntaset(op)

            aleatorioBotaoSeter.botaorandom(op)

        }

        

    })
})


//Custom

var startbnt = document.querySelectorAll('.startbtn')
startbnt.forEach((e, indice) => {
    e.addEventListener('click', () => {
        var n1 = document.getElementById('n1')
        var n2 = document.getElementById('n2')
        var n3 = document.getElementById('n3')

        if(n1.value == '' || n2.value == ''){

        } else {
            if(indice == 0){
                var divcustom = document.getElementById('divcustom')
                var divaviso = document.querySelector('.divaviso')
                divaviso.style.display = 'flex'
                divcustom.style.display = 'none'
    
                var n1 = document.getElementById('n1')
                var n2 = document.getElementById('n2')

                if(n2.value > n1.value){
                    var n3 = n1.value
                    n1.value = n2.value
                    n2.value = n3
                    
                }

                dificuldadeseter.modo = 'cm'
                var avisoh1 = document.querySelector('.h1aviso')
                avisoh1.innerText = `Você esta na dificuldade ${dificuldadeseter.linkCorrigido} , logo a tabuada irá de ${n1.value} até ${n2.value}`
                return
            }

            
        }

        if(indice == 1){
            var divcustom = document.getElementById('divcustom')
            var divaviso = document.querySelector('.divaviso')
            divaviso.style.display = 'flex'
            divcustom.style.display = 'none'

            dificuldadeseter.modo = 'cs'
            var avisoh1 = document.querySelector('.h1aviso')
            avisoh1.innerText = `Você esta na dificuldade ${dificuldadeseter.linkCorrigido} , logo irá fazer a tabuada do ${n3.value}`
            return
        }
        
    })
})