import express from "express"
import {userView, loginView} from "../controllers/userContoller"

const userRouter = express.Router();

userRouter.get("/",userView);
userRouter.get("/login",loginView);


export default userRouter;
