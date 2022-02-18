const { Query } = require("./Query");
const { Category } = require("./Category");
const { Product } = require("./Product");

const resolvers = {
  Query,
  Category,
  Product,
};

module.exports = { resolvers };
