var num = [5, 8, 2, 9, 3,]
num.push(1 , 6 , 7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçôes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(8)
if ( pos == -1 ) {
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor 8 esta na possição ${pos}`)
}

