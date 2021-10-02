class Cliente{
  constructor(nome, email, cpf, saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }
  //Na construção de uma classe em JavaScript, além da palavra reservada class, 
  //devemos também definir uma função construtora (que inicializa as propriedades do objeto) quando ele for criado.
  depositar(valor){
    this.saldo += valor
  }

  exibirSaldo(){
    console.log(this.saldo)
  }
}

// Na orientação a objetos uma classe serve como uma planta que descreve os atributos e comportamentos comuns a objetos de um mesmo tipo.

class ClientePoupanca extends Cliente{
  constructor(nome, email, cpf, saldo, saldoPopanca){
    super(nome, email,cpf, saldo)
    this.saldoPopanca = saldoPopanca
  }

  depositarPoupanca(valor){
    this.saldoPopanca += valor
  }
}

const beltrano = new ClientePoupanca('Beltrano', 'beltrano@email.com', '22233344445', 20,90)

console.log(beltrano)

                // ClientePoupanca {
                //   nome: 'Beltrano',
                //   email: 'beltrano@email.com',
                //   cpf: '22233344445',
                //   saldo: 20,
                //   saldoPopanca: 90
                // }
beltrano.depositar(10)
beltrano.depositar(300)

console.log(beltrano)

                // ClientePoupanca {
                //   nome: 'Beltrano',
                //   email: 'beltrano@email.com',
                //   cpf: '22233344445',
                //   saldo: 330,
                //   saldoPopanca: 90
                // }