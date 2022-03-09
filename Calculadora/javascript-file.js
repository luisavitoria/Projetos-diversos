const botaoInserir = document.querySelectorAll('.container .calculadora .botao-insert')

const botaoAC = document.querySelector('.botao-AC')

const botaoDEL = document.querySelector('.botao-DEL')

const botaoIgual = document.querySelector('.botao-igual')

const resultado = document.getElementById('resultado')

//inserir nexpressão na tela
botaoInserir.forEach(elemento => {
    elemento.onclick = event => {
        event.preventDefault()

        const botaoInserirValor = elemento.innerHTML
        resultado.innerHTML = resultado.innerHTML + botaoInserirValor
    }
})

//apagar toda expressão
botaoAC.onclick = event => {
    event.preventDefault()

    resultado.innerHTML = ""
}

//apagar numero
botaoDEL.onclick = event => {
    event.preventDefault()

    const resultadoValor = resultado.innerHTML
    resultado.innerHTML = resultadoValor.substring(0, resultadoValor.length-1)
}

//realizar operação 
botaoIgual.onclick = event => {
    event.preventDefault()

    const resultadoValor = resultado.innerHTML
    if(resultadoValor) {
        resultado.innerHTML = eval(resultadoValor)
}
}


