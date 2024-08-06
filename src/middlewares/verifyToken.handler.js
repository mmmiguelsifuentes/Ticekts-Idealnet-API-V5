const jwt = require('jsonwebtoken');
const API_GEOTAB = require('mygeotab-api-node');
require('dotenv').config();

const key = process.env.KEY_LOGIN;

module.exports = function(req, res, next) {
    //obtener el token del header
    const token = req.header('token');

    //checa que venga el token
    if(!token) {
        return res.status(401).json({ status: false, msg: 'Autorización denegada, no tienes acceso' });
    }

    //verifica token
    try {
        jwt.verify( token, key, (async error => {
            if(error) {
                res.status(401).json({ status: false, msg: 'Autorización denegada, no tienes acceso' });
            }
            else {
                const decoded = jwt.decode(token);
                const resp_api = new API_GEOTAB(decoded.username, null, decoded.sessionId, decoded.database, decoded.server);

                try {
                    const checkSession = await resp_api.callAsync('Get', {
                        typeName: 'Device',
                        resultsLimit: '1'
                    })
                    if(checkSession) {
                        next();
                    }
                } catch (error) {
                    res.status(401).json({ status: false ,msg: 'Sin autorización, la sesión ha caducado.' });
                }
            }
        }))
    } catch (error) {
        console.log('Something wrong with the middleware');
        res.status(500).json({ status: false, msg: 'Server Error' });
    }
}