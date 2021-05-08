const { ApolloServer } = require("apollo-server-lambda");
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

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: false,
  },
  endpointURL: "/graphql",
});
