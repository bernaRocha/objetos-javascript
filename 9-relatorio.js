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
  depositar:function(valor){
    this.saldo += valor
  }
}

let relatorio = ''

// for ( let info in cliente) 
// {
//   relatorio += `${cliente[info]}`
// }

//console.log(relatorio)  // nomeidadecpfemailfonesdependentessaldodepositar

// for ( let info in cliente) 
// {
//   relatorio += ` - ${cliente[info]}`
// }

      //  - Fulano - 39 - 12312312334 - fulano@email.com - 552199990000,5521999990000 - [object Object],[object Object] - 100 - function(valor){
      // this.saldo += valor
      //}

for (let info in cliente){
  if(typeof cliente[info] === 'object' || typeof 
  cliente[info] === 'function') 
  {
    continue
  }else{ // quebrar a linha aqui para aparecer em uma lista com espaços
    relatorio += `   
    ${info} ==> - ${cliente[info]}
    `
  }
}

console.log(relatorio)
                            // nome ==> - Fulano

                            // idade ==> - 39

                            // cpf ==> - 12312312334

                            // email ==> - fulano@email.com
                            
                            // saldo ==> - 100
                 