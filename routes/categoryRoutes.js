const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createCategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

// routes
// CREATE CATEGORY
router.post("/create", authMiddleware, createCategoryController);

module.exports = router;
