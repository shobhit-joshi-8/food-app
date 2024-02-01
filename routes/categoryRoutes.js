const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createCategoryController,
  getAllCategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

// routes
// CREATE CATEGORY
router.post("/create", authMiddleware, createCategoryController);

// GET ALL CATEGORY
router.get("/getAll", getAllCategoryController);
module.exports = router;
