const db = require('../../config/db')
const { usuario: getUsuario } = require('../Query/usuario')
const { perfil: getPerfil } = require('../Query/perfil')

async function cadastrarPerfis(usuario_id, perfis) {
    try {
        const ids = []
        for (let filtro of perfis) {
            const perfil = await getPerfil(null, { filtro });

            if (perfil && !ids.includes(perfil.id)) {
                ids.push(perfil.id)
                await db('usuarios_perfis')
                    .insert({ usuario_id, perfil_id: perfil.id })
            }
        }
    } catch (e) {
        throw new Error(e.sqlMessage || e.message)
    }
}

module.exports = {
    async novoUsuario(_, { dados }) {
        try {
            const { nome, email, senha, perfis } = dados;

            if (await db('usuarios').where({ email }).first())
                throw new Error('Usuário já cadastrado!');
        
            let [usuario_id] = await db('usuarios').insert({ nome, email, senha });
            
            await cadastrarPerfis(usuario_id, perfis) 

            return await db('usuarios').where({ id: usuario_id}).first()
        } catch (e) {
            throw new Error(e.sqlMessage || e.message)
        }
    },

    async excluirUsuario(_, { filtro }) {
        try {
            const usuario = await getUsuario(_, { filtro });           
            
            if (usuario) {                
                await db('usuarios_perfis').delete().where({ usuario_id: usuario.id });
                await db('usuarios').delete().where({ id: usuario.id });
            }

            return usuario;
        } catch (e) {
            throw new Error(e.sqlMessage)
        }
    },

    async alterarUsuario(_, { filtro, dados }) { 
        try {
            const usuario = await getUsuario(_, { filtro });

            if (!usuario)
                return null;
            
            const { id } = usuario
            if (dados.perfis) {
                await db('usuarios_perfis').delete().where({ usuario_id: id });                
                await cadastrarPerfis(id, dados.perfis);
            }

            delete dados.perfis
            await db('usuarios').where({ id }).update(dados)

            return { ...usuario, ...dados }; 
        } catch (e) {
            throw new Error(e.sqlMessage || e.message)
        }
    }  
}