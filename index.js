const { ApolloServer, gql } = require("apollo-server");
const { products, categories } = require("./db");

const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  """
  a type that describes a product
  """
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
  }

  """
  a type that describes each category
  """
  type Category {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find(p => p.id === id),
    categories: () => categories,
    category: (_, { id }) => categories.find(c => c.id === id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
