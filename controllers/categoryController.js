const categoryModel = require("../models/categoryModel");

// CREATE CATEGORY
const createCategoryController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    // validation
    if (!title) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Category Title OR Image",
      });
    }
    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save();
    res.status(201).send({
      success: true,
      message: "Category Created",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Category API",
      error,
    });
  }
};

module.exports = { createCategoryController };
