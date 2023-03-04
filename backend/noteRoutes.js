const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/keepNote");

const schema = {
  header: String,
  message: String,
};

const model = mongoose.model("keepNote", schema, "notes");

router.get("/", (req, res) => {
  model.find((err, data) => {
    if (err) {
      console.log("Error while fetching notes: ", err);
    } else {
      res.send(data);
    }
  });
});

router.post("/addNote", (req, res) => {
  res.send("Add a new note");
});

router.delete("/deleteNote", (req, res) => {
  res.send("Delete a note");
});

router.put("/editNote", (req, res) => {
  res.send("Edit a note");
});

module.exports = router;
