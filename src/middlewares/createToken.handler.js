require('dotenv').config();
const jwt = require('jsonwebtoken');
const { transform } = require('lodash');

const key = process.env.KEY_LOGIN;

module.exports = async function createToken(userName, database, server, sessionId) {
    try {
        const token = jwt.sign({
            username: userName, 
            database: database,
            server: server,
            sessionId: sessionId
        }, key, { expiresIn: "15d"})

        return token;
    } catch (error) {
        throw error;
    }
}