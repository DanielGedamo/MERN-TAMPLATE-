const handoutsModel = require("../model/handouts");

const getAllHandouts = async (req, res) => {
  await handoutsModel.find({}).then((handouts, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (handouts.length == 0) {
      return res.json({ success: false, massage: "no handouts found" });
    }

    res.status(200).json({ success: true,handouts });
  });
};

const getHandoutById =async (req,res) => {
   await handoutsModel.findById(req.params.id)
   .then( (handdouts) => {
        if(!handdouts){
            return res.status(200).json({success: false,massage:"no handdouts"})
        }
        return res.status(200).json({success:true,massage:handdouts})
    })
}

const createHandout = async (req,res)=>{
    await handoutsModel.insertMany( req.body.handdouts)
    .then((result) => res.status(200).json({success:true,result}))
    .catch((error)=>res.status(400).json({success:false,massage:error}))
}
const updateHandout = async(req,res)=>{
 await handoutsModel.findByIdAndUpdate(req.body.handdouts)
 .then(handouts => res.status(200).json({success:true, massage:handouts}))
 .catch(error => res.status(400).json({success:false,massage:error}))
}
const deletehanddouts = async (req,res) => {
 await handoutsModel.findByIdAndDelete(req.params.id)
 .then(handouts =>res.status(200).json({success:true,handouts}))
 .catch(error => res.status(400).json({success:false,error}))
}
module.exports = {
  getAllHandouts,
    getHandoutById,
    createHandout,
    updateHandout,
    deletehanddouts,
}