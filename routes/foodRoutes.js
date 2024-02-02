const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodController,
  getSingleFoodController,
  getFoodByRestaurantController,
} = require("../controllers/foodController");

const router = express.Router();

// routes
// CREATE FOOD
router.post("/create", authMiddleware, createFoodController);

// GET ALL FOOD
router.get("/getAll", getAllFoodController);

// GET SINGLE FOOD
router.get("/get/:id", getSingleFoodController);

// GET SINGLE FOOD
router.get("/getByRestaurant/:id", getFoodByRestaurantController);

module.exports = router;
