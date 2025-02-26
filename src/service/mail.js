const connection = require("./connection");

const getMail = async (mail) => {
    try {
        const query = "SELECT mail, token, client_id FROM Mail WHERE mail = ?";
        const [rows] = await connection.query(query, [mail]);

        if (rows.length === 0) {
            throw new Error("No data found for the provided email");
        }

        return {
            mail: rows[0].mail,
            token: rows[0].token,
            client_id: rows[0].client_id
        };

    } catch (error) {
        console.error("Database Query Error:", error.message);
        return null;
    }
}
const checkMail = async (mail) => {
    try {
        const query = "SELECT mail, token, client_id FROM Mail WHERE mail = ?";
        const [rows] = await connection.query(query, [mail]);

        if (rows.length === 0) {
            return false;
        }

        return true;

    } catch (error) {
        console.error("Database Query Error:", error.message);
        return null;
    }
}

const addMail = async (mail, token, client_id) => {
    try {
        const query = "INSERT IGNORE INTO Mail (mail, token, client_id) values (?,?,?);";
        const [result] = await connection.query(query, [mail, token, client_id]);
        return result.affectedRows > 0;

    } catch (error) {
        console.error("Database Query Error:", error.message);
        return false;
    }
}

const getAllMail = async () => {
    try {
        const query = "SELECT * FROM Mail ";
        const [mails] = await connection.query(query);

        if (mails.length === 0) {
            return null;
        }

        return mails

    } catch (error) {
        console.error("Database Query Error:", error.message);
        return null;
    }
}

const deleteOneMail = async (id) => {
    try {
        const query = "DELETE FROM Mail where id =? ";
        await connection.query(query, [id]);

        return true;

    } catch (error) {
        console.error("Database Query Error:", error.message);
        return false;
    }
}


const deleteAllMail = async () => {
    try {
        const query = "DELETE FROM Mail  ";
        await connection.query(query);
        return true;

    } catch (error) {
        console.error("Database Query Error:", error.message);
        return false;
    }
}
module.exports = {
    getMail,
    checkMail,
    addMail,
    getAllMail,
    deleteOneMail,
    deleteAllMail
}