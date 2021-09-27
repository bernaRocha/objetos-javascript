const cliente = {
    nome: 'Fulano',
    idade: 39,
    cpf: '12312312334',
    email: 'fulano@email.com',
    fones: [ '552199990000', '5521999990000' ],
    dependentes: [
      {
        nome: 'Fulano da Silva Sauro',
        parentesco: 'filho',
        nascimento: '15/09/1998'
      },
      {
        nome: 'Dependente da Silva',
        parentesco: 'filh@',
        dataNascimento: '01/01/2010'
      }
    ],
    saldo: 100,

    depositar: function(valor)
    {
      this.saldo += valor
      // this faz referência ao próprio objeto
      // este objeto, esta instância do objeto
    }
}

console.log(cliente.saldo) // para acessar o saldo
          // 100
cliente.depositar(30)
          
console.log(cliente.saldo)
          //  130
