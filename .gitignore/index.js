const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("/");

bot.on("ready", function()  {
    bot.user.setGame("Faggot Never Die");
    console.log("Bot Ready");
})

bot.login("MzcxMzYyMTQyMjIzNDY2NDk2.DSb0Gw.r8xoTLHoiKSQgNCK-fCTkEzxJpM");

