const categorisModel = require("../model/categores");

const getAll = async (req, res) => {
  await categorisModel.find({}).then((categores, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (categores.length == 0) {
      return res.json({ success: false, massage: "no categores found" });
    }

    res.status(200).json({ success: true,categores });
  });
};

const getById =async (req,res) => {
   await categorisModel.findById(req.params.id)
   .then( (categore) => {
        if(!categore){
            return res.status(200).json({success: false,massage:"no categore"})
        }
        return res.status(200).json({success:true,massage:categore})
    })
}

const create = async (req,res)=>{
    await categorisModel.insertMany( req.body.categore)
    .then((result) => res.status(200).json({success:true,result}))
    .catch((error)=>res.status(400).json({success:false,massage:error}))
}
const update = async(req,res)=>{
 await categorisModel.findByIdAndUpdate(req.body.categore)
 .then(categores => res.status(200).json({success:true, massage:categores}))
 .catch(error => res.status(400).json({success:false,massage:error}))
}
const deletecategore = async (req,res) => {
 await categorisModel.findByIdAndDelete(req.params.id)
 .then(categores =>res.status(200).json({success:true,categores}))
 .catch(error => res.status(400).json({success:false,error}))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deletecategore,
}