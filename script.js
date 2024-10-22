function alterarCirculo(){
    const Circulo = document.getElementById('circulo');
}

const corAleatoria = '#'+
Math.floor(Math.random()*16777215).toString(16);

const novoTamanho =Math.floor(Math.random()* (200-50+1)) + 50;

Circulo.style.backgroudColor = corAleatoria
Circulo.style.width = novoTamanho + 'px'
Circulo.style.height = novoTamanho + 'px'