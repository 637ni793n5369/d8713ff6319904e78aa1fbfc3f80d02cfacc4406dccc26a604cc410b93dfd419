const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "community-linkspanel") {
                interaction.deferUpdate();

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-linkspanel')
                            .setPlaceholder('❌┆Nothing selected')
                            .addOptions([
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "❓",
                                    value: "support-linkspanel",
                                },
                                {
                                    label: `Invite Bot`,
                                    description: `Invite Bot to your server`,
                                    emoji: "📨",
                                    value: "invite-linkspanel",
                                },
                                {
                                    label: `Community Server`,
                                    description: `Join the community server!`,
                                    emoji: "🌍",
                                    value: "community-linkspanel",
                                },
                            ]),
                    );

                let row = new Discord.ActionRowBuilder()
                    .addComponents(

                        new Discord.ButtonBuilder()
                            .setLabel("Community Server")
                            .setURL("https://discord.gg/wDR5afXCxs")
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                client.embed({
                    title: `🌍・Community Server`,
                    desc: `Talk and play games in the comunity server!`,
                    image: "https://cdn.discordapp.com/attachments/976202722409857095/1063162964242333696/standard_2.gif",
                    url: client.config.discord.botInvite,
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    })
}

 