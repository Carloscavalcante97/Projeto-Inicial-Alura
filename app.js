let listaNumerosSorteados = [];
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
camposIniciais()

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
document.getElementById('reiniciar').setAttribute('disabled', false)
function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "VOCE ACERTOU!!");
    let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagem = `Voce acertou o numero secreto com ${tentativas} ${palavra}!`
    exibirTextoNaTela( "p", mensagem);
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "o numero secreto e menor que o chute");
    } else {
      exibirTextoNaTela("p", "o numero secreto e maior que o chute");
    }
    tentativas ++;
    limparCampo()
  }
}

function camposIniciais(){
    exibirTextoNaTela('h1','Jogo do numero secreto')
    exibirTextoNaTela('p','Escolha um numero entre 1-100')
}

function reiniciar() {
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1
camposIniciais()

}

function gerarNumeroAleatorio() {
  let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosDaLista = listaNumerosSorteados.length
  if(quantidadeDeElementosDaLista == numeroLimite){
    listaNumerosSorteados = []
  }
  if(listaNumerosSorteados.includes(numeroEscolhido)){
return gerarNumeroAleatorio()
  }else {
    listaNumerosSorteados.push(numeroEscolhido)
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}

