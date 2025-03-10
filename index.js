const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// बॉट क्लाइंट बनाएं
const client = new Client();

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("WhatsApp Bot तैयार है!");
});

client.on("message", async (message) => {
    if (message.body === "hi") {
        message.reply("Hello! मैं तुम्हारा WhatsApp बॉट हूँ!");
    }
});

client.initialize();
