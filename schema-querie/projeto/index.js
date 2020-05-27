const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Carro {
    id: ID
    nome: String!
    marca: String!
    ano: Int!
    preco: Float
  }

  type Query {
    numerosMegaSena: [Int!]
    carros: [Carro!]!
  }
`

const resolvers = {
  Query: {
    numerosMegaSena: () => new Array(6).fill().map(() => parseInt(Math.random() * 60 + 1)),
    carros: () => [
      { id: 1, nome: "IX 35", marca: "Hyundai", ano: 2019, preco: 89900.01},
      { id: 2, nome: "Sportage", marca: "Kia", ano: 2015, preco: 64900.01}
    ]
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => console.log(`Run in ${url}`))