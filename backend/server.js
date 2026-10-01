const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/database");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/enquiries", enquiryRoutes);

// Connect MongoDB
connectDB();

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Nexora Tech Academy Backend is running!",
        status: "success"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Nexora backend running on http://localhost:${PORT}`);
});