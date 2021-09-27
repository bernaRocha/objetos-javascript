const cliente = {
  nome: 'Fulano',
  idade: 39,         
  cpf: '12312312334',
  email: 'fulano@email.com'
}

console.log(cliente.nome)
console.log(`Meu nome é: ${cliente.nome} e eu tenho ${cliente.idade} anos.`)
console.log(cliente.cpf.substring(0,3)) // começa no array de indice 0 e para no 3


console.log(cliente)