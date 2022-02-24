const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { db } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
