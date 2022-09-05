const {Auto} = require('../models/auto');
const validarId = async (req, res, next)=>{
    try {
        const auto = await Auto.findById(req.params.id)
        if(auto !== null){
            next();
        }else{
            res.json({msg:"El id es inválido"})
        }
    } catch (error) {
        res.json({msg:"El formato del id es inválido"})
    }
    
}
module.exports = {validarId}