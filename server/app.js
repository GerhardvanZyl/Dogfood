const express = require('express');
const os = require('os');
const router = require('./controllers/story-controller');
const app = express();
const port = 3000;
const storyController = require('./controllers/story-controller');

function startServer(){
    app.listener = app.listen(3000, () => {
        listNetworkInterfaces();
    });
}

function listNetworkInterfaces() {
    const interfaces = os.networkInterfaces();

    let usableInterfaces = {};
    for (const name in interfaces) {
        let foundInterfaces = interfaces[name].find((i) => {
            return i.family === 'IPv4' && i.internal === false;
        });

        if (foundInterfaces) usableInterfaces[name] = foundInterfaces;
    }

    console.log(`Listening on http://127.0.0.1:${port}`);
    for (let i in usableInterfaces) {
        console.log(`http://${usableInterfaces[i].address}:${port}`);
    }
}

module.exports = {
    app,
    startServer
};
