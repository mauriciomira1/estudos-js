function calcular() {
    var num = document.getElementById('entrada')
    var s = Number(num.value)
    var x = 0
    var result = document.getElementById('resultado')
    result.innerHTML = ''
    while(x <= 10) {
        var opt = document.createElement('option')
        opt.setAttribute('id',`${x}`)
        result.appendChild(opt)
        opt.innerHTML = `${s} X ${x} = ${s*x}`
        x++
    } 
}