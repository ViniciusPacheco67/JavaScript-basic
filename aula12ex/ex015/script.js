function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('[ERRO] Verificar os dados e tente novamente!')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero ='Homen'
           if (idade >=0 && idade <10) {
               // Criança 
               img.setAttribute('src', 'bebe-m.png')
           } else if (idade < 21) {
               // Jovem
               img.setAttribute('src', 'joven-m.png')
           } else if ( idade < 50) {
               // Adulto
               img.setAttribute('src', 'adulto-m.png')
           } else{
               // Idoso
               img.setAttribute('src', 'idoso-m.png')
           }          
       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >=0 && idade <10) {
               // Criança
               img.setAttribute('src', 'bebe-f.png')
           } else if (idade < 21) {
               // Jovem
               img.setAttribute('src', 'jovem-f.png')
           } else if ( idade < 50) {
               // Adulto
               img.setAttribute('src', 'adulto-f.png')
           } else{
               // Idoso
               img.setAttribute('src', 'idoso-f.png')
           } 
       }
       res.innerHTML = `Detectamos <strong>${gênero}<strong> de <strong>${idade}<strong> anos.`
       res.appendChild(img)


   } 

}