const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const server = express();
const router = require('../router');

describe('story-controller', () => {
    let mongoServer;

    beforeAll(() => {
        mongoServer = new MongoMemoryServer({
            port: 27017,
            ip: '127.0.0.1',
        });

        router.setupRoutes(server);
    });

    afterAll(async (done) => {
        await mongoServer.stop();
    });

    describe('get /', () => {
        it('should return a value', async () => {
            const responseObj = await request(server).get('/api/story');
            const response = responseObj.body;

            console.log(response);

            expect(response).toEqual('story!');
        });
    });
});
