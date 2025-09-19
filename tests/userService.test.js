import userService from '../src/services/userService.js';
import mongoose from 'mongoose';
import User from '../src/models/userModel.js';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await User.deleteMany({});
  await mongoose.disconnect();
});

describe('User Service', () => {
  it('should register and login a user', async () => {
    const user = await userService.register({
      name: 'Test',
      email: 'test@domain.com',
      password: 'pass123',
    });
    expect(user.email).toBe('test@domain.com');

    const token = await userService.login({
      email: 'test@domain.com',
      password: 'pass123',
    });
    expect(token).toBeDefined();
  });
});
