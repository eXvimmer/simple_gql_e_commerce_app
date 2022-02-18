const { gql } = require("apollo-server");

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

module.exports = {
  typeDefs,
};
