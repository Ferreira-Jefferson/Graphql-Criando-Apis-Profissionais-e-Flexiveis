const { perfis, IDGeneratorProfile } = require('../../data/db')
const { getIndexProfile } = require('../../helpers')

module.exports = {
  novoPerfil(_, { nome }) {
    if (perfis.some(perfil => perfil.nome === nome))
      throw new Error(`Perfil [${nome}] já cadastrado`)
    const novoPerfil = {
      id: IDGeneratorProfile(),
      nome: nome
    }    
    perfis.push(novoPerfil)

    return novoPerfil
  },
  excluirPerfil(_,{ filtro }) {
    const index = getIndexProfile(filtro);
    return perfis.splice(index, index !== -1)[0];
  },
  alterarPerfil(_,{filtro, nome}) {
    const index = getIndexProfile(filtro)

    if (index < 0) return null;

    const perfilUpdated = {
      ...perfis[i],
      nome
    }    

    perfis.splice(index, 1, perfilUpdated)

    return perfilUpdated;
  }
}