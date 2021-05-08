module.exports = async (_, {}, { models }) => {
  return await models.Todo.find({});
};
