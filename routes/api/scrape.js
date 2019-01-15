const router = require("express").Router();
const stacksControllers = require("../../controllers/stacksControllers");

// Match with "api/scrape"
router.route("/")
    .post(stacksControllers.createscrape);

module.exports = router;