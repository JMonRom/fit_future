const { , Profiles } = require('../models');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profiles.find({});
    },
    foods: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Food.find(params);
    },
  },
  Mutation: {
    addProfile: async (parent, {name}) => {
      return Profiles.create({name})
    },
    addFood: async (parent, { _id, Food }) => {
      const food = await Food.findOneAndUpdate(
        { _id },
        { $inc: { [`Food Added:${Food}`]: 1 } },
        { new: true }
      );
      return food;
    },
  },
};

module.exports = resolvers;