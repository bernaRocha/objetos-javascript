const cliente = {
  nome: 'Fulano',
  idade: 39,
  cpf: '12312312334',
  email: 'fulano@email.com',
  fones: [ '552199990000', '5521999990000' ],
  dependentes: [{
    nome: 'Fulano da Silva Sauro',
              parentesco: 'filho',
              nascimento: '15/09/1998'
  }]    // dependentes se torna aqui um array
    /// aqui podemos usar funções de arrays
}

cliente.dependentes.push({
  nome:'Dependente da Silva',
  parentesco: 'filh@',
  dataNascimento: '01/01/2010'
})

console.log(cliente);

                // {
                //   nome: 'Fulano',
                //   idade: 39,
                //   cpf: '12312312334',
                //   email: 'fulano@email.com',
                //   fones: [ '552199990000', '5521999990000' ],
                //   dependentes: [
                //     {
                //       nome: 'Fulano da Silva Sauro',
                //       parentesco: 'filho',
                //       nascimento: '15/09/1998'
                //     },
                //     {
                //       nome: 'Dependente da Silva',
                //       parentesco: 'filh@',
                //       dataNascimento: '01/01/2010'
                //     }
                //   ]
                // }

const primogenito = cliente.dependentes.filter(
  maisNovo => maisNovo.nascimento === '15/09/1998')

console.log(primogenito)

            // [
            //   {
            //     nome: 'Fulano da Silva Sauro',
            //     parentesco: 'filho',
            //     nascimento: '15/09/1998'
            //   }
            // ]

console.log(primogenito[0].nome)
            // Fulano da Silva Sauro
console.log(primogenito[0].parentesco)
            // filho