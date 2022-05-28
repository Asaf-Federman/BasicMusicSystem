const express = require('express');
const { getActiveUsers } = require('./service');
require('express-async-errors');

const router = express.Router();

router.get('/activeUsers', getActiveUsers);

module.exports = router;
