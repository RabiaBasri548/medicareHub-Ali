const express = require("express");
const router = express.Router();

// Dummy data
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Dummy media data",
    data: [
      { id: 1, name: "Blood Test" },
      { id: 2, name: "ECG" },
      { id: 3, name: "Consultation" }
    ]
  });
});

module.exports = router