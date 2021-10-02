class Pessoa {
  constructor(nome, sobrenome, cpf, email){
    this.nome = nome
    this.sobrenome = sobrenome
    this.cpf = cpf
    this.email = email
  }
}

// A classe define os atributos (características) e os métodos
// (comportamentos/aquilo que ele pode realizar)de um objeto.

// Herança

// Permite que uma classe herde características de outra classe

class Programador extends Pessoa{
  constructor(nome, sobrenome, cpf, email, linguagem){
    super(nome, sobrenome, cpf, email)
      this.linguagem = linguagem
    }
}


// a class Programador herda de pessoa as características dela

// O Objeto é a instância de uma classe

const novoDevJunior = new Programador('Bernardo', 'Rocha', '12378978990', 'meuemail@email.com', 'Javascript')

console.log(novoDevJunior)

          // Programador {
          //   nome: 'Bernardo',
          //   sobrenome: 'Rocha',
          //   cpf: '12378978990',
          //   email: 'meuemail@email.com',
          //   linguagem: 'Javascript'
          // }