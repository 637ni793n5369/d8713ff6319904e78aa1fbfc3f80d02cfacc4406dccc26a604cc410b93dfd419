const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1063167668816990330",
    token: "CcOABPteiYwg2VKqg1pBCjsBte231DO6z3CLzk9rGUUwVmVBhmLpd6c5Wowks96WBXvQ",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 