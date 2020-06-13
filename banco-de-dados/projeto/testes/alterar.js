const db = require('../config/db')

const novoUsuario = {
  nome: 'Pedro',
  email: 'pedro@email.com',
  senha: 'senha'
}

async function exercicio() {
  const { qtd } = await db('usuarios')
    .count('* as qtd').first()
  
  if (qtd === 0)
    await db('usuarios').insert(novoUsuario)
  
  let { id } = await db('usuarios').select('id').limit(1).first()

  await db('usuarios').where({ id }).update({ nome: "Jefferson" })
  
  return db('usuarios').where({ id })
    .then(res => console.log(res))
    .finally(() => db.destroy())
}

exercicio()
