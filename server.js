require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const dbHelper = require('./src/helpers/db.helper');
const errorHandler = require('./src/middlewares/error.handler');

// Use environments
require('./src/environments/config')

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

/**Configurations */
app.set('port', process.env.HTTP_PORT || 3000);
app.set('json spaces', 2);

// Use Routes
app.use(require('./src/routes/index.route'));

// use error handlers
app.use(errorHandler)

const startApp = () => {
    app.listen(app.get('port'), async () => {
        console.log(`Listen port: ${process.env.HTTP_PORT}`)
    })
    .setTimeout(1200000);
};

dbHelper.sequelize.authenticate()
    .then(() => 
        startApp()
        
    ).catch(err => {
        throw err;
    });
