const { getTestRepository } = require('../repositories/index.repository');

const getZones = async () => {
    try {
        const zones = await getTestRepository.getZones();
        return zones;
    } catch (error) {
        throw error
    }
}

const getZonesByName = async ({name}) => {
    try {
        if(name == '') {
            name = null;
        }
        const nameByZone = await getTestRepository.getZonesByName({name})
        return nameByZone;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getZones,
    getZonesByName
}