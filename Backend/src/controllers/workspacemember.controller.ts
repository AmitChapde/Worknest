import { getWorkspaceMembersByWorkspaceId } from "../services/workspaceMember.service";
import { Request, Response } from "express";

const getWorkspaceMembersByWorkspaceIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { workspaceId } = req.params;
    const members = await getWorkspaceMembersByWorkspaceId(workspaceId);

    res.status(200).json({
      status: "success",
      data: {
        members,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user Workspaces" });
  }
};

export { getWorkspaceMembersByWorkspaceIdController };
