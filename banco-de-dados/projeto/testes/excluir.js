const db = require('../config/db')

//Excluir tudo
// db('usuarios')
//   .delete()
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

  
// //Excluir por id
db('usuarios')
  .where({ id: 2 })
  .delete()
  .then(res => console.log(res))
  .finally(() => db.destroy())