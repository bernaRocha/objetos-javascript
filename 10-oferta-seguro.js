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

const propsClientes = Object.keys(cliente)
          // retorna as chaves do objeto
console.log(propsClientes)

              // [
              //   'nome',
              //   'idade',
              //   'cpf',
              //   'email',
              //   'fones',
              //   'dependentes',
              //   'saldo',
              //   'depositar'
              // ]

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj)
  if(propsClientes.includes('dependentes')) // Se nas propsClientes há a chave dependentes
  {
    console.log(`Oferta de seguro de vida para ${obj.nome} `)
  }
  
}

oferecerSeguro(cliente)  // Oferta de seguro de vida para Fulano