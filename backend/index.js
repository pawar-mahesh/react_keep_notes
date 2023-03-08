const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const noteRoutes = require("./noteRoutes");

app.use(cors());

app.use("/", noteRoutes);

app.listen(port, () => {
  console.log("Server started at port: ", port);
});
