const express = require('express');
const { accountIdValidator } = require('../validators/validators');
const { getCollectionsByAccountId, getSongsByAccountId, getActiveAccounts } = require('./service');
require('express-async-errors');

const router = express.Router();

router.get('/activeAccounts', getActiveAccounts);
router.get('/:accountId/collections', accountIdValidator, getCollectionsByAccountId);
router.get('/:accountId/songs', accountIdValidator, getSongsByAccountId);

module.exports = router;
