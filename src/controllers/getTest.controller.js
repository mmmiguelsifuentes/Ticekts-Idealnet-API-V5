const { getTestService } = require('../services/index.service');

const getZones = async (req, res, next ) => {
    try {
        const result = await getTestService.getZones();
        return res.json(result);
    } catch (error) {
        next(error);
    }
}

const getZonesByName = async (req, res, next) => {
    try {
        const name = req.query.nameZone;
        const result = await getTestService.getZonesByName({name});

        return res.json(result)

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getZones,
    getZonesByName
}