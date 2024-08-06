const { authenticateService } = require('../services/index.service')
const API_GEOTAB = require('mygeotab-api-node')
const createToken = require('../middlewares/createToken.handler')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const key = process.env.KEY_LOGIN;

const authenticate = async (req, res, next) => {
    try {
        const { userName, sessionId, database, server } = req.body;
        
    } catch (error) {
        
    }
}

module.exports = {
    authenticate
}