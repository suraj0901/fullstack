if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const db = require("./src/config/db.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
db.sync({ force: true });
app.use((req, res, next) => {
  const { path, method } = req;
  console.log(`${method} ${path}`);
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is listening on port ${PORT}`);
});
