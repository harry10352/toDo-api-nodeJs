import { Router } from "express";
import { UserEndPoints } from "../../api/enums/endpoints.enums";
import { validateToken } from "../../utils/validate-token";
import {
  deleteUser,
  getUser,
  getUserById,
} from "../../controller/user.controller";

const router = Router();
router.post(UserEndPoints.GET_ALL, validateToken, getUser);
router.post(UserEndPoints.GET, validateToken, getUserById);
router.post(UserEndPoints.DELETE_USER, validateToken, deleteUser);

export { router as UserRouter };
