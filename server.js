const express = require("express");
const app = express();

const port = 3050;

// Define a default route
app.get("/", (req, res) => {
  res.send(
    "Welcome to express practice application"
  );
});

// Start the Express app and listen on the specified port
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

module.exports = app;

