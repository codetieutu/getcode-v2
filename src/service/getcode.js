const axios = require("axios");
const getcode = async (mail, token, client_id) => {
    const url = 'https://tools.dongvanfb.net/api/get_messages_oauth2';
    const data = {
        client_id: client_id,
        email: mail,
        refresh_token: token
    };

    try {
        const response = await axios.post(url, data,
            {
                headers: { 'Content-Type': 'application/json' }
            });

        const code = response.data.messages.find(message =>
            message.subject.toLowerCase().includes("code is")
        );
        return code ? code.subject : "code not found";

    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
module.exports = { getcode };