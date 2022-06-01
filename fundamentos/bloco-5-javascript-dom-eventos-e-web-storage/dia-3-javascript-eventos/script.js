function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
// const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezHolidays = [24, 25, 31];
const dezFridays = [4, 11, 18, 25];
let fontSize;

function createDaysOfTheMonth(monthDays) {
  let daysUl = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dayLi = document.createElement('li');
    dayLi.className = 'day';
    if (dezHolidays.includes(dezDaysList[index])) {
      dayLi.classList.add('holiday');
    }
    if (dezFridays.includes(dezDaysList[index])) {
        dayLi.classList.add('friday');  
    }
    dayLi.innerText = dezDaysList[index];
    daysUl.appendChild(dayLi);
  }
}
// 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createHolidaysButton(string) {
  let buttonsContainer = document.getElementsByClassName('buttons-container');
  let holidaysButton = document.createElement('button');
  holidaysButton.innerText = string;
  holidaysButton.id = 'btn-holiday';
  buttonsContainer[0].appendChild(holidaysButton);
}

// 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function addClickHolidaysButton() {
  let holidaysButton = document.getElementById('btn-holiday');
  holidaysButton.addEventListener('click', function() {
    let holidays = document.getElementsByClassName('holiday');
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === 'yellow') {
         holidays[index].style.backgroundColor = 'rgb(238, 238, 238)';
      } else {
         holidays[index].style.backgroundColor = 'yellow';
      }
    }
  });
}

// 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createFridayButton(string) {
  let buttonsContainer = document.getElementsByClassName('buttons-container');
  let fridayButton = document.createElement('button');
  fridayButton.innerText = string;
  fridayButton.id = 'btn-friday';
  buttonsContainer[0].appendChild(fridayButton);
}

// 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function addClickFridayButton() {
  let fridayButton = document.getElementById('btn-friday');
  fridayButton.addEventListener('click', function() {
    let fridays = document.getElementsByClassName('friday');
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerText === 'Sextou') {
        fridays[index].innerText = dezFridays[index];
      } else {
        fridays[index].innerText = 'Sextou';
      }
    }
  });
}

// 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function zoomIn() {
  let daysLi = document.getElementsByClassName('day');
  for (let index = 0; index < daysLi.length; index += 1) {
    daysLi[index].addEventListener('mouseover', function() {
      fontSize = daysLi[index].style.fontSize;
      daysLi[index].style.fontSize = 'x-large';
    })
  }
}

function zoomOut() {
  let daysLi = document.getElementsByClassName('day');
  for (let index = 0; index < daysLi.length; index += 1) {
    daysLi[index].addEventListener('mouseout', function() {
      daysLi[index].style.fontSize = fontSize;
    })
  }
}

// 7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTask(task) {
  let taskSpan = document.createElement('span');
  taskSpan.innerText = task;
  let myTasks = document.getElementsByClassName('my-tasks');
  myTasks[0].appendChild(taskSpan);
}

// 8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function createSubtitle(color) {
  let taskSubtitle = document.createElement('div');
  taskSubtitle.className = 'task';
  taskSubtitle.style.backgroundColor = color;
  let myTasks = document.getElementsByClassName('my-tasks');
  myTasks[0].appendChild(taskSubtitle);  
}

// 9. Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function addClickTaskDiv() {
  let taskSubtitles = document.getElementsByClassName('task');
  for (let index = 0; index < taskSubtitles.length; index += 1) {
    taskSubtitles[index].addEventListener('click', function() {
      if (taskSubtitles[index].className === 'task') { 
        taskSubtitles[index].classList.add('selected');
      } else {
        taskSubtitles[index].classList.remove('selected');
      }
    })
    
  }
}

// 9. Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key.


createDaysOfTheMonth(dezDaysList);
createHolidaysButton('Feriados');
addClickHolidaysButton();
createFridayButton('Sexta-feira');
addClickFridayButton();
zoomIn();
zoomOut();
addTask('Cozinhar');
createSubtitle('blue');
addClickTaskDiv();