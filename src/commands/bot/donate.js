const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Bill_Hub PayPal")
                .setURL("https://paypal.me/Bi11Hu6")
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Donate`,
        desc: 'You dont need any moneys to use this bot.\nIf you like our work you can donate\nto us to support our work\n\nClick the button below for the PayPal page \n**Pay attention! sponsor is not required**',
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: "https://paypal.me/Bi11Hu6",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 