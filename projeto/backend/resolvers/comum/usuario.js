const jwt = require('jwt-simple')
const { perfis: getPerfis } = require('../Type/Usuario')

module.exports = {
  async getUsuarioLogado(usuario) {
    const perfis = await getPerfis(usuario);
    const agora = Math.floor(Date.now() / 1000);

    const { id, nome, email } = usuario;

    const usuarioInfo = {
      id,
      nome,
      email,
      perfis: perfis.map(p => p.nome),
      iat: agora,
      exp: agora + (3 * 24 * 60 * 60)
    }

    const authSecret = process.env.APP_AUTH_SECRET;

    return {
      ...usuarioInfo,
      token: jwt.encode(usuarioInfo, authSecret)
    }
  }
}