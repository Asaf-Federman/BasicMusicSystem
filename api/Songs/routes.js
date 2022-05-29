const express = require('express');
require('express-async-errors');

const { songIdValidator } = require('../validators/validators');
const { getSongs, getCollectionsBySongId } = require('./service');

const router = express.Router();

router.get('/', getSongs);
router.get('/:songId/collections', songIdValidator, getCollectionsBySongId);

module.exports = router;
