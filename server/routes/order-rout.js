const router = require('express').Router()
const {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteorder,
} = require("../controllers/order-ctrl")

router.get("/",getAllOrders);
router.get("/byId",getOrderById);
router.post("/addOrder",createOrder);
router.put("/update",updateOrder);
router.delete("/delete",deleteorder);

module.exports = router;
