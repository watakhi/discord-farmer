const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const config = require("./config.json");
client.user.setPresence({ status: 'invisible' });

client.on("messageCreate", async (message) => {
    if(message.type == "GUILD_MEMBER_JOIN") {
        try {
            await setTimeout(() => {
                message.reply(config.message);
            }, 1250);
        } catch (error) {
            console.error(error);
        }
    }
});

client.on("ready", () => {
  console.log(`🟢 ${client.user.username}`);
})

client.login(config.token);