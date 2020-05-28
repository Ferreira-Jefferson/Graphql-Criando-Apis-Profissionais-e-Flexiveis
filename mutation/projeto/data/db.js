let idUser = 0, idProfile = 0;
const IDGeneratorUser = () => ++idUser;
const IDGeneratorProfile = () => ++idProfile;

const perfis = [
    { id: IDGeneratorProfile(), nome: 'comum' },
    { id: IDGeneratorProfile(), nome: 'administrador' }
]

const usuarios = [{
    id: IDGeneratorUser(),
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: IDGeneratorUser(),
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: IDGeneratorUser(),
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis, IDGeneratorUser, IDGeneratorProfile }