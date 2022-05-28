const { isEmpty } = require('lodash');
const { collections, songs } = require('../../database').models;

async function getEmptyCollections(req, res) {
    let status = 200;
    const queryResponse = await collections.findAll({
        where: {
            numberOfSongs: 0,
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

async function getCollectionsBySongId(req, res) {
    let status = 200;
    const { songId } = req.params;
    const queryResponse = await collections.findAll({
        include: {
            model: songs,
            attributes: [],
            where: {
                id: songId
            }
        },
    });

    if (isEmpty(queryResponse)) {
        status = 404;
    }

    return res.status(status).json(queryResponse);
}

module.exports = {
    getEmptyCollections,
    getCollectionsByAccountId,
    getCollectionsBySongId,
};
