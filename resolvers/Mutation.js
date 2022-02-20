const { v4: uuid } = require("uuid");

const Mutation = {
  addCategory: (_, { input: { name } }, { categories }) => {
    const c = categories.find(c => c.name === name);
    if (c) {
      return c;
    }

    const newCategory = {
      id: uuid(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },

  addProduct: (
    _,
    {
      input: { name, description, quantity, price, onSale, image, categoryId },
    },
    { products }
  ) => {
    // TODO: check if categoryId exists
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      onSale,
      image,
      categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },

  addReview: (
    _,
    { input: { date, title, comment, rating, productId } },
    { reviews }
  ) => {
    const newReview = {
      id: uuid(),
      title,
      comment,
      rating,
      date,
      productId,
    };

    reviews.push(newReview);

    return newReview;
  },
};

module.exports = {
  Mutation,
};
