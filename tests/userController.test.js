const request = require('supertest');
const app = require('../src/app');

describe('User Controller', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User registered successfully');
    });

    it('should login a user', async () => {
        await request(app)
            .post('/api/users/register')
            .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });
        const response = await request(app)
            .post('/api/users/login')
            .send({ email: 'test@example.com', password: 'password123' });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User logged in successfully');
    });
});
