const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(require("./route/htmlroute"));

app.use(require("./route/apiroute"));

app.listen(PORT, () => {
  console.log("App is listening on PORT", PORT);
});
