const express = require("express");

const router = express.Router();

const {showproducts,showtestcases} = require("../controllers/products")

router.route("/").get(showproducts);
router.route("/testing").get(showtestcases);

module.exports = router;