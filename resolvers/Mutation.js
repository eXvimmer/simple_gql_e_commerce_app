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

  updateCategory: (_, { id, input }, { db }) => {
    const c = db.categories.find(c => c.id === id);
    if (c) {
      c.name = input.name ? input.name : c.name;
      return c;
    }

    return null;
  },

  updateProduct: (_, { id, input }, { db }) => {
    const p = db.products.find(p => p.id === id);
    if (p) {
      for (let k in input) {
        if (k in p) {
          p[k] = input[k] ? input[k] : p[k];
        }
      }
      return p;
    }
    return null;
  },

  updateReview: (_, { id, input }, { db }) => {
    const r = db.reviews.find(r => r.id === id);
    if (r) {
      for (let k in input) {
        if (k in r) {
          r[k] = input[k] ? input[k] : r[k];
        }
      }
      return r;
    }
    return null;
  },
};

module.exports = {
  Mutation,
};
