/*O javascript não é importado no head do HTML, ele é colocado após o final do main e antes do final do body*/


/*OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista*/
// Passo 1 - dar um jeito de pegar o elemento HTML da seta avancar:
const btnAvancar = document.getElementById("btn-avancar"); //Criada uma variável para o botão avançar 
// Passo 1 (Obj 2) - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar"); //Criada uma variável para o botão voltar
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function() {
        const cartaVirada = cartao.querySelector(".carta-virada");
        // virar o cartão:
        cartao.classList.toggle("virar");
        // mostrar o fundo da carta
        cartaVirada.classList.toggle("mostrar-fundo-carta");
        
        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");
    });
}); /*Para cada cartão seleciona*/


// Passo 2 - dar um jeito de identificar o clique do usuário na seta avançar:
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    /*Retira o erro de chegar na última carta*/

    // Passo 4 - buscar o cartão que esta selecionado e esconder: 
    /*Retira o selecionado de um elemento e coloca no próximo*/
    esconderCartaoSelecionado();
    // Passo 3 - fazer aparecer o próximo cartão da lista: 
    cartaoAtual++; /*Incrementa a variável em 1 começando em zero*/
    mostrarCartao(cartaoAtual); /*Incrementa a variável cartaoAtual em 1 a cada vez que se clica e adiciona ele a classe "selecionado", para mostrar que essa carta esta selecionada*/
});


/*OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista*/

// Passo 2 - dar um jeito de identificar o clique do usuário na seta voltar:
btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    /*Retira o erro de chegar na primeira carta*/
    esconderCartaoSelecionado();
    cartaoAtual--; /*Decrementa a variável em 1 começando em zero*/
    mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
