const express = require("express");
const router = express.Router();

const {
  getLugares,
  getLugar,
  createLugar,
  editLugar,
  deleteLugar,
} = require("../controllers/lugares.controller");

router.get("/", getLugares);
router.get("/:id", getLugar);
router.post("/", createLugar);
router.patch("/:id", editLugar);
router.delete("/:id", deleteLugar);

module.exports = router;
