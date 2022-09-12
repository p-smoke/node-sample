const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({msg: "It is working"})
});
app.get("/home", (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});