const express = require('express')
const app = express()
const router = express.Router()
const { authenticateController } = require('../controllers/index.controller')

router.post('/', authenticateController)