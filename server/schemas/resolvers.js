const { User, Profiles } = require('../models');

const resolvers = {
  Query: {
    profiles: async () => {
      return User.find({});
    },
    foods: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    addProfile: async (parent, args) => {
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