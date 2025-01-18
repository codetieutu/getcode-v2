const connection = require("./connection");

const getAllMail = async () => {
    const query = "select id, email, time from Mail";
    const [results] = await connection.query(query);
    return results;
}

const deleteMail = async (ids) => {
    const query = "DELETE FROM Mail WHERE id= ?";
    ids.forEach(async id => {
        // await connection.query(query, [id]);
    })
}

module.exports = {
    getAllMail,
    deleteMail
}