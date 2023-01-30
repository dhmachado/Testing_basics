const { getUser } = require('../../src/services/userServices');

const Users = require('../../src/models/Users');
jest.mock('../../src/models/Users');
const PaymentsGateway = require('../../src/gateways/paymentsGateway');
jest.mock('../../src/gateways/paymentsGateway');

describe('Test getUsers ', () => {
    describe('when the userId input is not prensent', () => {
        it('should throw an Error', async () => {
            const err = new Error('userId is required');

            await expect(getUser(null)).rejects.toThrow(err);
        });
    });

    describe('when the userId matches an user', () => {
        const userId = '1234567890';
        const subscriptionId = '0987654321';

        beforeEach(() => {
            // ARRANGE
            Users.findOne = 
                jest.fn().mockReturnValue({
                    _id: userId,
                    subscriptionId,
                    firstName: 'John',
                    lastName: 'Snow',
                });

            PaymentsGateway.getSubscriptionData =
                jest.fn((_) => ({
                    subscriptionId,
                    subscriptionStatus: 'PAID',
                }));
        });

        it('should return the expected user data', async () => {
            // ACT
            const userData = await getUser(userId);

            // ASSERT
            expect(userData).toEqual({
                userId,
                subscriptionId,
                subscriptionStatus: 'PAID',
                fullName: 'Snow, John',
            })
        });
    });
});