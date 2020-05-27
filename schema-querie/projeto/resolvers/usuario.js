const { perfis_list } = require('../data/db')

module.exports = {  
  perfil: ({ id_perfil }) =>
    perfis_list.filter(perfil => perfil.id === id_perfil)[0]
}