const db = require('./db');
const app = require('./app');
const router = require('./router');

db.connect();
app.startServer();
router.setupRoutes(app.app);