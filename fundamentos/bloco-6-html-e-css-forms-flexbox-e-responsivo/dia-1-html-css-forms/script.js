const botao = document.getElementById('enviar');
botao.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
});