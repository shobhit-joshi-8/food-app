const testUserController = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "test user data API",
    });
  } catch (error) {
    console.log("error in TEST API", error);
  }
};

module.exports = { testUserController };
