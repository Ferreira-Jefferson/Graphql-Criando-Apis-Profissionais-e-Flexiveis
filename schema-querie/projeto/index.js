const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  #Pontos de entrada da API
  type Query {
    ola: String
    idade: Int
  }
`


const resolvers = {
  Query: {
    ola: () => "Hello World!",
    idade: () => Math.floor(Math.random() * 30)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})