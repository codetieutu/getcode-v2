require("dotenv").config();
const express = require("express")
const config = require("./config/configViewEngine")
// const webRoute = 
// const apiRoute = 
const { getAllMail } = require("./service/mailDao");

const app = express()
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

config(app);

app.use(require("./router/web"));
app.use(require("./router/api"));
test = async () => {
    results = await getAllMail();
    console.log(results);
}
// test();
app.listen(port, () => {
    console.log("server running...");
})