const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { products, categories } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    products,
    categories,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
