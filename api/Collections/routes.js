const express = require('express');
require('express-async-errors');

const { collectionIdValidator } = require('../validators/validators');
const { getEmptyCollections, getSongsByCollectionId } = require('./service');

const router = express.Router();

router.get('/empty', getEmptyCollections);
router.get('/:collectionId/songs', collectionIdValidator, getSongsByCollectionId);

module.exports = router;
