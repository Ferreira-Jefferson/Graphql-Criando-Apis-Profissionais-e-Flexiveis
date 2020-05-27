const { ApolloServer, gql } = require('apollo-server')

const car_list = [
  { id: 1, nome: "IX 35", marca: "Hyundai", ano: 2019, preco: 89900.01 },
  { id: 2, nome: "Sportage", marca: "Kia", ano: 2015, preco: 64900.01 },
  { id: 3, nome: "XC40", marca: "Volvo", ano: 2018, preco: 169950.01 }
];

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
    carro(id: ID): Carro
  }
`

const resolvers = {
  Query: {
    numerosMegaSena: () => new Array(6).fill().map(() => parseInt(Math.random() * 60 + 1)),
    carros: () => car_list,
    carro: (_, { id }) => car_list.filter(car => car.id == id)[0]
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => console.log(`Run in ${url}`))