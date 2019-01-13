var express = require('express');
var router = express.Router();

var TeaController = require('../../controllers/tea.controller.js');

router.get('/', TeaController.getTeas);
router.post('/', TeaController.createTea);
router.put('/', TeaController.updateTea);
router.delete('/:id', TeaController.removeTea);
router.get('/:id', TeaController.getTea);

module.exports = router;