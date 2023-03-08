require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} está online.`);
});

client.on("messageCreate", (message) => {
  //console.log(message.content); //Mostra todas as mensagens do server no console log.
  if (message.author.bot) {
    return;
  }

  if (
    message.content === "olá" ||
    message.content === "ola" ||
    message.content === "oi"
  ) {
    message.reply("Chupa minhas bolas!");
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }
});

client.login(process.env.TOKEN);
