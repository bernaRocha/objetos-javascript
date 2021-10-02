// Função Javascript com um método depositar, um comportamento dentro da função
function Cliente(nome, cpf, email, saldo)
{
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function(valor){
    this.saldo += valor
  }
}

// new, palavra reservada, a partir do new criamos um novo CLiente
const fulano = new Cliente('Fulano','12312312345', 'fulano@email.com', 0)

console.log(fulano)

          // Cliente {
          //   nome: 'Fulano',
          //   cpf: '12312312345',
          //   email: 'fulano@email.com',
          //   saldo: 0,
          //   depositar: [Function]
          // }