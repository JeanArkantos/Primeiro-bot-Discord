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

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "soma"){
    const num1 = interaction.options.get('primeiro-numero')?.value;
    const num2 = interaction.options.get('segundo-numero')?.value;

    interaction.reply(`A soma dos números: ${num1 + num2}`);
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (
    message.content === "olá" ||
    message.content === "ola" ||
    message.content === "oi"
  ) {
    message.reply("Oi pra você!");
  }
});

client.login(process.env.TOKEN);
