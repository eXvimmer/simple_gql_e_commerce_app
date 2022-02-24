const Product = {
  category: ({ categoryId }, _, { db }) =>
    db.categories.find(c => c.id === categoryId),
  reviews: ({ id }, _, { db }) => db.reviews.filter(r => r.productId === id),
};

module.exports = { Product };
