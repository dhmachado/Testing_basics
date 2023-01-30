const Users = require('../models/Users');
const PaymentsGateway = require('../gateways/paymentsGateway');

const { parseName } = require('../helpers/nameParser');

async function getUser(userId) {
    if(!userId) throw new Error('userId is required');
    
    const user = await Users.findOne(userId);
    const subscriptionData = await PaymentsGateway
        .getSubscriptionData(user.subscriptionId);

    return {
        userId: user._id,
        fullName: parseName(user),
        ...subscriptionData,
    };
}

module.exports = { getUser };