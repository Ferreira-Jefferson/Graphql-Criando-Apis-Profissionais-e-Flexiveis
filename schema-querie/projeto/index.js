const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const resolvers = require('./resolvers')
const typeDefs = importSchema('./schema/index.graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => console.log(`Run in ${url}`))