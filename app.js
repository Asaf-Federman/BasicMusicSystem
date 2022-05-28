/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const express = require('express');
require('express-async-errors');
const { sequelize } = require('./database');
const morganMiddleware = require('./loggers/morganMiddleware');
const logger = require('./loggers/winston');

const MOCK_DATABASE_DATA_FILE = './database/mockDatabaseData';
const PORT = parseInt(process.env.APPLICATION_PORT, 10) || 10000;
const FORCE_SYNC = (process.env.NODE_ENVIRONMENT === 'development');
const app = express();

let mockDatabaseData = null;
try {
    mockDatabaseData = require(MOCK_DATABASE_DATA_FILE);
} catch (e) {
    logger.log(`can't load ${MOCK_DATABASE_DATA_FILE} file, database mock data generation is skipped...`, e.message);
}

app.use(morganMiddleware);
app.use('/accounts', require('./api/Accounts/routes'));
app.use('/collections', require('./api/Collections/routes'));
app.use('/songs', require('./api/Songs/routes'));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
    if (err && err.error && err.error.details) {
        res.status(400).json(err.error.details);
    }

    const message = err.message || 'Failed to handle the request';
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message,
        },
    });
});

sequelize.sync({ force: FORCE_SYNC }).then(() => {
    if (mockDatabaseData) mockDatabaseData();
    app.listen(PORT, 'localhost', logger.info(`Started on port ${PORT}`));
}).catch((err) => {
    logger.error('Failed to init app:', err.message);
});
