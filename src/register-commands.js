require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "soma",
    description: "Soma dois números",
    options:[
      {
        name: 'primeiro-numero',
        description: 'Primeiro Número.',
        type: ApplicationCommandOptionType.Number,
        choices:[
          {
            name: 'um',
            value: 1,
          },
          {
            name: 'dois',
            value: 2,
          },
          {
            name: 'tres',
            value: 3,
          },
        ],
        required:true,
      },
      {
        name: 'segundo-numero',
        description: 'Segundo Número.',
        type: ApplicationCommandOptionType.Number,
        required:true,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registro de Slach comando...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Slash comando foram registrados");
  } catch (error) {
    console.log(`Teve um erro: ${error}`);
  }
})();
