const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.get('/', calculadoraController.getIndex);
router.post('/calcular', calculadoraController.calcular);

module.exports = router;