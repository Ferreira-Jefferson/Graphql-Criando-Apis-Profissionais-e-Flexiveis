const db = require('../../config/db')
const { perfil: getPerfil } = require('../Query/perfil')

module.exports = {
    async novoPerfil(_, { dados }) {
        try {
            const { nome, rotulo } = dados;

            const id = await db('perfis').insert({ nome, rotulo });

            return db('perfis').where({ id }).first();
        } catch (e) {
            throw new Error(e.sqlMessage);
        }
    },

    async excluirPerfil(_, { filtro }) {
        try {
            const perfil = await getPerfil(_, { filtro });            
        
            if (perfil) {                
                if (['admin', 'master'].includes(perfil.nome))
                    throw new Error(`Permissão inválida para exclusão do usuário [${perfil.nome}]`)
                
                await db('usuarios_perfis').delete().where({ perfil_id: perfil.id })
                await db('perfis').delete().where({ id: perfil.id })
            }
        
            return perfil;
        } catch (e) {
            throw new Error(e.sqlMessage || e.message);
        }
    },

    async alterarPerfil(_, { filtro, dados }) {
        try {
            const antigo = await getPerfil(_, { filtro });

            if (!antigo)
                throw new Error('Perfil não encontrado.')                

            await db('perfis').update(dados).where({ id: antigo.id });

            return { ...antigo, ...dados };
        } catch (e) {
            throw new Error(e.sqlMessage || e.message);
        }
    }
}