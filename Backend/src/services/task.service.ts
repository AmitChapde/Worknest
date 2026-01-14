import Task from "../models/task.model";
import { createTaskInput,UpdateTaskInput } from "../types/task.types";

const createTask = async ({
  title,
  description,
  boardId,
  workspaceId,
  createdBy,
  status,
  order,
}: createTaskInput) => {
  const newTask = await Task.create({
    title,
    description,
    boardId,
    workspaceId,
    createdBy,
    status,
    order,
  });
  return newTask;
};

const getTasksByBoard=async(boardId:string)=>{
    const tasks=await Task.find({boardId});
    return tasks;
}

const updateTask=async(taskId:string,updates:UpdateTaskInput)=>{
    const updatedTask=await Task.findByIdAndUpdate(taskId,
        {$set:updates},
        {
            new:true,//return updated document
            runValidators:true //enforce schema rules
        }
    )
    return updatedTask;
}


const deleteTask=async(taskId:string,)=>{
    const task=await Task.findByIdAndDelete(taskId);
    return task;
}
export {createTask,getTasksByBoard,deleteTask,updateTask};
