const cliente = {
  nome: 'Fulano',
  idade: 39,         
  cpf: '12312312334',
  email: 'fulano@email.com',
  fones: ['552199990000', '5521999990000']
}


cliente.dependentes = {
  nome: 'Fulano Jr.',
  parentesco: 'filho',
  nascimento: '15/09/19998'
}

console.log(cliente)

          // {
          //   nome: 'Fulano',
          //   idade: 39,
          //   cpf: '12312312334',
          //   email: 'fulano@email.com',
          //   fones: [ '552199990000', '5521999990000' ],
          //   dependentes: {
          //     nome: 'Fulano Jr.',
          //     parentesco: 'filho',
          //     nascimento: '15/09/19998'
          //   }
          // }

cliente.dependentes.nome = 'Fulano da Silva Sauro'

console.log(cliente)

          // {
          //   nome: 'Fulano',
          //   idade: 39,
          //   cpf: '12312312334',
          //   email: 'fulano@email.com',
          //   fones: [ '552199990000', '5521999990000' ],
          //   dependentes: {
          //     nome: 'Fulano da Silva Sauro',
          //     parentesco: 'filho',
          //     nascimento: '15/09/19998'
          //   }
          // }