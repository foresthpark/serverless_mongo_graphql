module.exports = async (_, { id, body }, { models }) => {
  const newTodo = await models.Todo.deleteOne({ _id: id });

  return { id };
};
