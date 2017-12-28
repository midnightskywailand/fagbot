#const Discord = require("discord.js");

#var bot = new Discord.Client();
var prefix = ("/");

#bot.on("ready", function()  {
    #bot.user.setGame("Faggot Never Die");
    #console.log("Bot Ready");
#})

bot.login("MzcxMzYyMTQyMjIzNDY2NDk2.DSb0Gw.r8xoTLHoiKSQgNCK-fCTkEzxJpM");

bot.on('message', message => {
    if (message.content === "bite" ){
        message.reply("Surveille ton language !");
        console.log('Bite interdit');
    }

    if (message.content === "salope"){
        message.reply("Surveille ton language !")
        console.log('Salope interdit')
    }

    if(message.content === "vagin"){
        message.reply("Surveille ton language !")
        console.log('Vagin interdit')
    }

    if(message.content === "chatte"){
        message.reply("Surveille ton language !")
        console.log('Chatte interdit')
    }

    if(message.content === "pute"){
        message.reply("Surveille ton language !")
        console.log('Pute interdit')
    }

    if(message.content === "enculer"){
        message.reply("Surveille ton language !")
        console.log('Enculer interdit')
    }

    if(message.content === "nique ta mere"){
        message.reply("Surveille ton language !")
        console.log('Nique ta mere interdit')
    }

    if(message.content === "ntm"){
        message.reply("Surveille ton language !")
        console.log('NTM interdit')
    }

    if(message.content === "fils de pute"){
        message.reply("Surveille ton language !") 
        console.log('Fils de pute interdit')
    }

    if(message.content === "baise ta mere"){
        message.reply("Surveille ton language !") 
        console.log('Baise ta Mere interdit')
    }

    

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#FD6C9E')
            .addField("Guide", " Pour utilisé les commandes, faut utiliser le préfix '/' ! ")
            .addField("Fun - 18 :cool:",  "`twister  banhammer  bass  blc  fag  ftg antoine  Ah  fuck  grumpy \n WOW  dafuq  herewego  facepalm  no  GTFO  Get Rekt  Faggot` ")
            .addField("Utilitaire - 3   :hammer_pick: ",  "`youtube  twitter  steam`")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du FagBot : \n  /help pour afficher les commandes");
        console.log("Commande Help");
    }
})
