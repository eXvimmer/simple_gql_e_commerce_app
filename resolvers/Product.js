const Product = {
  category: ({ categoryId }, _, { categories }) =>
    categories.find(c => c.id === categoryId),
  reviews: ({ id }, _, { reviews }) => reviews.filter(r => r.productId === id),
};

module.exports = { Product };
