const Joi = require('joi');
const { createValidator } = require('express-joi-validation');

const idValidator = Joi.number().integer().min(1).required()
    .messages({
        'number.base': 'Route parameter should be an integer',
        'any.required': 'Route parameter not found',
    });

const songIdSchema = Joi.object({
    songId: idValidator,
});

const collectionIdSchema = Joi.object({
    collectionId: idValidator,
});

const accountIdSchema = Joi.object({
    accountId: idValidator,
});

const validator = createValidator({
    passError: true,
});

const accountIdValidator = validator.params(accountIdSchema);
const collectionIdValidator = validator.params(collectionIdSchema);
const songIdValidator = validator.params(songIdSchema);
module.exports = { accountIdValidator, collectionIdValidator, songIdValidator };
