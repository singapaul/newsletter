const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// IN order to keep our static files!
app.use(express.static("public"));
// We need to use body parser in order to read values!
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/signup.html");
});

app.post("/", (request, response) => {
  let firstName = request.body.firstName;
  let lastName = request.body.lastName;
  let email = request.body.email;
  console.log(firstName,lastName,email);

  // response.send(firstName);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

baff07015e9efac10e3f5885eb1154b0-us12
