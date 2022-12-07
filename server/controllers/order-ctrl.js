const orderModel = require("../model/orders");

const getAllOrders = async (req, res) => {
   orderModel.find({}).then((orders, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (orders.length == 0) {
      return res.json({ success: false, massage: "no orders found" });
    }

    return res.status(200).json({ success: true,orders });
  });
};

const getOrderById = async (req,res) => {
   await orderModel.findById(req.params.id)
   .then( (order) => {
        if(!order){
            return res.json({success: false,massage:"no order"})
        }
        return res.status(200).json({success:true,order})
    })
    .catch((error) => res.status(400).json({ success: false, error }))
}

const createOrder = async (req,res)=>{
    await orderModel.insertMany( req.body.order)
    .then((result) => res.status(200).json({success:true,result}))
    .catch((error)=>res.status(400).json({success:false,massage:error}))
}
const updateOrder = async(req,res)=>{
  orderModel.findByIdAndUpdate(req.body.id)
 .then(orders => res.status(200).json({success:true, massage:orders}))
 .catch(error => res.status(400).json({success:false,massage:error}))
}
const deleteorder = async (req,res) => {
 await orderModel.findByIdAndDelete(req.params.id)
 .then(orders =>res.status(200).json({success:true,orders}))
 .catch(error => res.status(400).json({success:false,error}))
}
module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteorder,
}
