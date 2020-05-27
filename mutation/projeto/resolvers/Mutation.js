const { usuarios, IDGenerator } = require('../data/db')

module.exports = {
  novoUsuario(_, { nome, email, idade }) {
    if (usuarios.some(user => user.email === email))
      throw new Error("Usuário já cadastrados!")
    
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
  }
}