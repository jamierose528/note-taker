const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const htmlRoute = require("./route/htmlroute");
const apiRoute = require("./route/apiroute");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/", htmlRoute);

app.use("/api", apiRoute);

app.listen(PORT, () => {
  console.log("App is listening on PORT", PORT);
});
