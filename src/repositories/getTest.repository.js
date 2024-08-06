const queryGen = require('../utils/queryGenerator');

const getZones = async () => {
    try {
        const query = `select public.zones_sel_fn();`
        const result = await queryGen(
            query,
            {
                
            },
            true
        )
        return result
    } catch (error) {
        throw error;
    }
}

const getZonesByName = async ({name}) => {
    try {
        const query = `select public.zones_by_name_sel_fn(:name);`
        const result = await queryGen(
            query,
            {
                name
            },
            true
        )
        return result
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getZones,
    getZonesByName
}