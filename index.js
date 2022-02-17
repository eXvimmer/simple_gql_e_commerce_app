const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String!
    favNum: Int
    price: Float
    isCool: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World!",
    favNum: () => 13,
    price: () => 9.99,
    isCool: () => true,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
