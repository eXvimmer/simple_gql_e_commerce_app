const Category = {
  products: ({ id: categoryId }, _, { products }) =>
    products.filter(p => p.categoryId == categoryId),
};

module.exports = { Category };
