import express from "express";
const app = express();

const Home = (req, res) => res.send(req.route);
const Middle = (req, res, next) => console.log(next());

app.use(Middle);
app.get("/", Home);

app.listen(4000);