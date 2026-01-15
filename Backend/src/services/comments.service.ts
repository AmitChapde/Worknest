import Comment from "../models/comments.model";
import {
  createCommentInput,
  updateCommentInput,
} from "../types/comments.types";

const createComment = async ({
  content,
  taskId,
  workspaceId,
  createdBy,
  isDeleted,
}: createCommentInput) => {
  const newComment = await Comment.create({
    content,
    taskId,
    workspaceId,
    createdBy,
    isDeleted,
  });

  return newComment;
};

const getCommentsByTask = async (taskId: string) => {
  const comments = await Comment.find({ taskId });
  return comments;
};

const updateComment = async (
  commentId: string,
  updates: updateCommentInput
) => {
  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    { $set: updates },
    {
      new: true,
      runValidators: true,
    }
  );
  return updatedComment;
};

const deleteComment = async (commentId: string) => {
  const comment = await Comment.findByIdAndDelete(commentId);
  return comment;
};

export { createComment, getCommentsByTask, deleteComment, updateComment };
