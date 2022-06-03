function validaEntradas() {
  const nome = document.getElementById('nome-completo').value.length;
  const email = document.getElementById('e-mail').value.length;
  const porque = document.getElementById('porque').value.length;
  const resultado = nome >= 10 && nome <= 40 && email >= 10 && email <= 50 && porque <= 500; 
  return resultado;
}

const botao = document.getElementById('enviar');
botao.addEventListener('click', (event) => {
  event.preventDefault();
  if (!validaEntradas()) {
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
});

const usoImagem = document.getElementById('uso-imagem');
usoImagem.addEventListener('change', () => {
  botao.disabled = !usoImagem.checked;
});