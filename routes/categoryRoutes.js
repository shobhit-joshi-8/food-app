const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createCategoryController,
  getAllCategoryController,
  updateCategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

// routes
// CREATE CATEGORY
router.post("/create", authMiddleware, createCategoryController);

// GET ALL CATEGORY
router.get("/getAll", getAllCategoryController);

// UPDATE CATEGORY
router.put("/update/:id", authMiddleware, updateCategoryController);
module.exports = router;
