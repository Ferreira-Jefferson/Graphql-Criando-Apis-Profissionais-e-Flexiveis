const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  type Query {
    horaAtual: Date
  }
`

const resolvers = {
  Query: {
    horaAtual: () => new Date()
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => console.log(`Executando em ${url}`))