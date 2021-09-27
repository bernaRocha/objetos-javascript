const cliente = {
  nome: 'Fulano',
  idade: 39,         
  cpf: '12312312334',
  email: 'fulano@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']

console.log(cliente[chaves[0]])  // Fulano
  // chaves[0] é o nome, cliente.nome = Fulano

    // Quando não sabemos o nome da chave a acessar

  //forEach é um método de array
            //info é um parâmetro, não é palavra reservada
chaves.forEach(info => console.log(cliente[info]))

    // Fulano
    // 39
    // 12312312334
    // fulano@email.com

    