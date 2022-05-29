const { isEmpty } = require('lodash');
const { accounts, collections, songs } = require('../../database').models;

async function getActiveAccounts(req, res) {
    let status = 200;
    const queryResponse = await accounts.findAll({
        where: {
            isActive: true,
        },
    });

    if (isEmpty(queryResponse)) {
        status = 404;
    }

    return res.status(status).json(queryResponse);
}

async function getSongsByAccountId(req, res) {
    const { accountId } = req.params;
    let status = 200;
    const queryResponse = await songs.findAll({
        include: {
            model: collections,
            attributes: [],
            where: {
                accountId,
            },
        },
    });

    if (isEmpty(queryResponse)) {
        status = 404;
    }

    return res.status(status).json(queryResponse);
}

async function getCollectionsByAccountId(req, res) {
    const { accountId } = req.params;

    let status = 200;
    const queryResponse = await collections.findAll({
        where: {
            accountId,
        },
    });

    if (isEmpty(queryResponse)) {
        status = 404;
    }

    return res.status(status).json(queryResponse);
}

module.exports = {
    getActiveAccounts,
    getSongsByAccountId,
    getCollectionsByAccountId,
};
