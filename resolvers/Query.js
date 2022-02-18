const { products, categories } = require("../db");

const Query = {
  products: () => products,
  product: (_, { id }) => products.find(p => p.id === id),
  categories: () => categories,
  category: (_, { id }) => categories.find(c => c.id === id),
};

module.exports = { Query };
