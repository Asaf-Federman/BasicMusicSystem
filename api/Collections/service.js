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

async function getSongsByCollectionId(req, res) {
    const { collectionId } = req.params;
    let status = 200;
    const queryResponse = await songs.findAll({
        include: {
            model: collections,
            attributes: [],
            where: {
                id: collectionId,
            },
        },
    });

    if (isEmpty(queryResponse)) {
        status = 404;
    }

    return res.status(status).json(queryResponse);
}

module.exports = {
    getEmptyCollections,
    getSongsByCollectionId,
};
