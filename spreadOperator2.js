const clientes = [
  {
    nome: "André",
    cpf: "12312312312",
    dependentes: [{
      nome: "Sara",
      parentesco: "filha",
      dataNasc: "20/03/2011"
     }, 
     {
      nome: "Samia",
      parentesco: "filha",
      dataNasc: "04/01/2014"
     }],
  },
  {
    nome: "Juliana",
    cpf: "56767867867",
    dependentes: [{
      nome: "Sophia",
      parentesco: "filha",
      dataNasc: "30/08/2020"
     }],
  }
 ]

 const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
          // O ... serve para decompor objetos quando precisamos extraí-los de um array e formar um novo array
          // no caso o novo objeto listaDependentes

 console.table(listaDependentes)

                  //  ┌─────────┬──────────┬────────────┬──────────────┐
                  //  │ (index) │   nome   │ parentesco │   dataNasc   │
                  //  ├─────────┼──────────┼────────────┼──────────────┤
                  //  │    0    │  'Sara'  │  'filha'   │ '20/03/2011' │
                  //  │    1    │ 'Samia'  │  'filha'   │ '04/01/2014' │
                  //  │    2    │ 'Sophia' │  'filha'   │ '30/08/2020' │
                  //  └─────────┴──────────┴────────────┴──────────────┘