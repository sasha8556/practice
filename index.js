let express = require("express");

const bodyParser = require("body-parser");
const routes = require("./routes/index");
require("dotenv").config();
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require('./swaggerSpec.js'); 

let app = express();

const port = process.env.PORT;




app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", routes);

app.listen(port, () => console.log("Served started "));
