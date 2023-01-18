
import UserController from "../controllers/User/UserController";

import express from 'express';
const router = express.Router();

const userController = new UserController();
router.post("/create", userController.create);

export default router;