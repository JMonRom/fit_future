const { User } = require('../models');

const { signToken } = require('../utils/auth');

module.exports = {
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({message: 'Cannot find user with this ID!'});
    }
    res.json(foundUser);
  },

  async createUser({ body }, res) {
    const user = await User.create(body);

    if(!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  async login({body}, res) {
    const user = await User.findOne({ $or: [{ username: body.username}, {email: body.email }] });
    if(!user) {
      return res.status(400).json({ message: "Can't find this user"});
    }

    const correctPW = await user.isCorrectPassword(body.password);

    if (!correctPW) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  async saveFood({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        {_id: user._id},
        { $addToSet: { savedFoods: body}},
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    }catch(err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  async deleteFood({ user, params}, res) {
    const updatedUser= await User.findOneAndUpdate(
      {_id: user._id},
      { $pull: { savedFoods: {foodId: params.foodId }} },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Couldn't find user with this ID!"})
    }
    return res.json(updatedUser);
  },
};