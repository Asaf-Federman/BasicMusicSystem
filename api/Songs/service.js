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

async function getCollectionsBySongId(req, res) {
    let status = 200;
    const { songId } = req.params;
    const queryResponse = await collections.findAll({
        include: {
            model: songs,
            attributes: [],
            where: {
                id: songId,
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
    getCollectionsBySongId,
};
