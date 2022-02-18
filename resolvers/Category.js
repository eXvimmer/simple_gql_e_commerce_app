const { products, categories } = require("../db");

const Category = {
  products: ({ id: categoryId }) =>
    products.filter(p => p.categoryId == categoryId),
};

module.exports = { Category };
