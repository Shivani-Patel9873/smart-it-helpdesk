const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const ticketRoutes = require("./routes/ticketRoutes");

dotenv.config();

connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tickets", ticketRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Smart IT Helpdesk Backend Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on Port ${PORT}`);
});