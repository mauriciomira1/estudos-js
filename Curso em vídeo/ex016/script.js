function calcular() {
    var start = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var result = document.getElementById('result')
    result.innerHTML = ''

    if (passo.value == 0) {
        window.alert('Valor de passo inválido. Favor inserir número maior que zero.')
        result.innerHTML = 'O resultado vai aparecer aqui'
    } else {
        
        var s = Number(start.value)
        var e = Number(end.value)
        var p = Number(passo.value)

        for(var a1 = s ; a1 <= e ; a1 += p) {
            var ediv = document.createElement('div')
            ediv.setAttribute('id',`res${a1}`)
            result.appendChild(ediv)
            ediv.innerHTML = `${a1}` 
        }
    }
}