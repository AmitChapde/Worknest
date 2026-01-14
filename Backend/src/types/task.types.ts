import { Document, Types } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  boardId: Types.ObjectId;
  workspaceId: Types.ObjectId;
  createdBy: Types.ObjectId;
  status: "TODO" | "IN_PROGRESS" | "DONE";
  order: number;
}


export interface createTaskInput{
    title:string,
    description:string,
    boardId: Types.ObjectId,
    workspaceId: Types.ObjectId,
    createdBy: Types.ObjectId,
    status: "TODO" | "IN_PROGRESS" | "DONE",
    order:number
}


export interface UpdateTaskInput{
  name:string,
  description:string,
  status: "TODO" | "IN_PROGRESS" | "DONE",
  order:number
}