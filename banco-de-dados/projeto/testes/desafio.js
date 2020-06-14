const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
    let id  = await db('usuarios').select('id').where({ email }).first();

    if (id) {
        await db('usuarios').update({ nome, senha }).where({ id });
        id = id.id
    }
    else
        [ id ] = await db('usuarios').insert({ nome, email, senha });
    
    return await db('usuarios').where({ id }).first();;  
}

async function salvarPerfil(nome, rotulo) {
    let id = await db('perfis').select('id').where({ nome }).first();

    if (id) {
        await db('perfis').update({ rotulo }).where({ id });
        id = id.id;        
    }
    else
        [ id ] = await db('perfis').insert({ nome, rotulo });
    
    return await db('perfis').where({ id }).first();
}

async function adicionarPerfis(usuario, ...perfis) {
    await db('usuarios_perfis').where({ usuario_id: usuario.id }).delete();

    for (let perfil of perfis)
        await db('usuarios_perfis')
            .insert({ usuario_id: usuario.id, perfil_id: perfil.id });
}

async function executar() {
    const usuario = await salvarUsuario('Anfaf29',
        'ana@emojpresa.cfdadsfafom.bfrfasdf2j9', '12345f6f2')
    const perfilA = await salvarPerfil('rhffasd2f9', 'Pessoafl2')
    const perfilB = await salvarPerfil('finfasd2ff9', 'Finanfceiro2')

    console.log("user",usuario)
    console.log("profile", perfilA)
    console.log("profile", perfilB)

    await adicionarPerfis(usuario, perfilA, perfilB)
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())