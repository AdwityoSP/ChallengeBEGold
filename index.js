const express = require('express');
const app = express();
const router = require("./router.js")
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/v1/users", router);

app.listen(port, () => 
    console.log("[Server] online " + new Date())
    );

const db = require("./models");
db.sequelize.sync();

