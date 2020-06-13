const db = require('../config/db')

// db('perfis')
//   .then(res => res.map(p => p.nome))
//   .then(res => console.log(res))
//   .finally(() => db.destroy());


// db('perfis')
//   .select('id','nome')
//   .then(res => console.log(res))
//   .finally(()=> db.destroy())
 

// db.select('id','nome').from('perfis ')
//   .then(res => console.log(res))
//   .finally(()=> db.destroy())

// db.select('id', 'nome').from('perfis ')
//   .limit(4).offset(2) // Retornar 4 resultados desconsiderendo as duas primeiras tuplas
//   .then(res => console.log(res))
//   .finally(()=> db.destroy())

db('perfis')
  // .where({ id: 2 })
  // .where('id', '=', 2)
  // .where('nome', 'like', '_a%')
  // .whereNot({ id: 2 })
  .whereIn('id', [1, 8, 9])
  .then(res => console.log(res))
  .finally(()=> db.destroy())