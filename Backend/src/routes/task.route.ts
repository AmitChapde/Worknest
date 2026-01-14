import express from "express";
import { protectController } from "../controllers/auth.controller";
import restrictBoardRole from "../middlewares/restrictBoardRole"
import restrictTaskRole from "../middlewares/restrictTaskRole";
import { createTaskController,getTasksByBoardController,updateTaskController,deleteTaskController } from "../controllers/task.controller";



const router=express.Router()


router.post(
  "/boards/:boardId/tasks",
  protectController,
  restrictBoardRole("ADMIN", "EDITOR"),
  createTaskController
);

router.get(
  "/boards/:boardId/tasks",
  protectController,
  restrictBoardRole("ADMIN", "EDITOR", "VIEWER"),
  getTasksByBoardController
);

router.patch(
  "/tasks/:taskId",
  protectController,
  restrictTaskRole("ADMIN", "EDITOR"),
  updateTaskController
);

router.delete(
  "/tasks/:taskId",
  protectController,
  restrictTaskRole("ADMIN"),
  deleteTaskController
);


export default router;