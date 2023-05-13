const express = require("express");
const app = express();
const port = 3000;

var indexRouter = require("./routes/index");

var path = require("path");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
