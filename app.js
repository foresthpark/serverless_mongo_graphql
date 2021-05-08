const { ApolloServer } = require("apollo-server");
const connectDB = require("./config");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
