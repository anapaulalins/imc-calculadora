const container = document.querySelector('#cont')
container.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = getValue('nome')
    const peso = getValueNumber('peso')
    const altura = getValue('altura')

    let part1 = altura.slice(0, 1)
    let part2 = altura.slice(1, 3)
    const aturaAtualizada = Number(`${part1}.${part2}`)

    // trnasformando a strig em um array
    // let teste = altura.split('')
    // console.log(teste)

    const imc = (peso / (aturaAtualizada * aturaAtualizada)).toFixed(2)
    console.log(imc, aturaAtualizada, altura)

    let resultado = ''

    if (imc <= 18.5) {
        resultado = 'Abaixo do peso'
    } else if (imc >= 18.6 && imc <= 24.99) {
        resultado = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.99) {
        resultado = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.99) {
        resultado = 'Obesidade grau 1'
    } else if (imc >= 35 && imc <= 39.99) {
        resultado = 'Obesidade grau 2'
    } else {
        resultado = 'Obesidade grau 3'
    }

    const containerResultado = document.querySelector('.resultado-container')

    containerResultado.innerHTML = ` <h2>Seu resultado está pronto:</h2>

    <div class="content-resultado">
        <p>${nome} seu IMC ( Índice de Massa Corporal ) é de <strong>${imc}</strong>.</p>
        <p>Você está em com <strong>${resultado}</strong>!</p>
    </div>`

})

function getValue(id) {
    return document.querySelector(`#${id}`).value
}
function getValueNumber(id) {
    // const number = parseFloat(document.querySelector(`#${id}`).value).toFixed(2)
    // return Number(number)
    return Number(document.querySelector(`#${id}`).value)
}

