const express = require("express");
const { getMail, checkMail, addMail, deleteAllMail, deleteOneMail } = require("../service/mail");
const { getcode } = require("../service/getcode");
const { getSheetData } = require("../service/getdata");

const router = express.Router();

router.post("/getcode", async (req, res) => {
    const email = req.body.mail;
    try {
        const { mail, token, client_id } = await getMail(email);
        const code = await getcode(mail, token, client_id);
        res.status(200).send(code);
    }
    catch (err) {
        res.status(200).send("code not found");
    }

})

router.post("/import-mail", async (req, res) => {
    const data = await getSheetData();
    let d = 0;
    for (const mail of data) {
        const added = await addMail(mail.mail, mail.token, mail.client_id);
        if (added) { d++; }
    }
    res.status(200).json({ mailadded: d });
})

router.post("/valid", async (req, res) => {
    const mail = req.body.mail;
    const check = await checkMail(mail);
    res.status(200).json({ check: check });
})

router.post('/addmail', async (req, res) => {
    const { mail, token, client_id } = req.body;
    const result = await addMail(mail, token, client_id);
    res.status(200).json({ mail: mail, added: result });
})

router.post('/delete', async (req, res) => {
    const id = req.body.id;
    await deleteOneMail(id);
    res.status(200).json({ id: id, deleted: true });
})

router.post('/deletaAll', async (req, res) => {
    deleteAllMail();
    res.status(200).json({ delete: true });
})


module.exports = router;