const { Todo } = require("../models");

const createTodo = async (newTodo) => {
  try {
    return Todo.create(newTodo);
  } catch (err) {
    throw err;
  }
};

module.exports = { createTodo };
