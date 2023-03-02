const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Show all the notes");
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
