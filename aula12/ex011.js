var idade = 72 
var nome = 'joão'
console.log(`seu nome e ${nome} e voce tem ${idade} anos`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 65 ) {
    console.log('voto e opicional ')
} else {
    console.log('voto e obrigatorio')
}