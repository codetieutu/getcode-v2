const formatData = require("../service/formatData");
const { getAllMail } = require("../service/mailDao")

const getHomePage = async (req, res) => {
    let results = await getAllMail();
    res.render("homePage", ({ mails: formatData(results) }))
}

module.exports = {
    getHomePage
}