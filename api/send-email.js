import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env") });
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Serve Vite build output
app.use(express.static(path.join(__dirname, "../dist")));

// API endpoint — sends email via EmailJS REST API (server-side)
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          accessToken: process.env.EMAILJS_PRIVATE_KEY,
          template_params: {
            from_name: name,
            from_email: email,
            message,
            reply_to: email,
          },
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("EmailJS error:", text);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("EmailJS error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// SPA fallback — serve index.html for all other routes
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
