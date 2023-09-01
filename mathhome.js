var btn_modo = document.querySelectorAll('.btn-modo')

btn_modo.forEach((e) => {
    e.addEventListener('click', () => {
        if(e.value == 'facil'){
            window.location.href = 'app.html?facil'
        }

        if(e.value == 'normal'){
            window.location.href = 'app.html?normal'
        }

        if(e.value == 'dificil'){
            window.location.href = 'app.html?dificil'
        }

        if(e.value == 'custom'){
            window.location.href = 'app.html?custom'
        }
    })
})