import TodoController from "../controllers/TodoController";
import UserController from "../controllers/UserController";

import express from 'express';
const router = express.Router();

const userController = new UserController();
const todoController = new TodoController();
router.post("/create", userController.create)
router.post("/todo", todoController.create);

export default router;