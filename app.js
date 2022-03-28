const express = require("express");

const app = express();
const logger = (req, res, next) => {
  console.log(req.url);
  next();
};
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/products/:id", (req, res) => {
  res.json(product.find(() => {}));
});

app.get("/products", logger, (req, res) => {
  //access query parameters
  console.log(req.query);
  res.json(product.find(() => {}));
});

//catch 404
app.all("*", logger, (req, res) => {
  res.status(404).send("Not found");
});
//all requests
app.listen(5000, () => {
  console.log("listening to port 5000");
});
