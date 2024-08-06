const express = require('express')
const app = express()

app.use(require('./sendTicketEmail.route'))
app.use(require('./getTest.route'))
//app.use(require('./authenticate.route'))

module.exports = app