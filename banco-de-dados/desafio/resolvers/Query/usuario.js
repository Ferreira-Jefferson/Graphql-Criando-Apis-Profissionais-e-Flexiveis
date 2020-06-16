const db = require('../../config/db')

module.exports = {
    usuarios() {
        return db('usuarios').select('*');
    },
    async usuario(_, { filtro }) {
        let usuario;

        if (filtro.id)
            usuario = await db('usuarios').where({ id: filtro.id }).first();
        
        if (filtro.email && !usuario) 
            usuario = await db('usuarios').where({ email: filtro.email }).first();
        
        return usuario;
    },
}
