import express from "express";
import {
  createWorkspaceController,
  getUserWorkspacesController,
  getWorkspaceByIdController,
} from "../controllers/workspace.controller";
import { protectController } from "../controllers/auth.controller";

const router = express.Router();

router.post("/", protectController, createWorkspaceController);

router.get("/", protectController, getUserWorkspacesController);

router.get("/:workspaceId", protectController, getWorkspaceByIdController);

export default router;
