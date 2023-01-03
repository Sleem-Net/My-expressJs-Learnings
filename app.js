// Methods

const express = require("express");
const app = express();
const port = 5000;
let { people } = require("./data");

// static assets(express middleware)
app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  res.send("POST");
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}...`);
});
