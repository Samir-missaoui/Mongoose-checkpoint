const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect(
  "mongodb+srv://user:USER@mongoose.kpyid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (err) => (err ? console.log(err) : console.log("database connected"))
);

const user = require("./Prototype/person");

app.use("/api/users", require("./routes/PersonRoute"));

app.listen(5000, () => console.log("server is running on port 5000"));
