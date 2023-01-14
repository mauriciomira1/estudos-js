function fatorial(x) {
    let fat = 1
    for (c = x ; c > 1 ; c--) {
        fat *= c
    }
    return(fat)
}
console.log(fatorial(4))
