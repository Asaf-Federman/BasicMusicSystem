const { isEmpty } = require('lodash');
const { collections, songs } = require('../../database').models;

async function getSongs(req, res) {
    let status = 200;
    const queryResponse = await songs.findAll({
        include: {
            model: collections,
            attributes: ['title'],
            through: { attributes: [] },
        },
    });

    if (isEmpty(queryResponse)) {
        status = 404;
    }

    return res.status(status).json(queryResponse);
}

async function getSongsByCollectionId(req, res) {
    const { collectionId } = req.params;
    let status = 200;
    const queryResponse = await songs.findAll({
        include: {
            model: collections,
            attributes: [],
            where: {
                id: collectionId
            }
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

module.exports = {
    getSongs,
    getSongsByCollectionId,
    getSongsByAccountId,
};
