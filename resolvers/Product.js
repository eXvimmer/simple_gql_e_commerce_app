const { categories } = require("../db");

const Product = {
  category: ({ categoryId }) => categories.find(c => c.id === categoryId),
};

module.exports = { Product };
