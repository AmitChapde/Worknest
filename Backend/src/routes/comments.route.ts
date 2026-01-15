import express from "express";
import {
  createCommentController,
  updateCommentController,
  getCommentsByTaskController,
  deleteCommentController,
} from "../controllers/comments.controller";
import { protectController } from "../controllers/auth.controller";
import restrictComment from "../middlewares/restrictComment";

const router = express.Router();

router.post(
  "/tasks/:taskId/comments",
  protectController,
  createCommentController
);

router.get(
  "/tasks/:taskId/comments",
  protectController,
  getCommentsByTaskController
);

router.patch(
  "/comments/:commentId",
  protectController,
  restrictComment,
  updateCommentController
);

router.delete(
  "/comments/:commentId",
  protectController,
  restrictComment,
  deleteCommentController
);

export default router;
