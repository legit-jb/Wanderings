const router = require("express").Router();
const userRoutes = require("./users");
const markerRoutes = require("./markers");
const { signup, signin } = require('../../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);

router.use("/users", userRoutes);
router.use("/markers", markerRoutes);

module.exports = router;