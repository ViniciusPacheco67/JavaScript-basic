let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
       return true
    } else {
       return false 
    }

}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1 ) {
       return true
    } else {
       return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionador.`
        lista.appendChild(item) 
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
       
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
       window.alert('Adicione valores antes de finalizar')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var média = 0
        for(var pos in valores) {
            soma +=valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        média = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p> `
        res.innerHTML += `<p>O maior número informado ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${média}</p>`
    }

}