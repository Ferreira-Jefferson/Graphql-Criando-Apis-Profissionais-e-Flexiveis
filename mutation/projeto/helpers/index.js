const { usuarios, perfis } = require('../data/db')

function getIndexUser(filtro) {  
  if (!filtro) return -1;

  if (filtro.id)
    return usuarios.findIndex(user => user.id === filtro.id)
  
  else if (filtro.email)
    return usuarios.findIndex(user => user.email === filtro.email)
  
  return -1;
}

function getIndexProfile(filtro) {  
  if (!filtro) return -1;

  if (filtro.id)
    return perfis.findIndex(user => user.id === filtro.id)
  
  else if (filtro.nome)
    return perfis.findIndex(user => user.nome === filtro.nome)
  
  return -1;
}

module.exports = { getIndexUser,  getIndexProfile }