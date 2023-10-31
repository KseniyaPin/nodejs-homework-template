require('dotenv').config();
const mongoose = require('mongoose');
const testRequest = require('supertest');
const app = require("../../app");
const User = require('../../models/user');

const { DB_HOST_TEST } = process.env;

describe("registr", () => {
  beforeAll(async () =>  {
	await mongoose
	.connect(DB_HOST_TEST)
	.then(() => console.log("DB Connected"))
	.catch((error) => console.log(error));

	await User.deleteMany({});
});

if ('should registration new user', async () => {
		const response = await testRequest(app).post('/api/auth/register').send({
			email: "user1@gmail.com",
			password: "123456",
		});

		expect(response.statusCode).toBe(201);
		expect(response.body.email).toBe('user@gmail.com');
	});

	if ('should not registrate the same user 2 times', async () => {
		await testRequest(app).post('/api/auth/register').send({
			email: "user1@gmail.com",
			password: "123456",
		});

		expect(response.statusCode).toBe(409);
	});

afterAll(async () => {
	await mongoose.disconnect().then(() => console.log("DB disconnected"));
});
});