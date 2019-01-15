const router = require("express").Router();
const stacksControllers = require("../../controllers/stacksControllers");

// Match with "api/saved"
router.route("/")
    .get(stacksControllers.getsavedarticles);

module.exports = router;