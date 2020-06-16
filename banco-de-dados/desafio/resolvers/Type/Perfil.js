const db = require('../../config/db')

module.exports = {
  async usuarios(perfil) {
    return db('usuarios_perfis')
      .rightJoin('usuarios as u', 'usuario_id', 'u.id')
      .where({ perfil_id: perfil.id });
  }
}