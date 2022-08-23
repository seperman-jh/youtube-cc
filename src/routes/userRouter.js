import express from "express"
import morgan from "morgan";

const userRouter = express.Router();
const Logger = morgan("");

const userView = (req, res) => res.send('<a href="/user/login">Login click</a>');
const loginView = (req, res) => res.send("Login View");

userRouter.get("/",Logger,userView);
userRouter.get("/login",loginView);

export default userRouter;