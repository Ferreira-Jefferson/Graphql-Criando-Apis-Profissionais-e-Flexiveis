const db = require('../config/db')

//Modelo de inserção 1
// const novoPerfil = {
//   nome: 'visitante',
//   rotulo: 'Visitante'
// }
// db('perfis').insert(novoPerfil)
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error.sqlMessage))
//   .finally(() => db.destroy())


//Modelo de inserção 2
const perfilSU = {
  nome: `root-${Math.random()}`,
  rotulo: 'Super Usuário'
}
db.insert(perfilSU).into('perfis')
  .then(resp => console.log(resp))
  .catch(error => console.log(error.sqlMessage))
  .finally(() => db.destroy())


