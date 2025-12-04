import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ---------------------------
// EMAIL CONFIG (Resend)
// ---------------------------
const resend = new Resend(process.env.RESEND_API_KEY);

// ---------------------------
// CONTACT ROUTE
// ---------------------------
app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "your-email@example.com", // Replace with your real email
      subject: subject || "New Contact Message",
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, error: "Email sending failed" });
  }
});

// ---------------------------
// BASIC SERVER CHECK
// ---------------------------
app.get("/", (req, res) => {
  res.send("Portfolio backend running...");
});

// ---------------------------
// START SERVER
// ---------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
