import { Request, Response, NextFunction } from "express";
import Comment from "../models/comments.model";

const restrictComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId);

    if (!comment || comment.isDeleted) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }

    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const isOwner = comment.createdBy.toString() === req.user.id;

    if (!isOwner) {
      res.status(403).json({ message: "You are not allowed to modify this comment" });
      return;
    }

    // Set task and workspace context for downstream handlers
    req.task = comment.taskId as any;
    req.workspaceId = comment.workspaceId;

    next();
  } catch (error) {
    res.status(500).json({ message: "Error checking comment permissions" });
  }
};

export default restrictComment;
