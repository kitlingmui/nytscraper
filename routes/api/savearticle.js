// Save function to be fixed

const router = require("express").Router();
const stacksControllers = require("../../controllers/stacksControllers");

// Match with "api/savearticle"
router.route("/:id")
    .put(stacksControllers.savearticle);

module.exports = router;