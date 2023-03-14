const express = require("express");
const app = express();
const port = 3000;

app.get("/index", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  console.log(c);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
