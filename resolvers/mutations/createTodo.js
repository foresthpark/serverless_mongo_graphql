module.exports = async (_, { body }, { models }) => {
  const newTodo = await models.Todo.create(body);
  return newTodo;
};
