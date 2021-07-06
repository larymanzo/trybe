// objeto student 1
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
// objeto student 2
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
// função listSkills
  const listSkills = (student) => {
    // retorna array do objeto informado
    const arrayOfSkills = Object.keys(student);
    // para cada index dentro da variável arrayOfSkills:
    for(index in arrayOfSkills){
      // vai exibir na tela a chave do objeto informado e o valor de cada chave do objeto informado
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);