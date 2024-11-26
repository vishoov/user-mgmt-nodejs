const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getById, getAll, updateId, delId } = require("../controllers/user.controller");
const auth = require("../middleware/auth"); // Assuming you have an auth middleware

// Public routes
/**
 * @route POST /users/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", registerUser);

/**
 * @route POST /users/login
 * @description Authenticate a user and get token
 * @access Public
 */
router.post("/login", loginUser);

// Protected routes
/**
 * @route GET /users
 * @description Get all users
 * @access Private
 */
router.get("/", auth, getAll);

/**
 * @route GET /users/:id
 * @description Get user by ID
 * @access Private
 */
router.get("/:id", auth, getById);

/**
 * @route PUT /users/:id
 * @description Update a user
 * @access Private
 */
router.put("/:id", auth, updateId);

/**
 * @route DELETE /users/:id
 * @description Delete a user
 * @access Private
 */
router.delete("/:id", auth, delId);

module.exports = router;