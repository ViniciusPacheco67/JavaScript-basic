function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA 
        img.src = 'fotomanha.png'
        document.body.style.background = '#d9b490'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#ba663a'
    }else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#161c28'
    }
}
