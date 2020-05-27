const { ApolloServer, gql } = require('apollo-server')

const users_list = [
  { id: "1", nome: "Ana", email: "ana@email.com", idade: 23 },
  { id: "2", nome: "Maria", email: "maria@email.com", idade: 45 },
  { id: "3", nome: "Pedro", email: "pedro@email.com", idade: 12 },
  { id: "4", nome: "Lucia", email: "lucia@email.com", idade: 76 },
  { id: "5", nome: "Marcos", email: "marcos@email.com", idade: 43 }
];
const perfis_list = [{id: "1", nome: "Comum"}, {id: "2", nome: "Administrador"}]

const typeDefs = gql`
  type Usuario {
    id:ID
    nome:String!
    email:String!
    idade: Int!
  }

  type Perfil {
    id: ID!
    nome: String!
  }

  type Query {
    usuario(id: ID): Usuario
    usuarios: [Usuario!]

    perfil(id: ID): Perfil
    perfis: [Perfil!]
  }
`

const resolvers = {
  Query: {
    usuario: (_, { id }) => users_list.filter(user => user.id === id)[0],
    usuarios: () => users_list,
    perfil: (_, { id }) => perfis_list.filter(perfil => perfil.id === id)[0],
    perfis: () => perfis_list,
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => console.log(`Run in ${url}`))