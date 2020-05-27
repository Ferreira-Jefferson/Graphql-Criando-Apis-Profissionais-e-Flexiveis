const { usuarios, IDGenerator } = require('../data/db')

function getIndex(filtro) {  
  if (!filtro) return -1;

  if (filtro.id)
    return usuarios.findIndex(user => user.id === filtro.id)
  
  else if (filtro.email)
    return usuarios.findIndex(user => user.email === filtro.email)
  
  return -1;
}

module.exports = {
  novoUsuario(_, { dados }) {
    if (usuarios.some(user => user.email === dados.email))
      throw new Error("Usuário já cadastrados!")
    
    const { nome, email, idade } = dados;    
    
    const novoUsuario = {
      id: IDGenerator(),
      nome,
      email,
      idade,
      perfil_id: 1,
      status: "ATIVO"
    }
    usuarios.push(novoUsuario)

    return novoUsuario;
  },
  excluirUsuario(_, { filtro }) {
    const index = getIndex(filtro)
    return usuarios.splice(index, index !== -1)[0]
  },
  alterarUsuario(_, { id, nome, email, idade }) {
    const index = usuarios.findIndex(user => user.id === id);

    if (index < 0) return null;

    const userUpdated = {
        ...usuarios[index],
        nome, email, idade
      }

    usuarios.splice(index, 1, userUpdated);    
    return userUpdated;   
  }
}