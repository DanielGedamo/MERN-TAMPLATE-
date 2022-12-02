const dpartmentsModel = require("../model/departments");

const getAll = async (req, res) => {
  await dpartmentsModel.find({}).then((departments, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (departments.length == 0) {
      return res.json({ success: false, massage: "no departments found" });
    }

    res.status(200).json({ success: true,departments });
  });
};

const getById =async (req,res) => {
   await dpartmentsModel.findById(req.params.id)
   .then( (department) => {
        if(!department){
            return res.status(200).json({success: false,massage:"no department"})
        }
        return res.status(200).json({success:true,massage:department})
    })
}

const create = async (req,res)=>{
    await dpartmentsModel.insertMany( req.body.department)
    .then((result) => res.status(200).json({success:true,result}))
    .catch((error)=>res.status(400).json({success:false,massage:error}))
}
const update = async(req,res)=>{
 await dpartmentsModel.findByIdAndUpdate(req.body.department)
 .then(departments => res.status(200).json({success:true, massage:departments}))
 .catch(error => res.status(400).json({success:false,massage:error}))
}
const deletedepartment = async (req,res) => {
 await dpartmentsModel.findByIdAndDelete(req.params.id)
 .then(departments =>res.status(200).json({success:true,departments}))
 .catch(error => res.status(400).json({success:false,error}))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deletedepartment,
}