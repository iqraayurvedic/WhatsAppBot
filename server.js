const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Verify Token Route
app.get("/webhook", (req, res) => {
    let VERIFY_TOKEN = process.env.VERIFY_TOKEN || "my_secret_token_123";
    
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (mode && token === VERIFY_TOKEN) {
        console.log("WEBHOOK VERIFIED");
        res.status(200).send(challenge);
    } else {
        res.status(403).send("Forbidden");
    }
});

// Default Route
app.get("/", (req, res) => {
    res.send("WhatsApp Bot is Running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
