var i = 0
let vetor = []
function adicionar() {
    
    var lista = document.getElementById('lista')
    var newnumber = document.getElementById('entrada')    
    var numlist = document.createElement('option')
    
    if (newnumber.value < 1 || newnumber.value > 100) {
        alert('Favor inserir um valor entre 1 e 100')
    } else {
    numlist.setAttribute('id',`opt${i}`)
    var add = lista.appendChild(numlist)
    numlist.innerHTML = `Número ${newnumber.value} adicionado`
    i++
    vetor.push(newnumber.value)
    }
}

function finalizar() {
    /* Qtd de números cadastrados */
    var ncadastrado = document.createElement('p')
    ncadastrado.setAttribute('id','ncadast')
    var result = document.getElementById('resultado')
    result.innerHTML = ''
    result.appendChild(ncadastrado)
    ncadastrado.innerHTML = `Quantidade de números cadastrados: ${i}`

    /* Maior valor cadastrado */
    var Mvalor = document.createElement('p')
    Mvalor.setAttribute('id','maiorvalor')
    vetor.sort()
    let ultimo = vetor[i]
    result.appendChild(Mvalor)
    Mvalor.innerHTML = `O maior valor inserido é ${vetor[i-1]}`

    /* Menor valor inserido */
} 