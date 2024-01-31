const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createRestaurantController,
  getAllRestaurantController,
} = require("../controllers/restaurantController");

const router = express.Router();

// routes
// CREATE RESTAURANT || POST
router.post("/create", authMiddleware, createRestaurantController);

// GET ALL RESTAURANTS || GET
router.get("/getAll", getAllRestaurantController);

module.exports = router;
