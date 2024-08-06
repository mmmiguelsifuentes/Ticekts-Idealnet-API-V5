const express = require('express')
const app = express()
const router = express.Router();
const { sendTicketEmailController } = require('../controllers/index.controller')

router.post('/sendTicketEmail', sendTicketEmailController.sendEmailCtl)

app.use('/api', router)

module.exports = app