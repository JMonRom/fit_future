const { User, Matchup } = require('../models');

const resolvers = {
  Query: {
    tech: async () => {
      return User.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    addFood: async (parent, { _id, Food }) => {
      const food = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`Food Added:${Food}`]: 1 } },
        { new: true }
      );
      return food;
    },
  },
};

module.exports = resolvers;