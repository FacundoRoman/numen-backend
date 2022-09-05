const express = require('express');
const router= express.Router();
const {consultaAxios} = require('../controllers/controller');

router.get('/', consultaAxios);

module.exports = router;