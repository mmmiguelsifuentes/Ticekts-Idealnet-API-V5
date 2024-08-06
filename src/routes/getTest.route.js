const express = require('express')
const app = express()
const router = express.Router();
const { getTestController } = require('../controllers/index.controller')

router.get('/zones', getTestController.getZones);
router.get('/zonesByName', getTestController.getZonesByName)

app.use('/api/test', router)

module.exports = app