const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} = require("../controllers/userController");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// routes
// GET USER || GET
router.get("/getUser", authMiddleware, getUserController);

// UPDATE PROFILE || put
router.put("/updateUser", authMiddleware, updateUserController);

// PASSWORD UPDATE
router.post("/updatePassword", authMiddleware, updatePasswordController);

// RESET PASSWORD
router.delete("/resetPassword", authMiddleware, resetPasswordController);

// DELETE USER
router.post("user/delete/:id", authMiddleware, deleteProfileController);

module.exports = router;
