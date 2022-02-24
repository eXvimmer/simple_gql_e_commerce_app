const Query = {
  products: (_, { filter }, { db }) => {
    let prods = db.products;
    if (filter) {
      if (
        "avgRating" in filter &&
        [1, 2, 3, 4, 5].includes(filter.avgRating)
      ) {
        prods = prods.filter(p => {
          let sumRating = 0,
            numReviews = 0;
          db.reviews.forEach(r => {
            if (r.productId === p.id) {
              sumRating += r.rating;
              numReviews++;
            }
          });
          const avgProdcutRating = sumRating / numReviews;
          return avgProdcutRating >= filter.avgRating;
        });
      }

      if ("onSale" in filter) {
        prods = prods.filter(p => p.onSale === filter.onSale);
      }
    }
    return prods;
  },
  product: (_, { id }, { db }) => db.products.find(p => p.id === id),
  categories: (_, _a, { db }) => db.categories,
  category: (_, { id }, { db }) => db.categories.find(c => c.id === id),
};

module.exports = { Query };
