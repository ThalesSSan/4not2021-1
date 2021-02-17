// Funcao para fins ilustrativos. Se precisar realmente elevar um
// número ao quadrado, use o operador ** ou a função Math.pow

// Caracteristicas desta função:
// 1) Tem apenas 1 argumento
// 2) Seu corpo tem apenas uma linha de código, com return
function quadrado(n){
    return n * n // n ** 2
}

// Reescrevendo a funcao anterior como arrow function
// 1) Os parametros em torno do argumento são omitidos
// 2) A palavra function, ANTES do argumento, é substituida pelo simbolo =>
// APÓS o argumento
// 3) As chaves são omitidas
// 4) A palavra return é omitida
const quadrado2 = n => n * n

console.log(quadrado(8), quadrado2(8))

// Função com mais de 1 argumento
function potencia(b, e){// b = base, e = expoente
    return b ** e
}

// Com 1+ argumentos, os parênteses em volta deles devem retornar
let potencia2 = (b, e) => b ** e

console.log(potencia(2, 6), potencia2(2, 6))

// Funcao sem argumentos
function megasena() {
    // Retorna um numero aleatorio entre 1 e 60
    // Math.random() -> retorna um numero aleatorio entre 0 e 1
    // Multiplicando por 60 -> temos um numero entre 0 e 59 (fracionario)
    // Soma 1 -> ajuda a faixa para entre 1 e 60
    // floor() -> retirar as casas decimais
    return Math.floor(Math.random() * 60 + 1)
}

console.log(megasena(), megasena(), megasena())

// Quando não há argumentos, os parametros marcam o lugar deles
const megasena2 = () => Math.floor(Math.random() * 60 + 1)

console.log(megasena2(), megasena2(), megasena2())

// Função com mais de uma linha de código no corpo
function somaTudo(...nums){
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

// Arrow function para corpos com mais de uma linha
// Voltam as chaves
// (Os parenteses em torno do argumento são necessarios por se tratar
// de um argumento de resto)
let somaTudo2 = (...nums) => {
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

// Conclusão: o formato arrow function é indicado quando a funcao se resolve em
// apenas uma linha (ou poucas linhas, como execução).
