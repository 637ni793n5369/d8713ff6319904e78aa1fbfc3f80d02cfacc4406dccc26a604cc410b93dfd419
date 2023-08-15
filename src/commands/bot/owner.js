const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `\n\n`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Bill_Hub`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `Super Friends Zone#6697`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Bill's Hub`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[By GitHub](https://github.com/Bill716)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 