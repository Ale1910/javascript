function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  //var res = document.getElementById('res') - pode ser feito assim ou do jeito que foi feito abaixo
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert(`[ERRO] Verifique os dados e tente novamente!`)
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade <10) {
            // Criança
            img.setAttribute('src', 'imagens/criança-m.png')
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovem-m.png')
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'imagens/adulto-m.png')
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        } else {
            // Idoso
            img.setAttribute('src', 'imagens/idoso-m.png')
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade <10) {
            // Criança
            img.setAttribute('src', 'imagens/criança-f.png')
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovem2-f.png')
            res.innerHTML = `Oi Gaby, tudo bem, você tem 17 anos`            
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'imagens/adulto-f.png')
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        } else {
            // Idoso
            img.setAttribute('src', 'imagens/idosa-f.png')
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        }
    }
    //res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
