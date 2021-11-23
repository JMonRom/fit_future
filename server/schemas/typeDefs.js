const { Food, Matchup } = require('../models');

const resolvers = {
  
  Query: {
    tech: async () => {
      return Food.find({});
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
    createVote: async (parent, { _id, Food }) => {
      const meal = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${Food}_votes`]: 1 } },
        { new: true }
      );
      return meal;
    },
  },
};
