const express = require('express');
const router= express.Router();
const {controller} = require('../controllers/controller');
const {check} = require('express-validator');
const {validarId} = require('../validations/validarId');
const {validateParams} = require('../validations/validationParams');

router.get('/ver', controller.vistaAutos);
router.get('/ver/:id', validarId, controller.vistaUnAuto);
router.get('/tipo/:tipo', validateParams,controller.vistaAutoType);
router.get('/marca/:marca', validateParams, controller.vistaAutoMarca);
router.post('/crear', [
    check("marca").not().isEmpty().withMessage("The brand is required"),
    check("modelo").not().isEmpty().withMessage("The model is required"),
    check("tipo").not().isEmpty().withMessage("The type is required"),
    check("medida").not().isEmpty().withMessage("The size is required")
] ,controller.crearAuto);
router.put('/editar/:id', validarId, controller.editarAuto);
router.delete('/eliminar/:id', validarId, controller.borrarAuto);

module.exports = router;