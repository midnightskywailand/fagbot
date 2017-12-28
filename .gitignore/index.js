const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function()  {
    bot.user.setGame("Faggot Never Die");
    console.log("Bot Ready");
})

bot.login("MzcxMzYyMTQyMjIzNDY2NDk2.DSbfEQ.GNft6gHVxsiuZgv2lISy61_KWu0");
