const router = require("express").Router();
const userController = require("../../controllers/userController");
const { checkJwt } = require("../../src/authz/check-jwt");

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router.route("/sub/:sub")
  .get(userController.findBySub);

module.exports = router;