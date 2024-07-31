const express = require('express')
const app = express()

app.use(require('./sendTicketEmail.route'))

module.exports = app