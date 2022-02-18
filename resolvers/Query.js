const Query = {
  products: (_, a, { products }) => products,
  product: (_, { id }, { products }) => products.find(p => p.id === id),
  categories: (_, a, { categories }) => categories,
  category: (_, { id }, { categories }) => categories.find(c => c.id === id),
};

module.exports = { Query };
