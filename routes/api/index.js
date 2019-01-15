const router = require("express").Router();
const scrapeRouters = require("./scrape");
const savedRouters = require("./saved")
const saveRouters = require("./savearticle")

// Scrape routes
router.use("/scrape", scrapeRouters);

// Saved routes
router.use("/saved", savedRouters)

// Save article routes
router.use("/savearticle", saveRouters)

module.exports = router;