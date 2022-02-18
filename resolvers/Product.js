const Product = {
  category: ({ categoryId }, _, { categories }) =>
    categories.find(c => c.id === categoryId),
};

module.exports = { Product };
