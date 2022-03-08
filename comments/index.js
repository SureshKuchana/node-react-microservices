const express = require("express");
const cors = require("cors");

// creates express application
const app = express();

// express.json is body parser middleware
// it is responsible for parsing the incoming requests bodies in middleware before you handle it
// parsing of converting a JSON Object in text format to a JS Object
app.use(express.json());
// built-in middleware function in express.
// it parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));
// cors
app.use(cors());

// port
const PORT = process.env.PORT || 4444;

var routes = require("./routes");

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Comments Listening on PORT http://localhost:${PORT}`);
});
