const express = require("express");
const app = express();

// Makes the files in public available for the browser
app.use(express.static("public"));

// app.get(path, code)

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/homepage.html");
});

app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/views/contact.html");
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));
