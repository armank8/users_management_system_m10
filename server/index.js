const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://armank:armank12@cluster0.y0bza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);


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
