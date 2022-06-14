const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function adicionaChave(objeto, chave, valor) {
  objeto[chave] = valor;
}

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listaChaves(objeto) {
  const chaves = Object.keys(objeto);
  console.log(chaves);
}

// 3. Crie uma função para mostrar o tamanho de um objeto.

function tamanhoObjeto(objeto) {
  const chaves = Object.keys(objeto);
  console.log(Object.keys(objeto).length);
}

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function listaValores(objeto) {
  const valores = Object.values(objeto);
  console.log(valores);
}

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

function criaAllLessons() {
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  return allLessons;
}

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalEstudantes(allLessons) {
  const arrayLessons = Object.values(allLessons);
  let total = 0;
  for (let lesson of arrayLessons) {
    total += lesson.numeroEstudantes;
  }
  return total;
}

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

function getValueByNumber(objeto, posicao) {
  const arrayObjetos = Object.values(objeto);
  return arrayObjetos[posicao];
}

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

function verifyPair(objeto, chave, valor) {
  return (objeto[chave] === valor); 
}


// Bônus 1: Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

function alunosDisciplina(allLessons, disciplina) {
  const arrayObjetos = Object.values(allLessons);
  // console.log(arrayObjetos);
  let soma = 0;
  for (let aula of arrayObjetos) {
    if (aula.materia === disciplina) {
      soma += aula.numeroEstudantes;
    }
  }
  return soma;
}

// Bônus 2: Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

function createReport(allLessons, professor) {
  let report = {};
  let aulas = [];
  let soma = 0;
  const arrayObjetos = Object.values(allLessons);
  for (let aula of arrayObjetos) {
    if (aula.professor === professor) {
      soma += aula.numeroEstudantes;
      aulas.push(aula.materia);
    }
  }
  report.professor = professor;
  report.aulas = aulas;
  report.estudantes = soma;
  return report;
}

// adicionaChave(lesson2, 'turno', 'noite');
// console.log(lesson2);
// listaChaves(lesson3);
// tamanhoObjeto(lesson3);
// listaValores(lesson2);
// console.log(criaAllLessons());
// console.log(totalEstudantes(criaAllLessons()));
// console.log(getValueByNumber(lesson1, 2));
// console.log(verifyPair(lesson2, 'professor', 'Carlos'));
// console.log(verifyPair(lesson3, 'professor', 'Carlos'));
// console.log(alunosDisciplina(criaAllLessons(), 'Matemática'));
console.log(createReport(criaAllLessons(), 'Maria Clara'));
