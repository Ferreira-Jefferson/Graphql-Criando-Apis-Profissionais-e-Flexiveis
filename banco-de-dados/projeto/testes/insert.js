const db = require('../config/db')

const novoPerfil = {
  nome: 'visitante',
  rotulo: 'Visitante'
}

//Modelo de inserção 1
const perfilSU = {
  nome: `root-${Math.random()}`,
  rotulo: 'Super Usuário'
}
console.log(perfilSU)
// db('perfis').insert(novoPerfil)
//   .then(resp => console.log(resp))
//   .catch(error => console.log(error.sqlMessage))
//   .finally(() => db.destroy())