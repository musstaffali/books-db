const jwt = require(JsonWebToken);

const generateToken = (userId) => {
    return jwt.sign({id: userId}, 'nodejs', {
        expiresIn: '30d',
    });
};

module.exports = generateToken;