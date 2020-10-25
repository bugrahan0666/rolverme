const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

    const embed = new Discord.RichEmbed()
    .setTitle("VOLANTIS ROL VERME BOTU")
    .setColor('RANDOM')
    .setImage('https://media.giphy.com/media/KiBhKs6ViSiWE4kyMv/giphy.gif')
    .addField(`💥ROL VERME YARDIM💥`, 
              
    ` -💥**couple ve alone ** Sevgili rolu verilir!
      -💥**vocalist** Sesi guzel olanlara verilir!
      -💥**impactorcommandrver** Kayitci rolu verir!
      -💥**uyari 1 uyari2 uyari3** Uyari vermenizi saglar!
      -💥**ressam** resim cizenlere verilir!
      -💥**sair** siirle ugrasanlara verilir!
      -💥**yazilimci** Yazilimla ugrasanlara verilir!
      -💥**tasarimci** Tasarimla ugrasanlara verilir!
      -💥**gitarist** Burcunuzun şanslı sayısını bulmanızı sağlar!
      -💥**kemalist** Keman calanlara verilir!
      -💥**terapistver** terapist rolu verilir!
      -💥**rehberver** Rehber rolu verilir!
      -💥**sorumlu ekip** Sorumlu ekip rolu verilir!
      -💥**among us** Among us oynayanlara verilir!`)
    
     message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help' , 'yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};