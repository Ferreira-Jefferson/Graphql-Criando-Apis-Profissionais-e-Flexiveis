const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float #Nome que deve ser buscado na API
    vip: Boolean
  }

  type Query {
    horaAtual: Date!
    usuarioLogado: Usuario
  }
`
const resolvers = {
  Usuario: {
    salario: usuario => usuario.salario_real //Resolvendo campo com nome diferente
  },
  Query: {
    horaAtual: () => new Date(),
    usuarioLogado: () => ({
      id: 1,
      nome: "Jefferson",
      email: "jefferson@email.com",
      idade: 25,
      salario_real: 123.45, //Simulando: Campo com nome diferente no banco
      vip: true
    })
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => console.log(`Executando em ${url}`))