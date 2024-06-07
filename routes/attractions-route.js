const router = require("express").Router();
const attractionsController = require("../controllers/attractions-controller.js");

router.route('/').get(attractionsController.getAttractions);

module.exports = router;
