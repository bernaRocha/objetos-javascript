class Cliente{
  constructor(nome, email, cpf, saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }

  depositar(valor){
    this.saldo += valor
  }

  exibirSaldo(){
    console.log(this.saldo)
  }
}

const beltrano = new Cliente('Beltrano', 'beltrano@email.com', '12334545667', 0)

console.log(beltrano)

              // Cliente {
              //   nome: 'Beltrano',
              //   email: 'beltrano@email.com',
              //   cpf: '12334545667',
              //   saldo: '0'
              // }

beltrano.exibirSaldo()

              // 0
beltrano.depositar(100)
              

beltrano.exibirSaldo()

              //100