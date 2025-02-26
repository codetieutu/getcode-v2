require("dotenv").config();
const express = require("express")
const config = require("./config/configViewEngine")
// const webRoute = 
// const apiRoute = 

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

config(app);

app.use(require("./router/web"));
app.use(require("./router/api"));

const port = 8080;
app.listen(port, () => {
    console.log("server running...");
})