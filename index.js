const { ApolloServer, gql } = require("apollo-server");
const { products } = require("./db");

const typeDefs = gql`
  type Query {
    products: [Product!]!
  }

  """
  a type that describes a product
  """
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    products: () => products,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
