require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const dbHelper = require('./helpers/db.helper');

// Use environments
require('./environments/config')

//--------------------Use coors--------------------
app.use(cors())

app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }))
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
    })
)
app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb' }))

// Use Routes
app.use(require('./routes/index.route'));

const startApp = () => {
    app.listen(app.get('port'), async () => {
        console.log(`Listen port: ${process.env.HTTP_PORT}`)
    })
    .setTimeout(1200000);
};

dbHelper.Sequelize.authenticate()
    .then(() => 
        startApp()
        
    ).cath(err => {
        throw err;
    });
