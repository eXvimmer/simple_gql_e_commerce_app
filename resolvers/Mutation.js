const { v4: uuid } = require("uuid");

const Mutation = {
  addCategory: (_, { input: { name } }, { db }) => {
    const c = db.categories.find(c => c.name === name);
    if (c) {
      return c;
    }

    const newCategory = {
      id: uuid(),
      name,
    };

    db.categories.push(newCategory);

    return newCategory;
  },

  addProduct: (
    _,
    {
      input: { name, description, quantity, price, onSale, image, categoryId },
    },
    { db }
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
    db.products.push(newProduct);
    return newProduct;
  },

  addReview: (
    _,
    { input: { date, title, comment, rating, productId } },
    { db }
  ) => {
    const newReview = {
      id: uuid(),
      title,
      comment,
      rating,
      date,
      productId,
    };

    db.reviews.push(newReview);

    return newReview;
  },

  deleteCategory: (_, { id }, { db }) => {
    db.categories = db.categories.filter(c => c.id != id);
    db.products = db.products.map(p => {
      if (p.categoryId === id) {
        return {
          ...p,
          categoryId: null,
        };
      } else {
        return p;
      }
    });
    return true;
  },

  deleteProduct: (_, { id }, { db }) => {
    db.products = db.products.filter(p => p.id !== id);
    db.reviews = db.reviews.filter(r => r.productId !== id);
    return true;
  },

  deleteReview: (_, { id }, { db }) => {
    db.reviews = db.reviews.filter(r => r.id !== id);
    return true;
  },
};

module.exports = {
  Mutation,
};
