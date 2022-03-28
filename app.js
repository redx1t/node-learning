const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Homepage");
});
app.all("*", (req, res) => {
  res.status(200).send("Not found");
});
//all requests
app.listen(5000, () => {
  console.log("check");
});
