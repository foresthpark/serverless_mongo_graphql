module.exports = async (_, { id, body }, { models }) => {
  const newTodo = await models.Todo.create({ _id: id });

  Object.keys(body).forEach((val) => {
    newTodo[val] = body[val];
  });

  const updatedTodo = await newTodo.save();

  return updatedTodo;
};
