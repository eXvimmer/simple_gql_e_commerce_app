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
};

module.exports = {
  Mutation,
};
