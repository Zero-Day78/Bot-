const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var prefix = `-`;


/////////////////////////////////////////BOT ACTIVITY////////////////////////////////////////////////////////////////////////////

bot.on("ready", async () => {
  console.log(`${bot.user.username} Bot Ready!`);

bot.user.setActivity("Playing -help", {type: "STREAMING", url: "https://www.twitch.tv/Take-Two Interactive" });
});


/////////////////////////////////////////////////////GUILD MEMBERS ADD/REMOVE//////////////////////////////////////////////////////////////////////////////////////////////////////////

bot.on('guildMemberAdd', member => {


  const welcomechannel = member.guild.channels.find('id', '316317809636540417') // ID channel
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Welcome <@${member.user.id}> To see all available offers Click [__**Here**__](https://discord.gg/ZDCSxD)`)
  .setFooter('Developed by Zero-Day#0001')
  return welcomechannel.send({embed})
  });

bot.on('guildMemberRemove', member => {


const welcomechannel = member.guild.channels.find('id', '557071297113227264') // ID channel
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`<@${member.user.id}> Has left the Server`)
return welcomechannel.send({embed})
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
bot.on("message", function(message) { var input = message.content.toUpperCase();


if (message.content.match (/paypal/))
{     
  const embed = new Discord.RichEmbed()
  .addField("***All sellers accept Paypal and Steam Gift Card***","To Buy With Paypal Click [__**Here**__](https://www.paypal.me/ZeroDay78)\r\rTo Buy With Steam Gift Card Click [__**Here**__](https://www.g2a.com/fr-fr/search?query=steam%20gift%20card)")
  .setColor('RANDOM')
  .setThumbnail("https://i.goopics.net/qnxLa.png")
  .setFooter('Contact Only Admin meet in-game to buy.')
  message.channel.send({embed});
}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Checking Ping...`).then(m => {
    m.edit(`Wew, Made it over the Waves ! \nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API is ` + Math.round(bot.ping) + `ms.`);
    });
}

///////////////////////////////////////////////////////FUN/TROLL SECTION/////////////////////////////////////////////////////////////////////////////////////////

if(cmd === `${prefix}finsheur`){
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Finsheur #ElsaJean", "https://i.goopics.net/vbxr9.png")
.setTitle("Finsheur est en train de Rush l'Objectif avec sa Ash! R.I.P")
.setDescription(`<@${message.author.id}>`)
 message.channel.send({embed});
}}
/////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}nekho`){
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("NekhoEU #AnnaPolina", "https://i.goopics.net/1xDZN.png")
.setTitle("Nekho a encore une connexion de merde. Merci Orange!")
.setDescription(`<@${message.author.id}>`)
 message.channel.send({embed});
}}
//////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}globe`){
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("GL0l3e #MiaMalkova", "https://i.goopics.net/mkdlW.png")
.setTitle("Je crois que Gl0l3e a repérer un mito!")
.setDescription(`<@${message.author.id}>`)
 message.channel.send({embed});
}}
//////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}zeroday`){
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Zero-Day #KrystalBoyd", "https://i.goopics.net/KaAby.png")
.setTitle("Fuck Take-Two Interactive and Rockstar Games")
.setDescription(`<@${message.author.id}>`)
 message.channel.send({embed});
}}
/////////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}sweaz`){
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Gotaga", "https://i.goopics.net/dkY9J.png")
.setTitle("Sweaz c'est encore fait braquer et a trouver la mort")
.setDescription(`<@${message.author.id}>`)
  message.channel.send({embed});
}}
////////////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}sopra`){
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Sopra #CopperArmy", "https://i.goopics.net/Y0jqg.png")
.setTitle("Mais la si je veux je vais jusqu'au Platine mais la flemme")
.setDescription(`<@${message.author.id}>`)
  message.channel.send({embed});
}}



///////////////////////////////////////COMMAND HELP///////////////////////////////////////////////////////

if (message.content.toLowerCase().startsWith(prefix + `help`)) {
  const embed = new Discord.RichEmbed()
  .setTitle(`Take-Two Help`)
  .setColor("RANDOM")
  .setDescription(`Hello! I'm Take-Two, The Discord bot for super cool stuff and more! Here are my commands:`)
  .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident\n[${prefix}report]() > Report a member | **-report [user] [reason]**`)
  .addField(`Misc`, `[${prefix}help]() > Shows you this help menu \n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}invite]() > Create invitation link\n[${prefix}botinfo]() > Get bot information\n[${prefix}servinfo]() > Get server information`)
  .addField(`Shop`, `[${prefix}money]() > To see the shop\n[${prefix}rate]() > To rate an service in rating channel`)
  .addField(`Moderator`, `[${prefix}ban]() > Ban a member | **-ban [user] [reason]**\n[${prefix}kick]() > Kick a member | **-kick [user] [reason]**`)
  .setFooter('Developed by Zero-Day#0001')
  message.channel.send({ embed: embed });
}
//////////////////////////////////////////////////////////////////////////OPEN TICKET///////////////////////////////////////////////////////////////////////////////////

if (message.content.toLowerCase().startsWith(prefix + `new`)) {
  const reason = message.content.split(" ").slice(1).join(" ");
  if (!message.guild.roles.exists("name", "Supports")) return message.channel.send(`This server doesn't have a \`Supports\` role, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
  if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
  message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
      let role = message.guild.roles.find("name", "Supports");
      let role2 = message.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
      .setTimestamp();
      c.send({ embed: embed });
  }).catch(console.error);
}

////////////////////////////////////////////////////////////////////////////DELETE TICKET//////////////////////////////////////////////////////////////////////////////////////

if (message.content.toLowerCase().startsWith(prefix + `close`)) {
  if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the \`close\` command outside of a \`ticket channel\`.`);

  message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`  This will time out in 10 seconds and be cancelled.`)
  .then((m) => {
    message.channel.awaitMessages(response => response.content === '-confirm', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
            m2.delete();
        }, 3000);
      });
  });
}


//////////////////////////////////////////PRICE SECTION//////////////////////////////////////////////////


if(cmd === `${prefix}money`){
{   
  
  const embed = new Discord.RichEmbed()
  .addField("Simple Drop 2.5k/sec (R* Account Not Required).","[2€ = 2 Millions 2.5k/sec](https://www.paypal.me/ZeroDay78/2)\r\r[4€ = 4 Millions 2.5k/sec](https://www.paypal.me/ZeroDay78/4)\r\r[6€ = 6 Millions 2.5k/sec](https://www.paypal.me/ZeroDay78/6)\r\r[8€ = 8 Millions 2.5k/sec](https://www.paypal.me/ZeroDay78/8)\r\r[10€ = 10 Millions 2.5k/sec](https://www.paypal.me/ZeroDay78/10)")
  .setColor('#0D7EFF')
  .addField('Insane Stealth Drop 10M/sec (R* Account Required).',"[5€ = 250 Millions 10M/sec Max Stats + Unlock all + Rank 120:globe_with_meridians:](https://www.paypal.me/ZeroDay78/5)\r\r[10€ = 500 Millions 10M/sec Max Stats + Unlock all + Rank 250:globe_with_meridians:](https://www.paypal.me/ZeroDay78/10)\r\r[15€ = 20 Billions 10M/sec Max Stats + Unlock all + Rank 420:globe_with_meridians:](https://www.paypal.me/ZeroDay78/15)\r\rDonation Click [**__Here__**](https://www.paypal.me/ZeroDay78/)")
  .setFooter("Developed by Zero-Day#0001")
  .setThumbnail("https://hacktuces.net/wp-content/uploads/2017/06/dollars-gta-V-300x300.png")
  .setTitle("Contact only admin meet in-game to buy")
  message.channel.send({embed});
}}

////////////////////////////////////////////////////////////RATING SECTION///////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(cmd === `${prefix}rate`){
{     
  const embed = new Discord.RichEmbed()
  .addField("**Rate The Services**","[**__Max Stars: 5__**](https://discord.gg/Ya7unwV)\r:star:Bad\r\r:star::star:Yeah...\r\r:star::star::star:Good\r\r:star::star::star::star:Very good\r\r:star::star::star::star::star:Excellent\r\rTo rate the Service Use: **-rate1** **-rate2** **-rate3** **-rate4** **-rate5**")
  .setColor('RANDOM')
  .setFooter('Developed by Zero-Day#0001')
  message.channel.send({embed});
}}

////////////////////////////////////////////////

if(cmd === `${prefix}rate1`){
{     
  const embed = new Discord.RichEmbed()
  .setTitle("***Very Bad....***:star:")
  .setColor('#0D7EFF')
  message.channel.send({embed});
}}

////////////////////////////////////////////////

if(cmd === `${prefix}rate2`){
{     
  const embed = new Discord.RichEmbed()
  .setTitle("***Yeah....***:star::star:")
  .setColor('#0D7EFF')
  message.channel.send({embed});
}}

///////////////////////////////////////////////

if(cmd === `${prefix}rate3`){
{     
  const embed = new Discord.RichEmbed()
  .setTitle("***Good***:star::star::star:")
  .setColor('#0D7EFF')
  message.channel.send({embed});
}}

///////////////////////////////////////////////

if(cmd === `${prefix}rate4`){
{     
  const embed = new Discord.RichEmbed()
  .setTitle("***Very good***:star::star::star::star:")
  .setColor('#0D7EFF')
  message.channel.send({embed});
}}

///////////////////////////////////////////////

if(cmd === `${prefix}rate5`){
{     
  const embed = new Discord.RichEmbed()
  .setTitle("***Excellent !!!***:star::star::star::star::star:")
  .setColor('#0D7EFF')
  message.channel.send({embed});
}}

////////////////////////////////////////////////////////////KICK SECTION/////////////////////////////////////////////////////////////////////////////////////

  if(cmd === `${prefix}kick`){

 

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("**Can't find user!**");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("**This person can't be kicked!**");
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You don't have `KICK_MEMBERS` permissons.**");
    if(!kReason) return message.channel.send("**Please provide a reason!**")


    let kickEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "serverlog");
    if(!kickChannel) return message.channel.send("**Can't find `serverlog` channel.**");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

///////////////////////////////////////////////////////////BAN SECTION///////////////////////////////////////////////////////////////////////////////////////

  if(cmd === `${prefix}ban`){



    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("**Can't find user!**");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You don't have `BAN_MEMBERS` permissons.**");
    if(!bReason) return message.channel.send("**Please provide a reason!**")
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("**This person can't be banned!**");
  
  
    let banEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("Banned User", `${bUser} with ID ${bUser.id}`)
      .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Banned In", message.channel)
      .addField("Reason", bReason);
  
      let incidentchannel = message.guild.channels.find(`name`, "serverlog");
      if(!incidentchannel) return message.channel.send("**Can't find `serverlog` channel.**");
  
      message.guild.member(bUser).ban(bReason);
      incidentchannel.send(banEmbed);
  
  
      return;
    } 

////////////////////////////////////////////////////REPORT SECTION////////////////////////////////////////////////////////////////////////////////////////////////////

  if(cmd === `${prefix}report`){


    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "serverlog");
    if(!reportschannel) return message.channel.send("**Couldn't find `serverlog` channel.**");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

///////////////////////////////////////////////////////SERVEUR INFORMATION/////////////////////////////////////////////////////////////////////////////////////////////////////////

  if(cmd === `${prefix}serverinfo`){


    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Serveur Information")
    .setColor("RANDOM")
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .setThumbnail("https://i.goopics.net/D4nel.png")//("bicon") pour la photo de profil du bot
    return message.channel.send(serverembed);
  }

/////////////////////////////////////////////BOT INFORMATION////////////////////////////////////////////////////////////////////////////

  if(cmd === `${prefix}botinfo`){


    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail("https://i.goopics.net/GQxev.png")
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

///////////////////////////////////////////CREATE INVITATION//////////////////////////////////////////////////////////////////////

  if(cmd === `${prefix}invite`){

                              
		message.guild.channels.get('316317809636540417').createInvite() // CHANNEL INVITATION
		.then(invite => message.author.sendMessage(`Invite Link: ${invite.url}`))
    .catch(error => message.reply(`Unable to generate invite, error: ${error}`))
  }


//////////////////////////////////////TOKEN//////////////////////////////////////////////////

bot.login(process.env.TOKEN);


});
