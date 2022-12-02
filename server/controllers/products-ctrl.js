const productModel = require("../model/products");

const getAll = async (req, res) => {
  await productModel.find({}).then((products, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (products.length == 0) {
      return res.json({ success: false, massage: "no products found" });
    }

    res.status(200).json({ success: true,products });
  });
};

const getById =async (req,res) => {
   await productModel.findById(req.params.id)
   .then( (product) => {
        if(!product){
            return res.status(200).json({success: false,massage:"no product"})
        }
        return res.status(200).json({success:true,massage:product})
    })
}

const create = async (req,res)=>{
    await productModel.insertMany( req.body.product)
    .then((result) => res.status(200).json({success:true,result}))
    .catch((error)=>res.status(400).json({success:false,massage:error}))
}
const update = async(req,res)=>{
 await productModel.findByIdAndUpdate(req.body.product)
 .then(products => res.status(200).json({success:true, massage:products}))
 .catch(error => res.status(400).json({success:false,massage:error}))
}
const deleteProduct = async (req,res) => {
 await productModel.findByIdAndDelete(req.params.id)
 .then(products =>res.status(200).json({success:true,products}))
 .catch(error => res.status(400).json({success:false,error}))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteProduct,F
}