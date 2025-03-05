const { getAllMail } = require("../service/mail");


const getHomePage = (req, res) => {
    res.render("homePage")
}

const getAdminPage = (req, res) => {
    res.render("admin")
}

const getDeletePage = async (req, res) => {
    const mails = await getAllMail();
    res.render('delete', { mails: mails })
}
module.exports = {
    getHomePage,
    getAdminPage,
    getDeletePage
}