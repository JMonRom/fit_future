const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
  }

  type Query {
    profiles: [User]!
    profile(UserId: ID!): User
  }

  type Mutation {
    addProfile(name: String!): User
    addSkill(UserId: ID!, skill: String!): User
    removeProfile(UserId: ID!): User
    removeSkill(UserId: ID!, skill: String!): User
  }
`;

module.exports = typeDefs;
