const models = {
    accounts: {
        findAll: jest.fn().mockResolvedValue({}),
    },
    songs: {
        findAll: jest.fn().mockResolvedValue({}),
    },
    collections: {
        findAll: jest.fn().mockResolvedValue({}),
    },
};

module.exports = {
    models,
};
