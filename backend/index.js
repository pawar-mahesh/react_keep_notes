const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const noteRoutes = require("./noteRoutes");

app.use(cors());

app.use("/", noteRoutes);

app.listen(port, () => {
  console.log("Server started at port: ", port);
});
