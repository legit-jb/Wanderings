const router = require("express").Router();
const userRoutes = require("./users");
const markerRoutes = require("./markers");

router.use("/users", userRoutes);
router.use("/markers", markerRoutes);

module.exports = router;