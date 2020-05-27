const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const perfis_list = [{ id: "1", nome: "Comum" }, { id: "2", nome: "Administrador" }]

const users_list = [
  { id: "1", nome: "Ana", email: "ana@email.com", idade: 23, id_perfil: "1"},
  { id: "2", nome: "Maria", email: "maria@email.com", idade: 45, id_perfil: "2"},
  { id: "3", nome: "Pedro", email: "pedro@email.com", idade: 12, id_perfil: "2"},
  { id: "4", nome: "Lucia", email: "lucia@email.com", idade: 76, id_perfil: "1"},
  { id: "5", nome: "Marcos", email: "marcos@email.com", idade: 43, id_perfil: "1" }
];

const resolvers = {
  Usuario: {
    perfil: ({id_perfil}) => perfis_list.filter(perfil => perfil.id === id_perfil)[0]
  },

  Query: {
    usuario: (_, { id }) => users_list.filter(user => user.id === id)[0],
    usuarios: () => users_list,
    perfil: (_, { id }) => perfis_list.filter(perfil => perfil.id === id)[0],
    perfis: () => perfis_list,
  }
}

const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers
})

server.listen().then(({url}) => console.log(`Run in ${url}`))