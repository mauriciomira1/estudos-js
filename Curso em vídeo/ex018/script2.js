let entNum = document.getElementById('entrada')
let list = document.querySelector('select#lista')
let result = document.querySelector('div#resultado')
let vetor = []

function sEntrada(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function sLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(sEntrada(entNum.value) && !sLista(entNum.value, vetor)) {
        vetor.push(Number(entNum.value))
        
        let cadastro = document.createElement('option')
        cadastro.innerHTML = `Inserido o número ${entNum.value}`
        list.appendChild(cadastro)
    } else {
        window.alert('Você inseriu um valor inválido ou duplicado')
    }
    entNum.value = ''  //Para limpar o INPUT quando enviar
    entNum.focus()  //Para voltar o foco para o INPUT quando clicar em enviar
    result.innerHTML = ''
} 

function finalizar() {

    vetor.sort()
    let compr = Number(vetor.length)
    
/*     let newp = document.createElement('p')
    newp.innerHTML = `Quantidade de números inseridos: ${Number(vetor.length)}`
    result.appendChild(newp)

    let newp2 = document.createElement('p')
    newp2.innerHTML = `O menor número inserido foi ${vetor[0]}`
    result.appendChild(newp2)


    let newp3 = document.createElement('p')
    newp3.innerHTML = `O maior número inserido foi ${vetor[compr-1]}`
    result.appendChild(newp3) */
    let soma = 0
    let media = 0
    for(let pos in vetor) {
        soma += vetor[pos]
    }
    media = soma/compr
    
    result.innerHTML += `<p>Quantidade de valores cadastrados: ${compr}</p>`
    result.innerHTML += `<p>O menor número é ${vetor[0]}.</p>`
    result.innerHTML += `<p>O maior número é ${vetor[compr-1]}.</p>`
    result.innerHTML += `<p>A soma total é ${soma}.</p>`
    result.innerHTML += `<p>A média é ${media}.</p>`
    
}