const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  if(!message.member.roles.get("YÖNETİM ROL ID") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Yeterli Yetkiniz Olmadığı için Bu Komutu Kullanamazsınız`).setColor("RANDOM").setTimestamp()).then(m => m.delete(5000));
  else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').addField("Hatalı Kullanım",`Lütfen Bir Kullanıcı Etiketleyiniz`).setFooter(message.author.username, message.author.avatarURL)).then(m => m.delete(10000));
    const kullanıcı = message.guild.member(member)
    kullanıcı.addRole("766779671656267776")//Change
    const embed = new Discord.RichEmbed()
    .setTitle("Volantis yönetim | ROL VERME")
    .setColor("RANDOM")
    .addField("Yetki Verildi", `<@!${kullanıcı.user.id}> Adlı Kullanıcıya Yetki Verildi`)
    .setFooter('Volantis / Rol Verme Botu')
    message.channel.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kemalist"],
  permLevel: 0
};
exports.help = {
  name: "kemalist",
  description: "Kullanıcıyı Yetki Verir",
  usage: "kemalist"
};
