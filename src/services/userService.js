import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';

const generateToken = (id) => jwt.sign({ id }, config.jwtSecret, { expiresIn: '1d' });

const register = async ({ name, email, password }) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error('User already exists');
  const user = await User.create({ name, email, password });
  return { id: user._id, name: user.name, email: user.email };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid credentials');
  }
  return generateToken(user._id);
};

const getProfile = async (id) => {
  const user = await User.findById(id).select('-password');
  if (!user) throw new Error('User not found');
  return user;
};

export default { register, login, getProfile };
