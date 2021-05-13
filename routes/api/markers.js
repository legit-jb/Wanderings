const router = require("express").Router();
const markerController = require("../../controllers/markerController");
const { checkJwt } = require("../../src/authz/check-jwt");

router.route("/")
  .get(markerController.findAll)
  .post(markerController.create);

router
  .route("/:id")
  .get(markerController.findById)
  .put(markerController.update)
  .delete(markerController.remove);

module.exports = router;