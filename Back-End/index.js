const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./constant/db.config");
const allroutes = require("./routes");

const app = express();
connectDB();
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(express.json());          // ✅ Parse JSON before routes
app.use("/", allroutes);          // ✅ Then mount all routes

app.get("/", (req, res) => {
  res.send("✅ Server running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
