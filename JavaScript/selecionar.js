function selecionarComida(comida) {
    const botao = document.querySelector('.main-food.-' + comida);
    const botaoSelecionadoAntes = document.querySelector('.main-food.selecionado'); 
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('selecionado'); 
    }
    botao.classList.add('selecionado'); 
}

function selecionarBebida(bebida) {
    const botao = document.querySelector('.main-drink.-' + bebida);
    const botaoSelecionadoAntes = document.querySelector('.main-drink.selecionado'); 
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('selecionado'); 
    }
    botao.classList.add('selecionado'); 
}

function selecionarSobremesa(sobremesa) {
    const botao = document.querySelector('.main-candy.-' + sobremesa);
    const botaoSelecionadoAntes = document.querySelector('.main-candy.selecionado');
    if (botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove('selecionado'); 
    }
    botao.classList.add('selecionado');
}
