const storModel = require("../model/orders");

const getAll = async (req, res) => {
  await storModel.find({}).then((orders, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (orders.length == 0) {
      return res.json({ success: false, massage: "no orders found" });
    }

    res.status(200).json({ success: true,orders });
  });
};

const getById =async (req,res) => {
   await storModel.findById(req.params.id)
   .then( (stor) => {
        if(!stor){
            return res.status(200).json({success: false,massage:"no stor"})
        }
        return res.status(200).json({success:true,massage:stor})
    })
}

const create = async (req,res)=>{
    await storModel.insertMany( req.body.stor)
    .then((result) => res.status(200).json({success:true,result}))
    .catch((error)=>res.status(400).json({success:false,massage:error}))
}
const update = async(req,res)=>{
 await storModel.findByIdAndUpdate(req.body.stor)
 .then(orders => res.status(200).json({success:true, massage:orders}))
 .catch(error => res.status(400).json({success:false,massage:error}))
}
const deletestor = async (req,res) => {
 await storModel.findByIdAndDelete(req.params.id)
 .then(orders =>res.status(200).json({success:true,orders}))
 .catch(error => res.status(400).json({success:false,error}))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deletestor,
}
