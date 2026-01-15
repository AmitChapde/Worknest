import { Document, Types } from "mongoose";

export interface IComment extends Document {
  content: string;
  taskId: Types.ObjectId;
  workspaceId: Types.ObjectId;
  createdBy: Types.ObjectId;
  isDeleted: boolean;
}

export interface createCommentInput {
  content: string;
  taskId: Types.ObjectId;
  workspaceId: Types.ObjectId;
  createdBy: Types.ObjectId;
  isDeleted: boolean;
}

export interface updateCommentInput {
  content: string;
}
