const { default: axios } = require("axios");
const { validationResult } = require("express-validator");
const { Auto } = require('../models/auto');

const controller = {
    index (req,res){
        res.render('index', {title: 'Express'});
    },
    vistaAutos: async(req,res)=>{
        const autos = await Auto.find()
        res.json({autos})
    },
    vistaUnAuto : async (req,res)=>{
        try {
            const auto = await Auto.findById(req.params.id)
            res.json({auto})
        } catch (error) {
            res.status(400).json({msg:'ID error', error})
        }
    },
    vistaAutoMarca : async (req,res)=>{
        const marca = req.params.marca;
        Auto.find({marca: marca}, function(err, cymbalBD){
            if(err){
                return res.json({msg:'The brand you are looking for is not in our database', err})
            } else {
                return res.json({succes: true, auto: autoBD});
            }
        })
    },
    vistaAutoType : async (req,res)=>{
        const tipo = req.params.tipo;
        Auto.find({tipo: tipo}, function(err, autoBD){
            if(err){
                return res.json({msg:'We could not find that type of cymbal', err})
            } else {
                return res.json({succes: true, auto: autoBD});
            }
        })
    },
    crearAuto : async (req,res)=>{
        try {
            const error = validationResult(req)
            if(error.isEmpty()){
                const save = new Auto(req.body);
                await save.save()
                res.status(201).json(save)
            } else {res.status(501).json(error)}
        } catch (err) {
            res.status(501).json({msg:'Could not create cymbal', err})
        }
    },
    editarAuto : async(req,res)=>{
        try {
            const error = validationResult(req)
            if(error.isEmpty()){
                const {id} = req.params
                const update = await Auto.findByIdAndUpdate(id,req.body)
                res.status(202).json({body: req.body, update})
            } else {res.status(501).json(error)}
        } catch (err) {
            res.status(501).json({msg:'The auto data could not be edited correctly'})
        }
    },
    borrarAuto : async(req,res)=>{
        try {
            const auto = await Auto.findByIdAndDelete(req.params.id)
            res.json({msg:'Deleted from database:', auto})
        } catch (error) {
            res.status(400).json({msg:'There is a problem to delete:', auto})
        }
    },
    
}
const consultaAxios = async(req,res)=>{
    const resultado = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=200/",{timeout:1000}).catch((err)=>{
        err.origin = 'Error getting URL';
        throw err;
    });
    res.status(200).json(resultado.data)
}

module.exports = {controller, consultaAxios}