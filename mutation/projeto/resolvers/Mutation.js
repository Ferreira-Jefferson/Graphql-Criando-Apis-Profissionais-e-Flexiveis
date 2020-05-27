const { usuarios, IDGenerator } = require('../data/db')

module.exports = {
  novoUsuario(_, { nome, email, idade }) {
    console.log(nome, email, idade)
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
  }
}