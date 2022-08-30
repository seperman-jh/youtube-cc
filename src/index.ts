import express from "express";
import morgan from "morgan"
import userRouter from "./routes/userRouter";


const app = express();
const Logger = morgan("");
const Home = (req, res) => res.send(req.route);


app.use("/user",Logger, userRouter);
app.get("/", Logger, Home );

app.listen(4000);
