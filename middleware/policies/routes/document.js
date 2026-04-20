const express = require("express");
const router = express.Router();
const abac = require("../middleware/abac");

// Mock request attributes (normally from auth system)
router.use((req, res, next) => {
  req.user = { role: "admin", department: "finance" };
  req.resource = { sensitivity: "low" };
  next();
});

// READ document
router.get("/", abac("read", "document"), (req, res) => {
  res.json({ message: "Document accessed" });
});

// WRITE document
router.post("/", abac("write", "document"), (req, res) => {
  res.json({ message: "Document created" });
});

module.exports = router;
