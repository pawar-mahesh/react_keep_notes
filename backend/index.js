const express = require("express");
const app = express();
const port = 3001;

const noteRoutes = require("./noteRoutes");

app.use("/", noteRoutes);

app.listen(port, () => {
  console.log("Server started at port: ", port);
});
