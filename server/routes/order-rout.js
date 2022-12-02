const router = require('exspress').router
const {
    getAll,
    getById,
    create,
    update,
    deleteorder,
} = require("../controllers/order-ctrl")

router.get("/",getAll);
router.get("/byId",getById)
