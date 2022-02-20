const Category = {
  products: ({ id: categoryId }, { filter }, { products, reviews }) => {
    let prods = products.filter(p => p.categoryId == categoryId);

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
    }

    return filter && "onSale" in filter
      ? prods.filter(p => p.onSale === filter.onSale)
      : prods;
  },
};

module.exports = { Category };
