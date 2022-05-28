const { isEmpty } = require('lodash');
const { accounts } = require('../../database').models;

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

module.exports = {
    getActiveUsers: getActiveAccounts,
};
