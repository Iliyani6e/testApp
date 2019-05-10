var express = require("express");
var app = express();
var port = 3000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
