const express = require("express");
const Enquiry = require("../models/Enquiry");

const router = express.Router();

// Create a new enquiry
router.post("/", async (req, res) => {
    try {
        const { name, phone, email, course, message } = req.body;

        // Validate required fields
        if (!name || !phone || !course) {
            return res.status(400).json({
                success: false,
                message: "Name, phone and course are required."
            });
        }

        // Save enquiry
        const enquiry = new Enquiry({
            name,
            phone,
            email,
            course,
            message
        });

        await enquiry.save();

        res.status(201).json({
            success: true,
            message: "Enquiry submitted successfully!",
            enquiry
        });

    } catch (error) {
        console.error("Enquiry error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to submit enquiry."
        });
    }
});

module.exports = router;