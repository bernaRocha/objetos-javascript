const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro"
 }
 
 const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2"
 }

const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro);

          // {
          //   fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
          //   equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
          // }

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)   
// Só é possível ao comentar as linhas 11 e 12 para não dar erro de sintaxe
            
            // Junta o const fichaGuerreiro e equipoGuerreiro
            
            // {
            //   nome: 'Aragorn',
            //   classe: 'guerreiro',
            //   espada: 'Andúril',
            //   capa: 'capa élfica +2'
            // }