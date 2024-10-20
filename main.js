const form = document.querySelector('form');
let primeiroValor = document.getElementById('valor1');
let segundoValor = document.getElementById('valor2');
let mensagemErro = document.getElementById('mensagemErro')
const mensagemSucesso = document.getElementById('mensagemSucesso')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let valor1 = parseFloat(primeiroValor.value);
    let valor2 = parseFloat(segundoValor.value);
    const msgSucesso = `Parabéns o número ${valor2} é maior que o número ${valor1}!`
    const msgErro = `Erro o número ${valor2} nao é maior que o número ${valor1}. Tente novamente!`
    console.log(valor1)
    console.log(valor2)
    
    if ((valor2) > (valor1)) {
        mensagemSucesso.innerHTML = msgSucesso
        alert(msgSucesso)
       
    } else {
        mensagemErro.style.display = 'block'
        alert(msgErro)
    }
    primeiroValor.value = ''
    segundoValor.value = ''
    

})




