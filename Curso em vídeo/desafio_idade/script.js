function calcular() {
    var data = new Date()
    var agora = data.getFullYear()
    var year = document.querySelector('input#ano')
    var rsex = document.getElementsByName('sexo')
    var result = document.getElementById('txt')
    var idade = agora - Number(year.value)
    var genero = ''
    var pict = document.createElement('img')
    pict.setAttribute('id','foto')

    if (year.value >= agora || year.value.length == 0 || year.value <= 0) {
        window.alert('[ERRO!] Informe um valor válido')
    } else {
    
        if (rsex[0].checked) {
            genero = 'Homem'
            
            if (idade < 20) {
                pict.setAttribute('src','img/homem_jovem.png')
            } else if (idade >= 20 && idade < 50) {
                pict.setAttribute('src','img/homem_adulto.png')
            } else 
                pict.setAttribute('src','img/homem_idoso.png')
        } else if (rsex[1].checked ) {
        genero = 'Mulher'
        
        if (idade < 20) {
            pict.setAttribute('src','img/mulher_jovem.png')
        } else if (idade >= 20 && idade < 50) {
            pict.setAttribute('src','img/mulher_adulta.png')
        } else 
        pict.setAttribute('src','img/mulher_idosa.png')
        }
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        result.appendChild(pict)
    }


/*     var sexo = document.querySelector
    var text = document.querySelector('div#txt')
    var imgem = document.querySelector('img#foto')
 */
}