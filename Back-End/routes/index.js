// routes/index.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const routesPath = __dirname;

fs.readdirSync(routesPath).forEach((file) => {
  const filePath = path.join(routesPath, file);

  if (file === "index.js") return;
  if (path.extname(file) !== ".js") return;

  const route = require(filePath);
  const routeName = "/" + file.replace(".js", ""); // e.g., login.js → /login
  router.use(routeName, route);
});

module.exports = router;
