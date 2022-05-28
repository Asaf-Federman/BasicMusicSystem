const express = require('express');
require('express-async-errors');

const { accountIdValidator, collectionIdValidator } = require('../validators/validators');
const { getSongs, getSongsByCollectionId, getSongsByAccountId } = require('./service');

const router = express.Router();

router.get('/', getSongs);
router.get('/byCollections/:collectionId', collectionIdValidator, getSongsByCollectionId);
router.get('/byAccounts/:accountId', accountIdValidator, getSongsByAccountId);

module.exports = router;
