const express = require("express");
const { getAllNotes, createNote, updateNote, deleteNote } = require("../controllers/noteController")

const router = express.Router();

router.get("/", getAllNotes)

router.post("/", createNote)

router.put("/:id", updateNote)

router.delete("/:id", deleteNote)

// export default router;  // module js
module.exports = router;   // common js