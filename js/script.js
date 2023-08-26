const botaoName = document.querySelector('.bto');
const campoNome = document.querySelector('.campo');
let espacoPressionado = false;


botaoName.addEventListener('click', function() {

  window.location.href = 'cadastro.html'

  localStorage.setItem('nomeDigitado', campoNome.value);
});


campoNome.addEventListener('input', function() {
    if (campoNome.value.trim() === '') {
        botaoName.disabled = true;
    } else {
        // Habilita o botão apenas se a tecla espaço já foi pressionada
        botaoName.disabled = !espacoPressionado;
        botao.style.backgroundColor = 'blue';
    }
});

campoNome.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é a tecla espaço (código ASCII 32)
    if (event.keyCode === 32 && campoNome.value.trim() !== '' && !espacoPressionado) {
      espacoPressionado = true;
      botaoName.disabled = false;
      botaoName.style.backgroundColor = 'DarkViolet';

      // Salva o valor do campo de entrada no localStorage      
    }
});