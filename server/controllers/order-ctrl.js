const orderModel = require("../model/orders");

const getAll = async (req, res) => {
  await orderModel.find({}).then((orders, error) => {
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
   await orderModel.findById(req.params.id)
   .then( (order) => {
        if(!order){
            return res.status(200).json({success: false,massage:"no order"})
        }
        return res.status(200).json({success:true,massage:order})
    })
}

const create = async (req,res)=>{
    await orderModel.insertMany( req.body.order)
    .then((result) => res.status(200).json({success:true,result}))
    .catch((error)=>res.status(400).json({success:false,massage:error}))
}
const update = async(req,res)=>{
 await orderModel.findByIdAndUpdate(req.body.order)
 .then(orders => res.status(200).json({success:true, massage:orders}))
 .catch(error => res.status(400).json({success:false,massage:error}))
}
const deleteorder = async (req,res) => {
 await orderModel.findByIdAndDelete(req.params.id)
 .then(orders =>res.status(200).json({success:true,orders}))
 .catch(error => res.status(400).json({success:false,error}))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteorder,
}
