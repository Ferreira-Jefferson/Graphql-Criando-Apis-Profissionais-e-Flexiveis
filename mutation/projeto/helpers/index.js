const { usuarios } = require('../data/db')

function getIndex(filtro) {  
  if (!filtro) return -1;

  if (filtro.id)
    return usuarios.findIndex(user => user.id === filtro.id)
  
  else if (filtro.email)
    return usuarios.findIndex(user => user.email === filtro.email)
  
  return -1;
}

module.exports = { getIndex }