const Category = {
  products: ({ id: categoryId }, { filter }, { products }) => {
    const prods = products.filter(p => p.categoryId == categoryId);
    return filter ? prods.filter(p => p.onSale === filter.onSale) : prods;
  },
};

module.exports = { Category };
