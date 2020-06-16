const db = require('../../config/db')

module.exports = {
    perfis() {
        return db('perfis').select('*');
    },
    async perfil(_, { filtro }) {
        let result;

        if (filtro.id)
            result = await db('perfis').where({ id: filtro.id }).first();
        
        if (filtro.nome && !result)
            result = await db('perfis').where({ nome: filtro.nome }).first();
        
        return result;
    }
}