const express = require("express");
const axios = require("axios");

const app = express();

// Render gives dynamic port
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Cricket Proxy is running");
});

app.get("/live", async (req, res) => {
  try {
    const r = await axios.get(
      "https://www.cricbuzz.com/api/cricket-match/live-scores",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 13; Pixel 7)",
          "Accept": "application/json",
          "Referer": "https://www.cricbuzz.com/"
        }
      }
    );

    res.json(r.data);
  } catch (e) {
    console.error("Cricbuzz error:", e.message);
    res.status(500).json({ error: "Cricbuzz blocked" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
