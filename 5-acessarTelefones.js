// Como adicionar vários telefones no objeto.

const cliente = {
  nome: 'Fulano',
  idade: 39,         
  cpf: '12312312334',
  email: 'fulano@email.com',
  fones: ['552199990000', '5521999990000']
}

cliente.fones.forEach(fone => console.log(fone))

                // 552199990000
                // 5521999990000
                
console.log(cliente.fones[1])
                // 5521999990000