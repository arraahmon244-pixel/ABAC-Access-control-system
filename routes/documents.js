const express = require("express");
const router = express.Router();

// Mock attributes
router.use((req, res, next) => {
  req.user = { role: "user", department: "sales" };
  req.resource = { sensitivity: "low" };
  next();
});

// GET → Allowed
router.get("/", (req, res) => {
  res.status(200).json({ message: "Document accessed" });
});

// POST → Denied
router.post("/", (req, res) => {
  return res.status(403).json({ message: "Access denied (ABAC)" });
});


module.exports = router;
