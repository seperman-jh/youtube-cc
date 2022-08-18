import express from "express";
const app = express();

const Home = (req, res) => {
  return res.send(req.headers);
};

app.get("/", Home);
app.listen(4000);