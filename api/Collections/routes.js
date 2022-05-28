const express = require('express');
require('express-async-errors');

const { accountIdValidator, songIdValidator } = require('../validators/validators');
const { getEmptyCollections, getCollectionsByAccountId, getCollectionsBySongId } = require('./service');

const router = express.Router();

router.get('/empty', getEmptyCollections);
router.get('/byAccounts/:accountId', accountIdValidator, getCollectionsByAccountId);
router.get('/bySongs/:songId', songIdValidator, getCollectionsBySongId);

module.exports = router;
