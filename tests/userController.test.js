import request from 'supertest';
import app from '../src/config/server.js';

describe('User Controller', () => {
  it('should register a user', async () => {
    const res = await request(app).post('/api/users/register').send({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('email');
  });
});
