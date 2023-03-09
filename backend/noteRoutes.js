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
  const schema = new model({
    header: req.body.header,
    message: req.body.message,
  });

  schema.save((err, data) => {
    if (err) {
      console.log("Error while saving notes: ", err);
    } else {
      res.send(data._id);
    }
  });
});

router.delete("/deleteNote", (req, res) => {
  model.deleteOne({ _id: req.body.id }, (err, data) => {
    if (!err) {
      res.send(data);
    }
  });
});

router.put("/editNote", (req, res) => {
  res.send("Edit a note");
});

module.exports = router;
