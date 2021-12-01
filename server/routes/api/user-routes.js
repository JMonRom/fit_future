const router = require('express').Router();

const {
  createUser,
  getSingleUser,
  saveFood,
  deleteFood,
  login
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware, saveFood);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/foods/:foodId').delete(authMiddleware, deleteFood);

module.exports = router;