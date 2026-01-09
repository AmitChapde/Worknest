import express from "express";
import { protectController } from "../controllers/auth.controller";
import { getWorkspaceMembersByWorkspaceIdController } from "../controllers/workspacemember.controller";


const router=express.Router();


router.get("/:workspaceId/members",protectController,getWorkspaceMembersByWorkspaceIdController)





export default router;