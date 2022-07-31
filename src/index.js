import express from "express"

const app = express();
const callbacktest = (req, res) => console.log (req);
const porttest = () => console.log("hi");

//app.get("/", callbacktest);

app.listen(4000,porttest);
//app.listen(3000,callbacktest);



