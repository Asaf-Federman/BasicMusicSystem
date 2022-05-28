const { getActiveUsers } = require('../service');

jest.mock('../../../database');
const { accounts: accountsModel } = require('../../../database').models;

describe('Accounts test', () => {
    describe('getActiveAccounts', () => {
        it('get accounts', async () => {
            const req = {};
            const res = {
                json: jest.fn().mockImplementation(() => res),
                status: jest.fn().mockImplementation(() => res),
            };

            accountsModel.findAll = jest.fn().mockResolvedValueOnce([1]);
            const result = await getActiveUsers(req, res);
            expect(result.status.mock.calls[0][0]).toBe(200);
        });

        it('empty account result', async () => {
            const req = {};
            const res = {
                json: jest.fn().mockImplementation(() => res),
                status: jest.fn().mockImplementation(() => res),
            };

            const result = await getActiveUsers(req, res);
            expect(result.status.mock.calls[0][0]).toBe(404);
        });
    });
});
