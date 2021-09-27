// Faltam campos a serem adicionados

const cliente = {
  nome: 'Fulano',
  idade: 39,         
  cpf: '12312312334',
  email: 'fulano@email.com'
}

console.log(cliente)

              // {
              //   nome: 'Fulano',
              //   idade: 39,
              //   cpf: '12312312334',
              //   email: 'fulano@email.com'
              // }

// Para adicionar uma propriedade
cliente.fone ='991115443'
console.log(cliente)

              // {
              //   nome: 'Fulano',
              //   idade: 39,
              //   cpf: '12312312334',
              //   email: 'fulano@email.com',
              //   fone: '991115443'
              // }

cliente.fone = '99000000'  //atualização do valor
console.log(cliente)      

              // {
              //   nome: 'Fulano',
              //   idade: 39,
              //   cpf: '12312312334',
              //   email: 'fulano@email.com',
              //   fone: '99000000'
              // }

// Para deletar uma propriedade
delete cliente.fone

console.log(cliente)

                // {
                //   nome: 'Fulano',
                //   idade: 39,
                //   cpf: '12312312334',
                //   email: 'fulano@email.com'
                // }