const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require("./models/User");

//Connection with the DB
mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const app = express();

require("./routes/authRoutes")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
