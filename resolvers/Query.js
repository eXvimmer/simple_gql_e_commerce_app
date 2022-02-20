const Query = {
  products: (_, { filter }, { products, reviews }) => {
    let prods = products;
    if (filter) {
      if (
        "avgRating" in filter &&
        [1, 2, 3, 4, 5].includes(filter.avgRating)
      ) {
        prods = prods.filter(p => {
          let sumRating = 0,
            numReviews = 0;
          reviews.forEach(r => {
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
  product: (_, { id }, { products }) => products.find(p => p.id === id),
  categories: (_, _a, { categories }) => categories,
  category: (_, { id }, { categories }) => categories.find(c => c.id === id),
};

module.exports = { Query };
