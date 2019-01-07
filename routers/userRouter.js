import express from "express";
import routes from "../routers";
import {
  editProfile,
  userDetail,
  changePassword
} from "../controllers/userController";
const userRouter = express.Router();
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);
export default userRouter;
