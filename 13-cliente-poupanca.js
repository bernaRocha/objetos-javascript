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

// Quase todo objeto em Javascript tem associado a ele um segundo objeto, seu protótipo, que lhe confere uma série de atributos e funções.

function ClientePoupanca(nome, cpf, email, saldo,saldoPoup)
{
  Cliente.call(this, nome, cpf, email, saldo) // chama o construtor cliente para o ClientePoupanca 
  this.saldoPoup = saldoPoup
}

const ciclana = new ClientePoupanca('Ciclana', '11122244456', 'cciclana@email.com', 0, 131.056)

console.log(ciclana)

          // ClientePoupanca {
          //   nome: 'Ciclana',
          //   cpf: '11122244456',
          //   email: 'cciclana@email.com',
          //   saldo: 0,
          //   depositar: [Function],
          //   saldoPoup: 131.056
          // }

// Acessando o protótipo e definindo uma nova função 
ClientePoupanca.prototype.depositarPoup = function(valor){
  this.saldoPoup += valor
}

ciclana.depositarPoup(50)

console.log(ciclana.saldoPoup)
          // 181.056

//           Além do nome e do valor, cada propriedade tem também três atributos:

// Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;

// Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries(). 
// Ou seja, se a propriedade é enumerável;

// Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.