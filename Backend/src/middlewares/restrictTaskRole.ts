import { Request, Response, NextFunction } from "express";
import { TaskRole } from "../types/role.types";
import Task from "../models/task.model";
import WorkspaceMember from "../models/workspacemember.model";

const restrictTaskRole = (...allowedRoles: TaskRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { taskId } = req.params;

      const task = await Task.findById(taskId);
      if (!task) {
        res.status(404).json({ message: "Task not found" });
        return;
      }

      if (!req.user) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }
      const member = await WorkspaceMember.findOne({
        userId: req.user.id,
        workspaceId: task.workspaceId,
      });

      if (!member) {
        res.status(403).json({ message: "Not a workspace Member" });
        return;
      }

      if (!allowedRoles.includes(member.role)) {
        res.status(403).json({ message: "Insufficient Permissions" });
      }

      req.task = task;
      req.workspaceId = task.workspaceId;
      req.memberRole = member.role;

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default restrictTaskRole;
