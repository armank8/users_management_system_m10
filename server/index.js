const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());

const users = [
  { id: 1, name: "hritik", email: "hritik@gmail.com" },
  { id: 2, name: "shahrukh", email: "shahrukh@gmail.com" },
  { id: 3, name: "salman", email: "salman@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
