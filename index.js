require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


const employeeRoutes = require("./routes/employees");
app.use("/employees", employeeRoutes);

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

console.log("Serving static files from:", path.join(__dirname, "public"));

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
