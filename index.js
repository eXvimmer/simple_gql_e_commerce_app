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
    category: Category
  }

  """
  a type that describes each category
  """
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find(p => p.id === id),
    categories: () => categories,
    category: (_, { id }) => categories.find(c => c.id === id),
  },
  Category: {
    products: ({ id: categoryId }) =>
      products.filter(p => p.categoryId == categoryId),
  },
  Product: {
    category: ({ categoryId }) => categories.find(c => c.id === categoryId),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
