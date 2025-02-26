const { google } = require("googleapis");
const fs = require("fs");

const auth = new google.auth.GoogleAuth({
    keyFile: './src/service/credentials.json',
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});


const SPREADSHEET_ID = "1ZAb0undn2HInpdSbE8SLquGjuGCBJuc7dTJjQ4w2eDQ";
const RANGE = "Data!A:B";

let getSheetData = async () => {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE,
    });
    const data = response.data.values;
    let results = [];
    data.forEach((row, index) => {
        if (index === 0) return;
        const [mail, pass, token, client_id] = row[1].split('|').map(item => item.trim());
        results.push({ mail: mail, pass: pass, token: token, client_id: client_id });
    })
    return results;
}

module.exports = { getSheetData }
