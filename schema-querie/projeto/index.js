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

  type Produto {
    id: ID
    nome: String!
    preco: Float!
    desconto: Int
    precoComDesconto: Float
  }

  type Query {
    horaAtual: Date!
    usuarioLogado: Usuario
    produtoEmDestaque: [Produto]
  }
`
const resolvers = {
  Usuario: {
    salario: usuario => usuario.salario_real //Resolvendo campo com nome diferente
  },
  Produto: {
    precoComDesconto: produto => produto.desconto ?
      (produto.preco * (1 - produto.desconto / 100)).toFixed(2)
      : produto.preco
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
    }),
    produtoEmDestaque: () => [{
        id: 1,
        nome: "TV 29'",
        preco: 1002.34,
        desconto: 10
      },
      {
        id: 1,
        nome: "Notebook'",
        preco: 2354.76
      }]
  } 
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => console.log(`Executando em ${url}`))