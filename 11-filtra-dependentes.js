const clientes = [
  {
  nome: 'Fulano',
  cpf: '12312312334',
  email: 'fulano@email.com',
  dependentes: [{
      nome: 'Fulano da Silva Sauro',
      parentesco: 'filho',
      nascimento: '15/09/1998'
    },
    {
      nome: 'Dependente da Silva',
      parentesco: 'filh@',
      nascimento: '01/01/2010'
  }],
  },

  {
    nome: 'Ciclana',
    cpf: '99911123467',
    email: 'ciclana@email.com',
    dependentes: [{
        nome: 'Ciclana Jr',
        parentesco: 'irma',
        nascimento: '01/01/1990'
      },
      {
        nome: 'Dependente da Ciclana',
        parentesco: 'irma',
        nascimento: '01/01/1990'
      }]
    }
]
  

const listaDependentes = [...clientes[0].
dependentes,...clientes[1].dependentes]

console.log(listaDependentes)

              // [
              //   {
              //     nome: 'Fulano da Silva Sauro',
              //     parentesco: 'filho',
              //     nascimento: '15/09/1998'
              //   },
              //   {
              //     nome: 'Dependente da Silva',
              //     parentesco: 'filh@',
              //     nascimento: '01/01/2010'
              //   },
              //   { nome: 'Ciclana Jr', parentesco: 'irma', nascimento: '01/01/1990' },
              //   {
              //     nome: 'Dependente da Ciclana',
              //     parentesco: 'irma',
              //     nascimento: '01/01/1990'
              //   }
              // ]

console.table(listaDependentes)

              // ┌─────────┬─────────────────────────┬────────────┬──────────────┐
              // │ (index) │          nome           │ parentesco │  nascimento  │
              // ├─────────┼─────────────────────────┼────────────┼──────────────┤
              // │    0    │ 'Fulano da Silva Sauro' │  'filho'   │ '15/09/1998' │
              // │    1    │  'Dependente da Silva'  │  'filh@'   │ '01/01/2010' │
              // │    2    │      'Ciclana Jr'       │   'irma'   │ '01/01/1990' │
              // │    3    │ 'Dependente da Ciclana' │   'irma'   │ '01/01/1990' │
              // └─────────┴─────────────────────────┴────────────┴──────────────┘