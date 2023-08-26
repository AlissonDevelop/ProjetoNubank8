function validarFormulario() {
    // código da função validarFormulario...
  }
  
  function redirecionarParaEndereco() {
    if (validarFormulario()) {
      // Redireciona para a página "endereco.html"
      window.location.href = "endereco.html";
    }
  }
  
  function limparCampos() {
    // código da função limparCampos...
  }
  
  function carregarNomeDoLocalStorage() {
    // código da função carregarNomeDoLocalStorage...
  }
  
  // Chama a função de carregar o nome assim que a página terminar de carregar
  window.addEventListener('load', carregarNomeDoLocalStorage);
  