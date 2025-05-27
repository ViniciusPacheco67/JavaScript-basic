var agora = new Date()
var hora = new Date()
var diasam = agora.getDay()
var relo = hora.getHours()
if (relo) {
    console.log(`Agora são exatamente ${hora} horas.`)
}
switch (diasam) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.group('quarta') 
        break
    case 4:
        console.log('quinta')
        breaks
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sábodo')
        break                            
}