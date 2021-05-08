const { gql } = require("apollo-server");

module.exports = gql`
  type Todo {
    id: ID!
    body: String!
    important: Boolean
    done: Boolean
  }

  type Query {
    getTodos: [Todo]
  }

  input CreateTodo {
    body: String!
  }

  input UpdateTodo {
    id: ID!
    body: String!
  }

  input DeleteTodo {
    id: ID!
  }

  type Mutation {
    createTodo(body: CreateTodo): Todo!
    updateTodo(id: ID, body: UpdateTodo): Todo!
    deleteTodo(id: ID): Todo!
  }
`;
