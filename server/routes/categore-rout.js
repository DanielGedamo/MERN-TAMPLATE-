const router =require("express").Router()

const{
    getAllCategores,
    getCategoreById,
    createCategore,
    updateCategore,
    deletecategore,
} = require('../controllers/categoris-ctrl')

router.get("/",getAllCategores);
router.get("/byId",getCategoreById);
router.post("/addOrder",createCategore);
router.put("/update",updateCategore);
router.delete("/delete",deletecategore);


module.exports = router