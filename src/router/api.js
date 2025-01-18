const express = require("express");
const { deleteMail } = require("../service/mailDao");
const router = express.Router();

router.post("/delete-Mail", async (req, res) => {
    datas = req.body.ids;
    await deleteMail(datas);
    res.send("lhbhb");
})
module.exports = router;