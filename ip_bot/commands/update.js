const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('updates the ip'),
	async execute(interaction) {
		await interaction.reply('updated!');
	},
};