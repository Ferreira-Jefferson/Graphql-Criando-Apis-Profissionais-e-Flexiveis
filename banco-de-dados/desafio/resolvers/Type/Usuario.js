const db = require('../../config/db')

module.exports = {
    async perfis(usuario) {        
        return await db('usuarios_perfis')
            .rightJoin('perfis', 'perfil_id', 'perfis.id')
            .select('perfis.*')
            .where({ usuario_id : usuario.id});      
    }
}