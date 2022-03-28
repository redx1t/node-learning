const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/products/:id", (req, res) => {
  res.json(product.find(() => {}));
});

//catch 404
app.all("*", (req, res) => {
  res.status(404).send("Not found");
});
//all requests
app.listen(5000, () => {
  console.log("listening to port 5000");
});
