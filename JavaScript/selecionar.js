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
        const precoComida = parseFloat(document.querySelector('.sub-title.-price').textContent);
        const precoBebida = parseFloat(document.querySelector('.sub-title.-drink').textContent);
        const precoSobremesa = parseFloat(document.querySelector('.sub-title.-doce').textContent);
        const total = precoComida + precoBebida + precoSobremesa;

        document.querySelector('.overlay').classList.add('active');
        document.querySelector('.overlay').style.display = 'flex';
        document.querySelector('.fechar-pedido').style.display = 'flex';
        document.querySelector('.sub-title.-buttom').classList.add('escondido');
        const texto =  `<br><br>${comida}: ${precoComida} <br><br>${bebida}: ${precoBebida} <br><br>${sobremesa}: ${precoSobremesa}`;
        document.querySelector('.sub-title.-total').innerHTML = texto;
        document.querySelector('.sub-title.-totalbaixo').textContent = `TOTAL: ${total.toFixed(2)}`;
    }
}

function cancelarPedido() {
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.fechar-pedido').style.display = 'none';
}


function enviarPedido() {
    if (comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {
        const precoComida = parseFloat(document.querySelector('.main-food.selecionado .sub-title.-price').textContent);
        const precoBebida = parseFloat(document.querySelector('.main-drink.selecionado .sub-title.-drink').textContent);
        const precoSobremesa = parseFloat(document.querySelector('.main-candy.selecionado .sub-title.-doce').textContent);
        const total = precoComida + precoBebida + precoSobremesa;

        const mensagem = `Olá, gostaria de fazer o pedido:
        - Prato: ${comida}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa}
        Total: R$${total.toFixed(2)}`;

        const mensagemCodificada = encodeURIComponent(mensagem);
        const numeroWhatsapp = "+5521989896484";
        const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;
        window.open(urlWhatsapp, '_blank');
    }
}
