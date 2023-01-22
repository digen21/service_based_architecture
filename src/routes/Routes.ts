
import UserController from "../controllers/User/UserController";

import express from 'express';
const router = express.Router();

const userController = new UserController();
router.post("/create", userController.create);
router.put("/update", userController.update);
router.delete("/delete", userController.delete);
router.get("/email", userController.findByEmail);
router.get("/:id", userController.getById)
export default router;