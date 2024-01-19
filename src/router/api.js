import express from "express"
import { authMiddleware } from "../middleware/auth-middleware.js"
import userController from "../controller/user-controller.js"
import contactController from "../controller/contact-controller.js"

export const router = express.Router()

// user controller
router.use(authMiddleware)
router.get("/api/users/current", userController.get)
router.patch("/api/users/current", userController.update)
router.delete("/api/users/logout", userController.logout)

// contact controller
router.post("/api/contacts", contactController.create)
router.get("/api/contacts/:contactId", contactController.get)