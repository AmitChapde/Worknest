import { Request, Response, NextFunction } from "express";
import { BoardRole } from "../types/role.types";
import { getBoardById } from "../services/board.service";
import WorkspaceMember from "../models/workspacemember.model";

const restrictBoardRole = (...allowedRoles: BoardRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { boardId } = req.params;
      if (!boardId) {
        res.status(400).json({ message: "Board ID Missing" });
        return;
      }

      const board = await getBoardById(boardId);
      if (!board) {
        res.status(404).json({ message: "Board not found" });
        return;
      }

      if (!req.user) {
        res.status(401).json({ messae: "Unauthorized" });
        return;
      }
      const member = await WorkspaceMember.findOne({
        userId: req.user.id,
        workspaceId: board.workspaceId,
      });

      if (!member) {
        return res
          .status(404)
          .json({ message: "User is not workspace member" });
        return;
      }
      if (!allowedRoles.includes(member.role)) {
        return res.status(403).json({ message: "Insufficient Permissions" });
      }

      //attaching context for downstream use to avoid redundant fetching
      req.board = board;
      req.workspaceId = board.workspaceId;
      req.memberRole = member.role;

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default restrictBoardRole;
