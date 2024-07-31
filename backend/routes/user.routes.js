import { Router } from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserFromSideBar } from "../controllers/user.controller.js";
const userRouter = Router();

userRouter.get("/",protectRoute,getUserFromSideBar)

export default userRouter