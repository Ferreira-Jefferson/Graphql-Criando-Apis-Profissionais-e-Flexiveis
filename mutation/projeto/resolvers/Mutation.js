const { usuarios, IDGenerator } = require('../data/db')

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
  excluirUsuario(_, { id }) {
    const index = usuarios.findIndex(user => user.id === id)
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