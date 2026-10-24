require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

app.command("/polka-ping", async ({ ack, respond }) => {
    await ack();
    await respond("🏓 Pong! POLKA is online!");
});

app.command("/polka-coin", async ({ ack, respond}) => {
    await ack();

    const result = Math.random() <0.5 ? "Heads" : "Tails";

    await respond(`🪙 POLKA flipped a coin: *${result}*!`);
});

app.command("/polka-roll", async ({ ack, respond }) => {
    await ack();

    const roll = Math.floor(Math.random() * 6) + 1;

    await respond(`🎲 POLKA rolled a dice: *${roll}*!`);
});

(async () => {
    await app.start();
    console.log("POLKA is running!");
})();


