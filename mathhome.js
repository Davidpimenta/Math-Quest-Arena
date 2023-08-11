var btn_modo = document.querySelectorAll('.btn-modo')

btn_modo.forEach((e) => {
    e.addEventListener('click', () => {
        if(e.value == 'facil'){
            window.location.href = 'app.html?facil'
        }
    })
})