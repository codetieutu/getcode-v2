const express = require("express");
const { getHomePage, getAdminPage } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage)
router.get('/admin', getAdminPage)


module.exports = router;