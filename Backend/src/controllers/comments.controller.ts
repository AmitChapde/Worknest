import { Request, Response } from "express";
import { Types } from "mongoose";
import {
  createComment,
  updateComment,
  getCommentsByTask,
  deleteComment,
} from "../services/comments.service";
import Task from "../models/task.model";
import { stat } from "fs";

const createCommentController = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;

    const { taskId } = req.params;

    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const task = await Task.findById(taskId);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    const comment = await createComment({
      content,
      taskId: new Types.ObjectId(taskId),
      workspaceId: task.workspaceId,
      createdBy: req.user.id,
      isDeleted: false,
    });
    res.status(201).json({
      status: "success",
      data: {
        comment,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating comment" });
  }
};

const updateCommentController = async (req: Request, res: Response) => {
  try {
    const { taskId, commentId } = req.params;
    const updates = req.body;

    const updatedComment = await updateComment(commentId, updates);
    res.status(200).json({
      status: "success",
      data: {
        updatedComment,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating comment" });
  }
};
const getCommentsByTaskController = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const comments = await getCommentsByTask(taskId);
    res.status(200).json({
      status: "success",
      data: {
        comments,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error getting comments" });
  }
};
const deleteCommentController = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;

    await deleteComment(commentId);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment" });
  }
};

export {
  createCommentController,
  updateCommentController,
  getCommentsByTaskController,
  deleteCommentController,
};
