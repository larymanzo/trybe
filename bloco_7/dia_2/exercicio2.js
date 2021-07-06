// resoluções pegas do gabarito da trybe para estudo e entendimento

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

  const newKey = (obj, key, value) => {
      obj[key]=value;
  }

  newKey(lesson2, 'turno', 'noite');

const listKeys = (obj) =>  Object.keys(obj);
const size = (obj) =>  Object.keys(obj).length;
const value = (obj) => Object.values(obj);

console.log(lesson2);
console.log(listKeys(lesson1));
console.log(size(lesson1));
console.log(value(lesson1));


const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons)

// função criada para saber o numero total de estudantes
const getNumberOfStudents = (obj) => {
    // declaro minha variável contadora
    let total = 0;
    //pego todas as chaves dentro do meu objeto e passo para array
    const array = Object.keys(obj);
    // para cada index dentro da variavel array
    for (index in array) {
      // pego o meu contador e adiciono total = total + o número que estiver dentro do numeroEstudantes do obj
      total += obj[array[index]].numeroEstudantes;
    }
    return total;
  };
console.log(getNumberOfStudents(allLessons));

// crio uma função passando dois parametros: objeto e o numero
// dentro da função eu pego os valores das chaves, como em um array
// como está em um array, quando eu passar um número, vou no indice dele e vou retornar o numero
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);


