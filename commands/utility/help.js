const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Help Command'),
    async execute(interaction) {
        await interaction.reply('Yes?');
    },
};