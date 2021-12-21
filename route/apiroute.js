const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("../helpers/uuid");

router.get("/api/notes", (req, res) => {
  res.json(db);
});

router.post("/api/notes", (req, res) => {
  req.body.id = uuid();
  db.push(req.body);
  fs.writeFileSync("./db/db.json", JSON.stringify(db, null, "\t"));
  res.json(db);
});

router.delete(`/api/notes/:id`, (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < db.length; i++) {
    if (db[i].id === id) {
      db.splice(i, 1);
    }
  }
  res.json(db);
});

module.exports = router;
