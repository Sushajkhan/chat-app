const express = require("express");

const verifyEmail = require("../controllers/verificationController");
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/:id/verify/:token", verifyEmail);

module.exports = router;
