const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
  }

  type Query {
    profiles: [User]!
    profile(UserId: ID!): User
    foods: String
  }

  type Mutation {
    addProfile: async (parent, args) => {
      const addProfile = await 
    }
    addFood: 
  }
`;

module.exports = typeDefs;
