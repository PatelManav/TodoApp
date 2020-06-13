const mysql = require("mysql");

const express = require("express");

const bodyParser = require("body-parser"); //// cannot use import outside the module
// import bodyParser from "body-parser";

var application = express();

application.use(bodyParser.json());

const conncetionDetails = {
  host: "localhost",
  user: "root",
  password: "",
  database: "todoapp",
  multipleStatements: false,
};

const mysqlConnection = mysql.createConnection(conncetionDetails);

mysqlConnection.connect((err) => {
  if (!err) console.log("Connected!!!");
  else console.log("error occured!!!");
});

application.listen(3004, () => {
  console.log("Servering is running");
});

module.exports = { application, mysqlConnection, bodyParser };
