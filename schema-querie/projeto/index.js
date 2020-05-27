const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  type Query {
    horaAtual: Date!
    usuarioLogado: Usuario
  }
`
const resolvers = {
  Query: {
    horaAtual: () => new Date(),
    usuarioLogado: () => ({
      id: 1,
      nome: "Jefferson",
      email: "jefferson@email.com",
      idade: 25,
      salario: 123.45,
      vip: true
    })
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => console.log(`Executando em ${url}`))