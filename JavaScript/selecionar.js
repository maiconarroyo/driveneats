let comidaSelecionada = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;

let comida = '';
let bebida = '';
let sobremesa = '';

function selecionarComida(comidaElement) {
    const botao = comidaElement;
    const botaoSelecionadoAntes = document.querySelector('.main-food.selecionado'); 
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('selecionado'); 
    }
    botao.classList.add('selecionado'); 
    comidaSelecionada = true;
    comida = botao.querySelector('.sub-title.-foodName').textContent;
    verificarPedido();
}

function selecionarBebida(bebidaElement) {
    const botao = bebidaElement;
    const botaoSelecionadoAntes = document.querySelector('.main-drink.selecionado'); 
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('selecionado'); 
    }
    botao.classList.add('selecionado'); 
    bebidaSelecionada = true;
    bebida = botao.querySelector('.sub-title.-foodName').textContent; 
    verificarPedido();
}

function selecionarSobremesa(sobremesaElement) {
    const botao = sobremesaElement;
    const botaoSelecionadoAntes = document.querySelector('.main-candy.selecionado');
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('selecionado'); 
    }
    botao.classList.add('selecionado');
    sobremesaSelecionada = true;
    sobremesa = botao.querySelector('.sub-title.-foodName').textContent;
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
        document.querySelector('.overlay').style.display = 'flex';
        document.querySelector('.fechar-pedido').style.display = 'flex';
        document.querySelector('.sub-title.-buttom').classList.add('escondido');
        const texto =  `<br><br>${comida}: 14.90 <br><br>${bebida}: 4.90 <br><br>${sobremesa}: 7.90`;
        document.querySelector('.sub-title.-total').innerHTML = texto;
    }
}

function cancelarPedido() {
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.fechar-pedido').style.display = 'none';
}
