let express = require("express");
let app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/index");
require("dotenv").config();
const fs = require("fs");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:3001"],
    },
  },
  apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", routes);

app.listen(port, () => console.log("Served started "));
