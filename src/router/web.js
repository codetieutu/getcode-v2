const express = require("express");
const { getHomePage, getAdminPage, getDeletePage } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage)
router.get('/admin', getAdminPage)
router.get("/admin/delete", getDeletePage)

module.exports = router;