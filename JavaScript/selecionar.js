let comidaSelecionada = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;

function selecionarComida(comida) {
    const botao = comida;
const botaoSelecionadoAntes = document.querySelector('.main-food.selecionado'); 
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('selecionado'); 
    }
    botao.classList.add('selecionado'); 
    comidaSelecionada = true;
    verificarPedido();
}

function selecionarBebida(bebida) {
    const botao = bebida
    const botaoSelecionadoAntes = document.querySelector('.main-drink.selecionado'); 
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('selecionado'); 
    }
    botao.classList.add('selecionado'); 
    bebidaSelecionada = true;
    verificarPedido();
}

function selecionarSobremesa(sobremesa) {
    const botao = sobremesa
    const botaoSelecionadoAntes = document.querySelector('.main-candy.selecionado');
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('selecionado'); 
    }
    botao.classList.add('selecionado');
    sobremesaSelecionada = true;
    verificarPedido();
}


function verificarPedido() {
    if (comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {
        const botao = document.querySelector(".checkout button");
        botao.textContent = "Fechar Pedido"; 
        botao.disabled = false;
        botao.classList.add("fecharpedido");
    }
}

function fecharPedido() {
    if (comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {
        document.querySelector('.overlay').classList.add('active');
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('.fechar-pedido').style.display = 'flex';
        document.querySelector('.sub-title.-buttom').classList.add('escondido');
    }
}

function cancelarPedido() {
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.fechar-pedido').style.display = 'none';
}