const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

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

app.post("/users", (req, res) => {
  console.log("rest api is hitting");
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
