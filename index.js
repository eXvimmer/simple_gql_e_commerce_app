const { ApolloServer, gql } = require("apollo-server");
const { products } = require("./db");

const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  """
  a type that describes a product
  """
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    // product: (parent, args, context, info) => {},
    product: (_, { id }) => products.find(p => p.id === id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
