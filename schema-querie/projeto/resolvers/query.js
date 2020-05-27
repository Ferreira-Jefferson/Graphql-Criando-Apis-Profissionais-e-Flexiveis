const { perfis_list, users_list } = require('../data/db')

module.exports = {
  usuario: (_, { id }) => users_list.filter(user => user.id === id)[0],
  usuarios: () => users_list,
  perfil: (_, { id }) => perfis_list.filter(perfil => perfil.id === id)[0],
  perfis: () => perfis_list,
}