const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
  }

  type Query {
    profiles: Profile
    profile(UserId: ID!): Profile
    foods: String
  }

  type Mutation {
    addProfile(names: String!): Profiles
    addFood: String
  }
`;

module.exports = typeDefs;
