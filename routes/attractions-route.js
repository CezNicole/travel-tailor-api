const router = require("express").Router();
const attractionsController = require("../controllers/attractions-controller.js");

router.route("/:province_territory/:season").get(attractionsController.getAttractionsByProvinceAndSeason);

module.exports = router;
