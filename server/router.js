const express = require('express');
const storyController = require('./controllers/story-controller');

function setupRoutes(app) {
    app.use('/api/story', storyController);
}

module.exports = {
    setupRoutes
}