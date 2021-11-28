const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
  }

  type Query {
    profiles: [Profiles]!
    profile(UserId: ID!): User
    foods: String
  }

  type Mutation {
    addProfile(name:String!): Profiles
    # addFood: 
  }
`;

module.exports = typeDefs;
