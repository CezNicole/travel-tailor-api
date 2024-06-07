const router = require("express").Router();
const provincesController = require("../controllers/provinces-controller.js");

router.route("/").get(provincesController.getProvinces);

module.exports = router;