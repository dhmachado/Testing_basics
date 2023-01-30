// Assume this a gateway to connect with Stripe
async function getSubscriptionData(subscriptionId) {
    return { subscriptionId };
};

module.exports = { getSubscriptionData };