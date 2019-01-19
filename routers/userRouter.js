import express from "express";
import routes from "../routers";
import {
  editProfile,
  userDetail,
  changePassword
} from "../controllers/userController";

import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);
export default userRouter;
