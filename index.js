
let express = require("express");
let app = express();
const bodyParser=require("body-parser");
const routes=require("./routes/index");
require("dotenv").config();
const fs = require("fs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use("/api",routes);

const port = process.env.PORT ;


app.listen(port, () => console.log("Served started "));
