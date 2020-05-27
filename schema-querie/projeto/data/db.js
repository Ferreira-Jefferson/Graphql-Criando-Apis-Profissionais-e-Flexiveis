const perfis_list = [
  { id: "1", nome: "Comum" },
  { id: "2", nome: "Administrador" }
]

const users_list = [
  { id: "1", nome: "Ana", email: "ana@email.com", idade: 23, id_perfil: "1"},
  { id: "2", nome: "Maria", email: "maria@email.com", idade: 45, id_perfil: "2"},
  { id: "3", nome: "Pedro", email: "pedro@email.com", idade: 12, id_perfil: "2"},
  { id: "4", nome: "Lucia", email: "lucia@email.com", idade: 76, id_perfil: "1"},
  { id: "5", nome: "Marcos", email: "marcos@email.com", idade: 43, id_perfil: "1" }
];

module.exports = {
  perfis_list,
  users_list
}