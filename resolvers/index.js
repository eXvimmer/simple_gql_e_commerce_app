const { Query } = require("./Query");
const { Mutation } = require("./Mutation");
const { Category } = require("./Category");
const { Product } = require("./Product");

const resolvers = {
  Query,
  Mutation,
  Category,
  Product,
};

module.exports = { resolvers };
