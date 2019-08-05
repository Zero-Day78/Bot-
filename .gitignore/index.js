const botconfig = require("./botconfig.json");                             ///////////////////////////////////
const Discord = require("discord.js");                                     ////////////// V 3.0/////////////
const weather = require('weather-js');                                     ///////////////////////////////////
const bot = new Discord.Client({disableEveryone: true});
var client = new Discord.Client();
const fs = require("fs");
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const randomPuppy = require('random-puppy');
const superagent = require("snekfetch");
const ms = require("ms");
const moment = require('moment');
const config = require ("./botconfig.json");
const { RichEmbed } = require('discord.js');
const{ get } = require('node-superfetch');
const base64 = require("js-base64").Base64;
const malScraper = require('mal-scraper');
const request = require('request');
var steam = require('steam-provider')
const Canvas = require('canvas');
//const gifSearch = require("gif-search");//


///////////////////////////////////////////////////////////
////////////////////////////V2.2///////////////////////////
///////////////////////////////////////////////////////////
//-added verication 
//-added decrypt/encrypt message
//-added meme command
///////////////////////////////////////////////////////////
//////////////////////////V2.3/////////////////////////////
///////////////////////////////////////////////////////////
//-added anime research 
//-added VDM commands
//-added steam research command
//-added yes or no command
///////////////////////////////////////////////////////////
/////////////////////////V2.4//////////////////////////////
///////////////////////////////////////////////////////////
//-added Anti-Link Protection
//-added Bad-Word Protection  (need work)
///////////////////////////////////////////////////////////
/////////////////////////V2.4.1////////////////////////////
///////////////////////////////////////////////////////////
//-improved Anti-Link Protection
//-added auto role 
///////////////////////////////////////////////////////////
/////////////////////////V2.4.2////////////////////////////
///////////////////////////////////////////////////////////
//-improved Bad-Word List
///////////////////////////////////////////////////////////
/////////////////////////V2.4.3////////////////////////////
///////////////////////////////////////////////////////////
//-updated shop
//-fixed some bug
///////////////////////////////////////////////////////////
/////////////////////////V3.0////////////////////////////
///////////////////////////////////////////////////////////
//-rework welcome message

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////TOKEN/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

bot.login(process.env.TOKEN);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////BOT ACTIVITY//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////




bot.on("ready", async () => {
console.log(`${bot.user.username} Bot Ready`);

bot.user.setActivity("v3.4 -help", {type: "STREAMING", url: "https://www.twitch.tv/Fuck-Take-Two"});
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////GUILD MEMBERS ADD REMOVE////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'welcome');
	if (!channel) return;

	const canvas = Canvas.createCanvas(1200, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./Header.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '48px Comic Sans MS';
	ctx.fillStyle = '#000000';
  ctx.fillText(`Welcome to the Server,${member.displayName}`, canvas.width / 5, canvas.height / 2.2);
  
	//ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#000000';
	ctx.fillText(`This Server currently has ${member.guild.memberCount} Members.`, canvas.width / 5, canvas.height / 1.5);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(attachment);
});





bot.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'serverlog');
	if (!channel) return;

	const canvas = Canvas.createCanvas(1200, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./Header.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.font = '48px Comic Sans MS';
	ctx.fillStyle = '#000000';
  ctx.fillText(`${member.displayName},Has left the Server`, canvas.width / 5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

  channel.send(`${member}`, attachment);
});




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// OLD GUILD MEMBERS ADD REMOVE ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//bot.on('guildMemberAdd', member => {
  //let logChannel = member.guild.channels.find('name', 'welcome');
  
  //let logEmbed = new Discord.RichEmbed()
  //.setColor('RANDOM')
  //.setTitle(`**Welcome to ${member.guild.name} server**`)
  //.setDescription(`**We are now  ${member.guild.memberCount} Members on this server**<@${member.user.id}>`)
  //.setThumbnail(member.user.displayAvatarURL)
  //.setFooter(`If you want any help type [-help]`)
  //.setTimestamp()
  //logChannel.send(logEmbed);
//});



  //bot.on('guildMemberRemove', member => {
  //let logChannel = member.guild.channels.find('name', 'serverlog');
  
    //let logEmbed = new Discord.RichEmbed()
    //.setColor('RANDOM')
    //.setDescription(`<@${member.user.id}> Has left the Server`)
    //.setTimestamp()
    //.setFooter(member.user.id, member.user.displayAvatarURL)
    
    
   // logChannel.send(logEmbed);
  //});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// AUTOROLE ON JOIN /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Members");
    member.addRole(role).catch(console.error);
  });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////INDISPENSABLE POUR LE CODE CI DESSOUS////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

bot.on("message", function(message) { var input = message.content.toUpperCase();

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////INDISPENSABLE POUR LE CODE CI DESSOUS////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
if (message.channel.type == "dm") return;
	//if (message.member.hasPermission('MANAGE_MESSAGE')) return;
    const Link = ["fuck",".gg","dick","cock","cunt","nigga","nigger","shit","biatch","bitch","feck","homo","bastard","f u c k e r","f u c k","ejacu","d1ck","anus"];
   if (Link.some(Link => message.content.toLowerCase().includes(Link))) {
       message.delete();
       let m = new RichEmbed()
        .setColor("RANDOM") 
        .setDescription(`${message.author} **Anti-Link and Bad-Word Protection Enable**`)
        .setTimestamp()
        message.channel.send(m).then(m => { m.delete(10000);});

        log = new Discord.RichEmbed()
        log.setAuthor(name=`${message.author.tag}`, icon=message.author.avatarURL)
        log.setDescription('**Offensive word or link found in** '+ message.channel)
        log.setColor('RANDOM') 
        log.setTitle(`Message:  ${value=message.content}`)
        log.setFooter(name=`ID: ${message.author.id}`)
        log.setTimestamp()
        channel = message.guild.channels.find(channel => channel.name === 'serverlog');
        
       channel.send(log)
     }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
if (message.content.startsWith(prefix + 'flip')) {
  message.delete();

const rolled = Math.floor(Math.random() * 2) + 1;

  let headembed = new Discord.RichEmbed()

  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .addField(`__Coin Flip Result:__`,`You flipped a: **Heads**!`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setFooter(`${message.author.tag}`)
  .setColor("0xff1053")
  .setTimestamp();

  let tailembed = new Discord.RichEmbed()

  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .addField(`__Coin Flip Result:__`,`You flipped a: **Tails**!`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setFooter(`${message.author.tag}`)
  .setColor("0x00bee8")
  .setTimestamp();

  if (rolled == "1")
  {
    message.channel.send(tailembed);
  }
  if (rolled == "2")
  {
    message.channel.send(headembed);
  }
	
	

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
if (message.content.startsWith(prefix + 'dmall')) {
  message.delete();
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
  color: 6291711,
  description: `${message.author} **You don't have __ADMINISTRATOR__ permission.**`,
  footer: {
  text: `${message.author.tag} with ID: ${message.author.id} Tried to send DM's to everyone`
    }
}});


let dmGuild = message.guild;
let role = message.mentions.roles.first();
const thingtoEcho = args.join(" ")
var msg = message.content;


try {
    msg = msg.substring(msg.indexOf("dmall") + 5);
    let DMAllEmbed = new RichEmbed() 
    .setColor("RANDOM") 
    .setDescription(thingtoEcho)
    .setTimestamp()
    .setFooter(`Mass DM's Send by ${message.author.tag}`);
    
    message.channel.send(DMAllEmbed)
} catch(error) {
  
    console.log(error);
    return;
}

if(!msg || msg.length <= 1) {
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .addField("__**Failed to send**__", "Message not specified")
        .addField("__**Listen up!**__", "Every character past the command will be sent,\rand apparently there was nothing to send.")
        .setFooter(`${message.author.tag} with ID: ${message.author.id} Tried to send DM's to everyone`);
    message.channel.send({ embed: embed });
    return;
}

let memberarray = dmGuild.members.array();
let membercount = memberarray.length;
console.log(`Responding to ${message.author.username} :  Sending message to all ${membercount} members of ${dmGuild.name}.`)
for (var i = 0; i < membercount; i++) {
    let timeout = Math.floor((Math.random() * (config.wait - 0.01)) * 1000) + 10;
    let member = memberarray[i];
    await sleep(timeout);
    if(i == (membercount-1)) {
        
    } else {
        
    }
    let DMuserEmbed = new RichEmbed() 
    .setColor("RANDOM") 
    .setDescription(`${msg}`)
    .setTimestamp()
    .setFooter(`Message send by ${message.author.tag}`);
    
    member.send(DMuserEmbed)
    
    }
}


function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
if (message.content.startsWith(prefix + "yesorno")) {
  message.delete();
  let color = 'RANDOM'
  const { body } = await superagent
.get('https://yesno.wtf/api/');
if(body.answer === 'yes') color = 'RANDOM';
if(body.answer === 'no') color = 'RANDOM';
const embed = new Discord.RichEmbed()
.setColor(color)
.setImage(`${body.image}`)
.setAuthor(`The Magic Bot says: ${body.answer}`, message.author.displayAvatarURL)
.setFooter(`Requested by ${message.author.tag}`)
.setTimestamp()
 message.channel.send(embed)


}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var provider = new steam.SteamProvider();

if (message.content.startsWith(prefix + "steam")) {
  message.delete();
  let m = new RichEmbed()

  .setColor("#36393f") 
  .setTitle('**Please Wait...**')
  .setTimestamp()
   message.channel.send(m).then(m => { m.delete(1200);});

    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply(`**Provide a name. Example: \`${prefix}steam portal\`**`)
    provider.search(game).then(result => {
    provider.detail(result[0].id, "France", "fr").then(results => {
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
    .setTitle(result[0].name)
    .addField(`Game ID`, result[0].id)
    .setImage(results.otherData.imageUrl)
    .addField('Type', results.genres, true)
    .addField('Publishers', results.otherData.publisher, true)
    .addField('Platform', results.otherData.platforms, true)
    .addField('Metacritic Score', results.otherData.metacriticScore, true)
    .addField('Labels', results.otherData.features, true)
    .addField('Developers', results.otherData.developer, true)
    .addField('Price', `Normal Price **${results.priceData.initialPrice}** Reduced price **${results.priceData.finalPrice}** €`, true)
    .setFooter(`Requested by ${message.author.tag}`)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.channel.send('sorry`' + game + '`not found')
    })
})
})
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////                   ///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cooldown = new Set()

if (message.content.startsWith(prefix + "undefinedcommand")) {
if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 5 seconds!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 5 seconds..`)
    return message.channel.send(cooldownemb).then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {cooldown.delete(message.author.id);}, 10000);
    let m421 = args.join(" ");
if (!m421) return message.channel.send('Please define a name.')
if (m421.length > 30) return message.channel.send(`I can't rate your waifu! It's over 30 text!`)
    let result = Math.floor((Math.random() * 100) + 0);
  
    const happyrate = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ❤`)
  .setColor(`GREEN`)
    
      const sadembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 😭`)
  .setColor(`GREEN`)
      
        const idkembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 🤔`)
  .setColor(`GREEN`)
        
      const shrugembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 🤷`)
  .setColor(`GREEN`)
                
          const okembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👌`)
  .setColor(`GREEN`)
                        
const thumbupembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👍`)
  .setColor(`GREEN`)

const eyesembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👀`)
  .setColor(`GREEN`)
  
  if (result > 90) return message.channel.send(happyrate)
  if (result < 30) return message.channel.send(sadembed)
  if (result > 40) return message.channel.send(idkembed)
  if (result > 50) return message.channel.send(shrugembed)
  if (result > 60) return message.channel.send(okembed)
  if (result > 70) return message.channel.send(thumbupembed)
  if (result > 80) return message.channel.send(eyesembed)
}










/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////  VDM COMMAND  /////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if (message.content.startsWith(prefix + "vdm")) {
  message.delete();
      let m = new RichEmbed()

      .setColor("#36393f") 
      .setTitle('**Please Wait...**')
      .setTimestamp()
       message.channel.send(m).then(m => { m.delete(1200);});

const regex = /<p class=\"block hidden-xs\">\n<a href=\".*\">\n(.*) VDM/
request('https://www.viedemerde.fr/aleatoire', (error, response, body) => {
    if (error) {
        return console.error(error);
    }
    let vdm = regex.exec(body);
    const embed = new RichEmbed()

      .setColor("RANDOM") 
      .setAuthor(message.member.displayName, message.author.displayAvatarURL)
      .setDescription(vdm[1])
      .setTimestamp()
      message.channel.send({embed})
    
})};





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////ANIME RESEARCH/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (message.content.startsWith(prefix + "anime")) {

  message.delete();
      let m = new RichEmbed()

      .setColor("#36393f") 
      .setTitle('**Please Wait...**')
      .setTimestamp()
       message.channel.send(m).then(m => { m.delete(1500);});
const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor('RANDOM')
      .setAuthor(message.member.displayName, message.author.displayAvatarURL)
      .addField('English Title', data.englishTitle, true)
      .addField('Japanese Title', data.japaneseTitle, true)
      .addField('Type', data.type, true)
      .addField('Episodes', data.episodes, true)
      .addField('Rating', data.rating, true)
      .addField('Aired', data.aired, true)
      .addField('Score', data.score, true)
      .addField('Score Stats', data.scoreStats, true)
      .addField('Link', data.url);

      message.channel.send(malEmbed);

    
    })
    .catch((err) => console.log(err));
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////ENCRYPTED MESSAGE/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if (message.content.startsWith(prefix + "decrypt")) {
      message.delete();
      let m = new RichEmbed()

      .setColor("#36393f") 
      .setTitle('**Decryption in progress...**')
      .setTimestamp()
       message.channel.send(m).then(m => { m.delete(1500);});
      const b64Decoded = base64.decode(args.join(" "));
      const embed = new Discord.RichEmbed()
     .setAuthor(message.member.displayName, message.author.displayAvatarURL)
     .setColor('RANDOM')
     .setDescription(`***Decrypted Message***: ${b64Decoded}`)
     .setTimestamp()
      message.channel.send({embed})
}



if (message.content.startsWith(prefix + "encrypt")) {
      message.delete();
      let m = new RichEmbed()

      .setColor("#36393f") 
      .setTitle('**Encryption in progress...**')
      .setTimestamp()
       message.channel.send(m).then(m => { m.delete(1500);});
      const b64Encoded = base64.encode(args.join(" "));
      const embed = new Discord.RichEmbed()
     .setAuthor(message.member.displayName, message.author.displayAvatarURL)
     .setColor('RANDOM')
     .setDescription(`***Encrypted Message***: ${b64Encoded}`)
     .setTimestamp()
      message.channel.send({embed})

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////  VERIFICATION COMMAND  /////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (message.content.startsWith(prefix + "verif")) {
    message.delete();
   let m = new RichEmbed()

  .setColor("#36393f") 
  .setTitle('**Verification...**')
 .setTimestamp()
 message.channel.send(m).then(m => { m.delete(1500);});
    let role = message.guild.roles.find(role => role.name === 'Verified');
    if (message.channel.name !== 'verification') return message.reply('You must go to the channel #verification');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
           .setDescription('Your account has already been verified!')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Your account has been successfully verified.')
        return message.channel.send((verifyEmbed));/    }
}

	
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// NOTIFICATION COMMAND ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
if (message.content.startsWith(prefix + "notif")) {
  message.delete();
  let m = new RichEmbed()

.setColor("#36393f") 
.setTitle('**Please Wait...**')
.setTimestamp()
message.channel.send(m).then(m => { m.delete(1500);});
  let role = message.guild.roles.find(role => role.name === 'Notify');
  if (message.channel.name !== 'bot-cmd') return message.reply('You must go to the channel #bot-cmd');
  message.member.addRole(role);
  if (message.member.roles.has(role.id)) {
      let verifyEmbed = new Discord.RichEmbed()
          .setAuthor(message.member.displayName, message.author.displayAvatarURL)
          .setColor('RANDOM')
          .setDescription(`You already have ${role} role`)
      return message.channel.send(verifyEmbed).then(m => { m.delete(6500);});
  } else {
      let verifyEmbed = new Discord.RichEmbed()
          .setAuthor(message.member.displayName, message.author.displayAvatarURL)
          .setColor('RANDOM')
          .setDescription(`${role} Role has been given `)
      return message.channel.send(verifyEmbed).then(m => { m.delete(6500);});
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// MEME COMMANDS ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if (message.content.startsWith(prefix + "meme")) {
  message.delete()
let m = new RichEmbed()

.setColor("RANDOM") 
  .setTitle('**Please Wait...**')
  .setTimestamp()
  message.channel.send(m).then(m => { m.delete(1000);});
  try {const { body } = await get('https://some-random-api.ml/meme')

  let memeEmbed = new RichEmbed() 
  .setColor("RANDOM") 
  .setImage(body.image)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`);
  
  message.channel.send(memeEmbed)
  } catch (e) {
  message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`);
  } 
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////MEMBERS COUNT//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (message.content.startsWith(prefix + "count")) {
  message.delete()
  let guild = await message.guild.fetchMembers()
  let bots = guild.members.filter(m => m.user.bot).size
  let members = guild.memberCount 
  let humans = members - bots 
  let awayusers = guild.members.filter(member => member.user.presence.status === "idle")
  let onlineusers = guild.members.filter(member => member.user.presence.status === "online")
  let offlineusers = guild.members.filter(member => member.user.presence.status === "offline")  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Total Members',`We are **${message.guild.memberCount}** Members on this server`)
  .addField("Status Users", `Online Users: **${onlineusers.size}** | Away Users: **${awayusers.size}** | Offline Users: **${offlineusers.size}**`, true)
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  return message.channel.send({embed});

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////BOT UPTIME////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (message.content.startsWith(prefix + 'uptime')) {
  message.delete()
  var milliseconds = parseInt((bot.uptime % 1000) / 100),
         seconds = parseInt((bot.uptime / 1000) % 60),
         minutes = parseInt((bot.uptime / (1000 * 60)) % 60),
         hours = parseInt((bot.uptime / (1000 * 60 * 60)) % 24);

         hours = (hours < 10) ? "0" + hours : hours;
         minutes = (minutes < 10) ? "0" + minutes : minutes;
         seconds = (seconds < 10) ? "0" + seconds : seconds;
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("Uptime", hours + " hrs, " + minutes + " mins and " + seconds + " s", true)
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  return message.channel.send({embed});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////PING COMMANDS//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (message.content.startsWith(prefix + "ping")) {
  message.delete()

  let botembed = new Discord.RichEmbed()
      .setColor("#36393f")
      .setDescription(`Loading...`)
      .setTimestamp()
      message.channel.send(botembed).then(botembed => { botembed.delete(1500);});
      botembed.setAuthor(message.member.displayName, message.author.displayAvatarURL)
      botembed.setColor("#36393f")
      botembed.setDescription(`Wew, Made it over the Waves ! Discord API is `+ Math.round(bot.ping) + `ms.`)
      botembed.setTimestamp()
      message.channel.send(botembed)
  }






// if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
//    message.delete()
//    message.channel.send(`Checking Ping...`).then(m => {
//    m.edit(`Wew, Made it over the Waves ! \nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API is ` + Math.round(bot.ping) + `ms.`);
//    });
//}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////ROLE INFO COMMANDS//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





if (message.content.toLowerCase().startsWith(prefix + `roleinfo`)) {
  message.delete()
let sicon = message.guild.iconURL;
let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    if (!role) role = message.member.highestRole;


    
    const embed = new RichEmbed()
        .setColor(role.hexColor)
        .setThumbnail(sicon)
        .setDescription(`Role: ${role}`)
        .addField('Members', role.members.size, true)
        .addField('Hex Color', role.hexColor, true)
        .addField('Creation Date', role.createdAt.toDateString(), true)
        .addField('ID', role.id, true)
        .addField("Server Roles",`${message.guild.roles.array()}`,true)
        .setFooter(`Developed by Zero-Day#0001 For ${message.guild.name} Server`, bot.user.avatarURL)
        //.addField("Server Roles",` ${message.guild.roles.size} Roles  \n Names : ${message.guild.roles.array()}`,true)
        //.addField('Editable', role.editable.toString(), true)
        //.addField('Managed', role.managed.toString(), true)
    return message.channel.send({
        embed: embed
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////MUTE COMMAND//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





if (message.content.startsWith(prefix + "mute")) {
  message.delete()

  if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
    const modlog = message.guild.channels.find(channel => channel.name === 'serverlog');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("**Couldn't find user.**")
    //let reason = message.content.split(" ").slice(2).join(" ");
    //if (!reason) return message.channel.send('lease specify a reason for the mute!')
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(args[0] == "help"){
      message.reply("Usage: -mute <user>");
      return;
    }
  let muteChannel = message.guild.channels.find(`name`, "serverlog");
  if (!muteChannel) return message.channel.send('**Please create a channel with the name `serverlog`**')
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "RANDOM",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Muted User", `<@${user.id}> with ID ${user.id}`)
    .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Muted In", message.channel)
    //.addField('Reason', `${reason}`)
        modlog.send(muteembed)
  
  
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////UNMUTE COMMAND///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (message.content.startsWith(prefix + "unmute")) {
  message.delete()

  if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
  const modlog = message.guild.channels.find(channel => channel.name === 'serverlog');
  const mod = message.author;
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!user) return message.channel.send("**Couldn't find user.**")
  //let reason = message.content.split(" ").slice(2).join(" ");
  if (!user.roles.find(`name`, "Muted")) return message.channel.send('**There aren\'t in muted.**')
  //if (!reason) return message.channel.send('lease specify a reason for the mute!')
  let muterole = message.guild.roles.find(`name`, "Muted");
  if(args[0] == "help"){
    message.reply("Usage: -unmute <user>");
    return;
  }
let muteChannel = message.guild.channels.find(`name`, "serverlog");
if (!muteChannel) return message.channel.send('**Please create a channel with the name `serverlog`**')

  if (!muterole) {
      try {
          muterole = await message.guild.createRole({
              name: "Muted",
              color: "RANDOM",
              permissions: []
          })
          message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
              });
          });
      } catch (e) {
          console.log(e.stack);
      }
  }


  let mutetime = args[1];

  await (user.removeRole(muterole.id));
  const muteembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("UnMuted User", `<@${user.id}> with ID ${user.id}`)
  .addField("UnMuted By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("UnMuted In", message.channel)
      modlog.send(muteembed)


}

 
  





  





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////  REMIND  /////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





if (message.content.startsWith(prefix + "remind")) {
  message.delete()

  let reminderTime = args[0];
  if (!reminderTime) return message.channel.send(`Specify a time for me to remind you. Usage: ${prefix}remind 15min any text or code`);

  let reminder = args.slice(1).join(" ");

  let remindEmbed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
      .setTitle(`**Time: ${reminderTime}**`)
      .setDescription(`**Reminder: ${reminder}**`)
      .setFooter(`Developed by Zero-Day#0001 `, message.guild.avatarURL)
      .setTimestamp();

  message.channel.send(remindEmbed);


  setTimeout(function() {
      let remindEmbed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
          .setFooter(`Developed by Zero-Day#0001 `)
          .setDescription(`**Reminder: ${reminder}**`)
          .setTimestamp()

      message.channel.send(remindEmbed);
  }, ms(reminderTime));

}






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////LOCKDOWN CHANNEL/////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  if (message.content.startsWith(prefix + "lockdown")) {
    message.delete()
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have `MANAGE_MESSAGES` permission.")
  if (!client.lockit) client.lockit = [];
  let time  = args.join(" ");
  let validUnlocks = ["release", "unlock" , "rel" , "ul"];
  const perms = message.member.hasPermission("MANAGE_MESSAGES");
 if (!perms) return message.channel.send("Sorry, you must have `MANAGE_MESSAGES` permission.")
  if (!time) return message.channel.send("You must set a duration for the lockdown in either hours, minutes or seconds.");

    if (message.author.id === config.ownerid) {
message.channel.overwritePermissions(message.author, {
  SEND_MESSAGES: true
})}
  
  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send("Channel Unlocked");
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send("Channel Unlocked")).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////SMOKING///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      


      if (cmd === `${prefix}smoke`) {
        message.delete()
        return message.channel.send("**Smoking!**").then(async msg => {
            setTimeout(() => {
                msg.edit('🚬');
            }, 600);
            setTimeout(() => {
                msg.edit('🚬 ☁ ');
            }, 800);
            setTimeout(() => {
                msg.edit('🚬 ☁☁ ');
            }, 1000);
            setTimeout(() => {
                msg.edit('🚬 ☁☁☁ ');
            }, 1100);
            setTimeout(() => {
                msg.edit('🚬 ☁☁☁');
            }, 1200);
            setTimeout(() => {
                msg.edit('🚬 ☁☁');
            }, 1300);
            setTimeout(() => {
                msg.edit('🚬 ☁');
            }, 1400);
            setTimeout(() => {
                msg.edit(`**Finished smoking!**`);
            }, 1500);
            setTimeout(() => {
                msg.delete(`**Finished Smoking!**`);
            }, 6000);
        });
    }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////SLOT MACHINE///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

    if (message.content.startsWith(prefix + "slot")) {
      message.delete()
    
  
      let slots = ["🍎", "🍌", "🍒", "🍓", "🍈","🍇","🍑","🍐"];
      let result1 = Math.floor((Math.random() * slots.length));
      let result2 = Math.floor((Math.random() * slots.length));
      let result3 = Math.floor((Math.random() * slots.length));
      let name = message.author.displayName;
      let aicon = message.author.displayAvatarURL;
  
      if (slots[result1] === slots[result2] && slots[result3]) {
          let wEmbed = new Discord.RichEmbed()
              .setFooter(message.author.tag,aicon)
              .addField('You Won ! ', slots[result1] + slots[result2] + slots[result3], true)
              .setColor("RANDOM");
          message.channel.send(wEmbed);
      } else {
          let embed = new Discord.RichEmbed()
              .setFooter(message.author.tag,aicon)
              .addField('You Lost !', slots[result1] + slots[result2] + slots[result3], true)
              .setColor("RANDOM");
          message.channel.send(embed);
      }
  
  }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////CREATE INVITATION////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if (message.content.startsWith(`${prefix}invite`)) {
  message.delete()
if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**Permanent Invite Link**: ${invite}`);
    message.channel.send(embed);
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// STRAWPOLL //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (message.content.startsWith(`${prefix}poll`)) {
if (!message.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
  message.channel.send('Invalid permissions.');
  return;
}
  
  // Check for input
  if (!args[0]) return message.channel.send('**Usage: `-poll string`**');
  
  // Create Embed
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(args.join(' '))
      .setTitle(`Poll Has Been Started!`);
      embed.setFooter("React to Vote. Started by " + message.author.tag)
      .setTimestamp()
      
  let msg = await message.channel.send(embed)
      .then(function (msg) {
          msg.react("✅"); //Only add two reacts
          msg.react("❎");
          message.delete({timeout: 1000});
          }).catch(function(error) {
          console.log(error);
      });
};
 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////  NSFW  /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (message.content.startsWith(`${prefix}nsfw`)) {
  message.delete()
  if (!message.channel.nsfw) 
  return message.channel.send("You can use this command only on `nsfw` channels");
  const lewdembed = new Discord.RichEmbed()
  .setColor(`RANDOM`)
  .setAuthor(message.author.username, `${message.author.avatarURL}`)
  .setThumbnail("https://i.goopics.net/vEdyb.jpg")
  .addField(`__**NSFW Commands:**__`,`[**${prefix}4k**]() **> Shows you nsfw contents**\n[**${prefix}gif**]() **> Shows you nsfw contents**\n[**${prefix}milf**]() **> Shows you nsfw contents**\n[**${prefix}pussy**]() **> Shows you nsfw contents**\n[**${prefix}hentai**]() **> Shows you nsfw contents**\n[**${prefix}public**]() **> Shows you nsfw contents**\n[**${prefix}cosplay**]() **> Shows you nsfw contents**\n[**${prefix}random**]() **> Shows you nsfw contents**\n`)
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp();
  message.channel.send(lewdembed);
  
  }






if (message.content.startsWith(`${prefix}hentai`)) {
message.delete()
if (!message.channel.nsfw) 
return message.channel.send("You can use this command only on `nsfw` channels");
superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif')
.end((err, response) => {
const lewdembed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setImage(response.body.url)
.setColor(`RANDOM`)
.setFooter("To see all NSFW command type [-nsfw]")//("text"+ message.author.tag)
.setFooter("Requested by " + message.author.tag)
.setTimestamp();
message.channel.send(lewdembed);
})
}







if (cmd === `${prefix}4k`) {
message.delete()
if (!message.channel.nsfw) 
return message.channel.send("You can use this command only on `nsfw` channels");
      
var subreddits = [
'NSFW_Wallpapers','SexyWallpapers','HighResNSFW','nsfw_hd','UHDnsfw'
]
var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
      
randomPuppy(sub)
.then(url => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter("To see all NSFW command type [-nsfw]")//("text"+ message.author.tag)
.setTimestamp()
.setImage(url);
message.channel.send({embed});
});
}





if (cmd === `${prefix}gif`) {
message.delete()
if (!message.channel.nsfw) 
return message.channel.send("You can use this command only on `nsfw` channels");
            
var subreddits = [
"NSFW_GIF","nsfw_gifs","porninfifteenseconds","porn_gifs","nsfw_Best_Porn_Gif","adultgifs"
]
var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
            
randomPuppy(sub)
.then(url => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter("To see all NSFW command type [-nsfw]")//("text"+ message.author.tag)
.setTimestamp()
.setImage(url);
message.channel.send({embed});
});
}




if (cmd === `${prefix}pussy`) {
message.delete()
if (!message.channel.nsfw) 
return message.channel.send("You can use this command only on `nsfw` channels");
                  
var subreddits = [
'pussy','rearpussy','simps','vagina','MoundofVenus','PerfectPussies','spreading'
]
var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
                  
randomPuppy(sub)
.then(url => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter("To see all NSFW command type [-nsfw]")//("text"+ message.author.tag)
.setTimestamp()
.setImage(url);
message.channel.send({embed});
});
}





if (cmd === `${prefix}public`) {
message.delete()
if (!message.channel.nsfw) 
return message.channel.send("You can use this command only on `nsfw` channels");
                        
var subreddits = [
'naughtyinpublic','gwpublic','exposedinpublic','beachgirls'
]
var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
                        
randomPuppy(sub)
.then(url => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter("To see all NSFW command type [-nsfw]")//("text"+ message.author.tag)
.setTimestamp()
.setImage(url);
message.channel.send({embed});
});
}


      
if (cmd === `${prefix}cosplay`) {
message.delete()
if (!message.channel.nsfw) 
return message.channel.send("You can use this command only on `nsfw` channels");

var subreddits = [
'nsfwcosplay','cosplayonoff','cosporn','cosplayboobs'
]
var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
                              
randomPuppy(sub)
.then(url => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter("To see all NSFW command type [-nsfw]")//("text"+ message.author.tag)
.setTimestamp()
.setImage(url);
message.channel.send({embed});
});
}



if (cmd === `${prefix}milf`) {
  message.delete()
  if (!message.channel.nsfw) 
  return message.channel.send("You can use this command only on `nsfw` channels");
  
  var subreddits = [
  'milf','amateur_milfs','NotTeenNotMilf'
]
  var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
                                
  randomPuppy(sub)
  .then(url => {
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setFooter("To see all NSFW command type [-nsfw]")//("text"+ message.author.tag)
  .setTimestamp()
  .setImage(url);
  message.channel.send({embed});
  });
  }



  




  if (cmd === `${prefix}random`) {
    message.delete()
    if (!message.channel.nsfw) 
    return message.channel.send("You can use this command only on `nsfw` channels");
    
    var subreddits = [
  '60fpsporn','AmateurArchives','AsianHotties','AsianNSFW','AsiansGoneWild','BDSM','BDSMcommunity','BigBoobsGW','Bondage','Bottomless_Vixens','BustyPetite',
  'Camwhores','ChangingRooms','CollegeAmateurs','CuteModeSlutMode','FestivalSluts','FlashingGirls','GWCouples','GWNerdy','GirlsFinishingTheJob','GirlsHumpingThings',
  'GirlswithNeonHair','GoneWild','GoneWildTube','GoneWildplus','HappyEmbarrassedGirls','Hotchickswithtattoos','IndianBabes','NSFWFunny','NSFW_GIF','NSFW_HTML5',
  'NSFW_Japan','NSFW_Snapchat','O_faces','Ohlympics','OnOff','PetiteGoneWild','SheLikesItRough','StraightGirlsPlaying','Tgirls','TipOfMyPenis','TittyDrop',
  'WatchItForThePlot','WouldYouFuckMyWife','WtSSTaDaMiT','adorableporn','altgonewild','amateur','amateurcumsluts','anal','analgw','ass','asshole','assinthong',
  'asstastic','bigasses','bimbofetish','blowjobs','boltedontits','bonermaterial','boobbounce','boobies','boobs','burstingout','buttplug','candidfashionpolice',
  'celebnsfw','christiangirls','collegesluts','creampies','cuckold','cumcoveredfucking','cumfetish','cumsluts','curvy','datgap','deepthroat','dirtygaming','dirtypenpals',
  'dirtysmall','distension','downblouse','exxxtras','facedownassup','fitgirls','freeuse','funsized','gettingherselfoff','gifsgonewild','ginger','girlsinyogapants',
  'girlskissing','girlswithglasses','gonemild','gonewildaudio','gonewildcolor','gonewildcouples','gonewildcurvy','gonewildsmiles','gonewildstories','gore','grool',
  'gwcumsluts','hentai','highresNSFW','holdthemoan','homegrowntits','homemadexxx','hotwife','hugeboobs','hugedicktinychick','iWantToFuckHer','innie','jilling','juicyasians',
  'ladybonersgw','latinas','legalteens','lesbians','lingerie','lipsthatgrip','milf','nsfw','nsfw2','nsfw411','nsfw_gifs','nsfw_videos','nsfwcelebarchive','nsfwcosplay',
  'nsfwhardcore','nsfwoutfits','onherknees','palegirls','passionx','pawg','pokies','popping','porn','porn_gifs','porninfifteenseconds','pornvids','publicflashing','pussy',
  'quiver','randomactsofblowjob','randomsexiness','realasians','realgirls','rearpussy','redheads','rule34','rule34_comics','sexyfrex','simps','squirting','stacked','stockings',
  'strugglefucking','suctiondildos','suicidegirls','thick','tightdresses','tinytits','trashyboners','treesgonewild','twingirls','unashamed','upskirt','volleyballgirls','voluptuous',
  'watchpeopledie','wifesharing','workgonewild','xsmallgirls','yogapants'
  ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
                                  
    randomPuppy(sub)
    .then(url => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setFooter("To see all NSFW command type [-nsfw]")//("text"+ message.author.tag)
    .setTimestamp()
    .setImage(url);
    message.channel.send({embed});
    });
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////GET AVATAR/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//if(cmd === `${prefix}avatar`){

//{
 // message.delete()
//const embed = new Discord.RichEmbed()
//.setColor("RANDOM")
//.setTitle(`**Your Profil Picture**`)
//.setThumbnail(message.author.avatarURL)
//.setFooter("Requested by "+ message.author.tag)
//.setTimestamp()
//message.channel.send({embed});
//  }};


if (message.content.startsWith(prefix + 'avatar')) {
  message.delete()
  if (args.join(" ") == "") {
    message.channel.send({embed: {
      color: 6291711,
      description: `${message.author} **you need mention a user for this command! Syntax: -avatar @USER.**`
    }});
    return;
  } else {
    let user = message.mentions.users.first(); 
    let image = user.displayAvatarURL; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`${user.username}#${user.discriminator}`)  
        .setThumbnail(image)
        .setFooter("Requested by "+ message.author.tag)
    message.channel.send(embed); 
  }
  }





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////RANK SYSTEM NEED REWORK/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      
        if (message.content.startsWith(prefix + "rank")) {
          message.delete()
          if (!userData[message.author.id]) {
            userData[message.author.id] = {Money:0,Xp:0,Level:0}
          }
             var mentionned = message.mentions.users.first();
        
              var x5bzm;
              if(mentionned){
                  var x5bzm = mentionned;
              } else {
                  var x5bzm = message.author;
                  
              }
          fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
            if (err) console.log(err);
          });
          var CulLevel = Math.floor(0.80 * Math.sqrt(userData[message.author.id].Xp +1));
          if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
          let pEmbed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setThumbnail(message.author.avatarURL)
          .addField("Rank", userData[message.author.id].Level)
          .addField("Xp",Math.floor(userData[message.author.id].Xp),true)
          .setFooter("Requested by " + message.author.tag)
          .setTimestamp()
          message.channel.send(pEmbed);
        }
        if (!userData[message.author.id]) {
          userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
          }
        
          fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
            if (err) console.log(err);
          })
        userData[message.author.id].Xp+= 0.80;
        userData[message.author.id].Money+= 0.80;
        
      


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////FUN TROLL COMMAND/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if(cmd === `${prefix}finsheur`){
  message.delete()
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Finsheur #Sac a Merde", "https://i.goopics.net/vbxr9.png")
.setTitle("Finsheur est encore parti se coucher comme un Gros Sac")
.setFooter("Requested by " + message.author.tag)
.setTimestamp()
 message.channel.send({embed});
}};
/////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}nekho`){
  message.delete()
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("NekhoEU #AnnaPolina", "https://i.goopics.net/1xDZN.png")
.setTitle("Nekho a encore une connexion de merde. Merci Orange!")
.setFooter("Requested by " + message.author.tag)
.setTimestamp()
 message.channel.send({embed});
}};
//////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}globe`){
  message.delete()
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("GL0l3e #MiaMalkova", "https://i.goopics.net/mkdlW.png")
.setTitle("Je crois que Gl0l3e a repérer un mito!")
.setFooter("Requested by " + message.author.tag)
.setTimestamp()
 message.channel.send({embed});
}};
//////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}zeroday`){
  message.delete()
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Zero-Day #KrystalBoyd", "https://i.goopics.net/KaAby.png")
.setTitle("Fuck Take-Two Interactive and Rockstar Games")
.setFooter("Requested by " + message.author.tag)
.setTimestamp()
 message.channel.send({embed});
}};
/////////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}sweaz`){
  message.delete()
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Sweaz #Gotaga", "https://i.goopics.net/dkY9J.png")
.setTitle("Sweaz c'est encore fait braquer et a trouver la mort")
.setFooter("Requested by " + message.author.tag)
.setTimestamp()
  message.channel.send({embed});
}};
////////////////////////////////////////////////////////////////////////////////////////
if(cmd === `${prefix}sopra`){
  message.delete()
{

  const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Sopra #CopperArmy", "https://i.goopics.net/Y0jqg.png")
.setTitle("Mais la si je veux je vais jusqu'au Platine mais la flemme")
.setFooter("Requested by " + message.author.tag)
.setTimestamp()
  message.channel.send({embed});
}};



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////COMMAND HELP/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if (message.content.toLowerCase().startsWith(prefix + `help`)) {
  message.delete()
  const embed = new Discord.RichEmbed()
  .setAuthor(bot.user.username, `${bot.user.avatarURL}`)
  .setColor("RANDOM")
  .setDescription(`**Hello! I'm ${bot.user.username} The Discord bot for super cool stuff and more! Here are my commands:**`)
  .addField(`__Tickets__`, `[**${prefix}new**]() **> Opens up a new ticket and tags the Support Team**\r[**${prefix}close**]() **> Closes a ticket that has been resolved or been opened by accident**\n[**${prefix}report**]() **> Report a member** **|** **-report [user] [reason]**`)
  .addField(`__Fun__`, `[**${prefix}say**]() **> Send embed message**\n[**${prefix}slot**]() **> Fruits slot machine**\n[**${prefix}rank**]() **> Shows your rank**\n[**${prefix}nsfw**]() **> Shows you all nsfw commands**\n[**${prefix}avatar**]() **> Shows your profil picture**\n[**${prefix}smoke**]() **> Smoke a cigarette**\n[**${prefix}meme**]() **> Get random meme**\n[**${prefix}anime**]() **> Get anime information** **|** **-anime [title]**\n[**${prefix}remind**]() **> That allows you to set reminders**\n[**${prefix}gtacmd**]() **> Shows you all GTA V in game commands**\n[**${prefix}yesorno**]() **> Yes or no command using superagent**\n[**${prefix}weather**]() **> Get weather information |** **-weather [London] or [citycode]**\n`)
  .addField(`__Misc__`, `[**${prefix}poll**]() **> To create a reaction poll**\n[**${prefix}rate**]() **> To rate an service in rating channel**\n[**${prefix}help**]() **> Shows you this help menu**\n[**${prefix}shop**]() **> To see the shop**\n[**${prefix}invite**]() **> Create invitation link**\n[**${prefix}steam**]() **> Get search results from Steam |** **-steam [game title]**\n[**${prefix}google**]() **> Get search results from Google |** **-google [search string]**\n[**${prefix}youtube**]() **> Get search results from Youtube |** **-youtube [search string]**`)
  .addField(`__Manager__`, `[**${prefix}verif**]() **> To get verified role**\n[**${prefix}clear**]() **> Clear all messages**\n[**${prefix}encrypt**]() **> Encrypt a message**\n[**${prefix}decrypt**]() **> Decrypt a message**\n[**${prefix}adminsay**]() **> Send embed as administrator**\n[**${prefix}setstream**]() **> Change bot activity**\n`)
  .addField(`__Moderator__`, `[**${prefix}ban**]() **> Ban a member |** **-ban [user] [reason]**\n[**${prefix}kick**]() **> Kick a member |** **-kick [user] [reason]**\n[**${prefix}mute**]() **> Mute a member |** **-mute [user] [reason]**\n[**${prefix}unmute**]() **> Unmute a member |** **-unmute [user] [reason]**\n[**${prefix}lockdown**]() **> Lock a channel with optional timer |** **-lockdown [time]**`)
  .addField(`__Information__`, `[**${prefix}ping**]() **> Pings the bot to see how long it takes to react**\n[**${prefix}count**]() **> Get the server member count**\n[**${prefix}uptime**]() **> Get bot uptime**\n[**${prefix}botinfo**]() **> Get bot information**\n[**${prefix}servinfo**]() **> Get server information**\n[**${prefix}roleinfo**]() **> Get role information |** **-roleinfo [role]**\n[**${prefix}userinfo**]() **> Get user information |** **-userinfo [user]**\n`)
  .setFooter(`Developed by Zero-Day#0001 For ${message.guild.name} Server`)
  message.channel.send({ embed: embed });
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////GTA V COMMANDS/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (message.content.toLowerCase().startsWith(prefix + `gtacmd`)) {
  message.delete()
  const embed = new Discord.RichEmbed()
  .setAuthor(bot.user.username, `${bot.user.avatarURL}`)
  .setColor("RANDOM")
  .setDescription(`Hello! I'm **${bot.user.username}** The Discord bot for super cool stuff and more! Here are my commands for GTA V Online:`)
  .addField(`General Commands`, `!weapons\n!money <on/off>\n!spawn vehicle <hash/model/name>\n!spawn ped <hash/model/name>\n!spawn object <hash/model/name>\n!spawn bodyguard <count>\n!explodesession`)
  .addField(`Vehicle Commands (Close-by)`, `!vehicle repair\n!vehicle boost\n!vehicle jump\n!vehicle upgrade\n`)
  .addField(`Give Global Commands`, `!copsturnblind <on/off>\n!offtheradar <on/off>`)
  .addField(`Weather/Time Commands`, `!weather day\n!weather night\n!weather clear\n!weather snow\n!weather halloween`)
  .setFooter(`Developed by Zero-Day#0001 For ${message.guild.name} Server`)
  message.channel.send({ embed: embed });
}



////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////SEND EMBED//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////




  if(message.content.startsWith(prefix + "say")) {
  message.delete()
  const args = message.content.split(" ").slice(1);
  const thingtoEcho = args.join(" ")
  const embed = new Discord.RichEmbed();
  embed.setColor("RANDOM")
  embed.setDescription(thingtoEcho)
  embed.setDescription(thingtoEcho)
  embed.setDescription(thingtoEcho)
  embed.setDescription(thingtoEcho)
  embed.setFooter("Send by " + message.author.tag)
  embed.setTimestamp()
  message.channel.sendMessage({embed})
}





if(message.content.startsWith(prefix + "adminsay")) {
  message.delete()
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have `MANAGE_MESSAGES` permission.")
  const args = message.content.split(" ").slice(1);
  const thingtoEcho = args.join(" ")
  const embed = new Discord.RichEmbed();
  embed.setColor("RANDOM")
  embed.setDescription(thingtoEcho)
  embed.setDescription(thingtoEcho)
  embed.setDescription(thingtoEcho)
  embed.setDescription(thingtoEcho)
  message.channel.sendMessage({embed})
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////BOT STATUS//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//if (message.content.startsWith(prefix + 'setgame')) {
  //message.delete();
  //if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
  //let args = message.content.split(" ").slice(1);
  //let game = args.join(" ");
  //bot.user.setGame(game);
  //  const embed = new Discord.RichEmbed()
   // .setColor('RANDOM')
   // .setDescription(`Playing now : **${game}**`)
  //  .setTitle("Bot status successfully changed")
 //   .setFooter("Requested by " + message.author.tag)
 //   .setTimestamp()
 //   message.channel.send({embed})
//}




//var argresult = args.join(' ');



//if (message.content.startsWith(prefix + 'setwatch')) {
//  message.delete();
 // if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
 // bot.user.setActivity(argresult, {type: 'WATCHING'})
 //    console.log('setwatch' + argresult);
    //message.channel.sendMessage(`Watch Now: **${argresult}**`)
 //   const embed = new Discord.RichEmbed()
  //  .setColor('RANDOM')
  //  .setDescription(`Watching Now : **${argresult}**`)
  //  .setTitle("Bot status successfully changed")
  //  .setFooter("Requested by " + message.author.tag)
  //  .setTimestamp()
 //   message.channel.send({embed})
//}


var argresult = args.join(' ');

if (message.content.startsWith(prefix + 'setstream')) {
   message.delete();
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
  bot.user.setGame(argresult, "https://www.twitch.tv/nigger");
    console.log('setstream' + argresult);
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`Streaming now : **${argresult}**`)
    .setTitle("Bot status successfully changed")
    .setFooter("Requested by " + message.author.tag)
    .setTimestamp()
    message.channel.send({embed})
} 


//if (message.content.startsWith(prefix + 'setlisten')) {
//  message.delete();
 // if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
 // bot.user.setActivity(argresult , {type:'LISTENING'});
//  console.log('setlisten' + argresult);
  //message.channel.sendMessage(`Watch Now: **${argresult}**`)
//  const embed = new Discord.RichEmbed()
 // .setColor('RANDOM')
//  .setDescription(`Listening now : **${argresult}**`)
//  .setTitle("Bot status successfully changed")
//  .setFooter("Requested by " + message.author.tag)
 // .setTimestamp()
//  message.channel.send({embed})
//}  





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////OPEN TICKET///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (message.content.toLowerCase().startsWith(prefix + `new`)) {
  message.delete()
  if (message.channel.name !== 'bot-cmd') return message.channel.send({embed: {
    color: 6291711,
    description: `${message.author} You must go to the channel **#bot-cmd**.`
  }}); //message.reply('You must go to the channel #bot-cmd');
  const reason = message.content.split(" ").slice(1).join(" ");
  if (!message.guild.roles.exists("name", "Supports")) return message.channel.send(`This server doesn't have a \`Supports\` role, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
  if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send({embed: {
    color: 6291711,
    description: `${message.author} You already have a ticket open.`
  }}); //message.channel.send(`You already have a ticket open.`);
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
      const embedcreate = new Discord.RichEmbed()
      .setColor("RANDOM")
      //.setAuthor(message.author.avatarURL)
      .setDescription(`${message.author} **Your ticket has been created #${c.name}.**`)
      .setFooter('Go to this one and try explain why you opened this ticket')
      .setTimestamp();
      message.channel.send({ embed: embedcreate });
      //message.channel.send(`${message.author} Your ticket has been created, #${c.name}.`);
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
      .setTimestamp();
      c.send({ embed: embed });
  }).catch(console.error);
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////CLOSE TICKET//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

if (message.content.toLowerCase().startsWith(prefix + `close`)) {
  message.delete()
  if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send({embed: {
    color: 6291711,
    description: `${message.author} You can't use the \`close\` command outside of a \`ticket channel\`.`
  }});

  const closeembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`${message.author} Are you sure? Once confirmed, you cannot reverse this action!\rTo confirm, type: \`yes\``)
  .setFooter('This will time out in 20 seconds and be cancelled.')
  .setTimestamp();
  message.channel.send({ embed: closeembed })
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'yes', {
      max: 1,
      time: 20000,
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////   SHOP   //////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if(cmd === `${prefix}shop`){
  message.delete()
{   
  
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('Stealth Drop 10M/sec (Social Club Account Required).',"[5€ = 200 Millions 10M/sec Max Stats + Unlock all](https://www.paypal.me/ZeroDay78/5)\r\r[10€ = 400 Millions 10M/sec Max Stats + Unlock all](https://www.paypal.me/ZeroDay78/10)\r\r[15€ = 800 Millions 10M/sec Max Stats + Unlock all](https://www.paypal.me/ZeroDay78/15)\r\r[20€ = 25 Billions 10M/sec Max Stats + Unlock all + Rank 800 :globe_with_meridians:](https://www.paypal.me/ZeroDay78/20)\r\r[25€ = 50 Billions 10M/sec Max Stats + Unlock all + Rank 800 :globe_with_meridians:](https://www.paypal.me/ZeroDay78/25)\r\rDonation Click [**__Here__**](https://www.paypal.me/ZeroDay78/)")
  .setThumbnail("https://hacktuces.net/wp-content/uploads/2017/06/dollars-gta-V-300x300.png")
  .setTitle("Contact only admin meet in-game to buy")
  .setFooter(`Developed by Zero-Day#0001 For ${message.guild.name} Server`)
  .setTimestamp()
  message.channel.send({embed});
}}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////RATING COMMAND///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if(cmd === `${prefix}rate`){
  message.delete()
{     
  const embed = new Discord.RichEmbed()
  .addField("**Rate The Services**","[**__Max Stars: 5__**](https://discord.gg/Ya7unwV)\r:star:Bad\r\r:star::star:Yeah...\r\r:star::star::star:Good\r\r:star::star::star::star:Very good\r\r:star::star::star::star::star:Excellent\r\rTo rate the Service Use: **-rate1** **-rate2** **-rate3** **-rate4** **-rate5**")
  .setColor('RANDOM')
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  message.channel.send({embed});
}}

////////////////////////////////////////////////

if(cmd === `${prefix}rate1`){
  message.delete()
{     
  const embed = new Discord.RichEmbed()
  .setTitle("***Very Bad....***:star:")
  .setColor('#0D7EFF')
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  message.channel.send({embed});
}}

////////////////////////////////////////////////

if(cmd === `${prefix}rate2`){
  message.delete()
{     
  const embed = new Discord.RichEmbed()
  .setTitle("***Yeah....***:star::star:")
  .setColor('#0D7EFF')
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  message.channel.send({embed});
}}

///////////////////////////////////////////////

if(cmd === `${prefix}rate3`){
  message.delete()
{     
  const embed = new Discord.RichEmbed()
  .setTitle("***Good***:star::star::star:")
  .setColor('#0D7EFF')
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  message.channel.send({embed});
}}

///////////////////////////////////////////////

if(cmd === `${prefix}rate4`){
  message.delete()  
{     
  const embed = new Discord.RichEmbed()
  .setTitle("***Very good***:star::star::star::star:")
  .setColor('#0D7EFF')
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  message.channel.send({embed});
}}

///////////////////////////////////////////////

if(cmd === `${prefix}rate5`){
  message.delete()
{     
  const embed = new Discord.RichEmbed()
  .setTitle("***Excellent***:star::star::star::star::star:")
  .setColor('#0D7EFF')
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  message.channel.send({embed});
}}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////KICK USER////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  if(cmd === `${prefix}kick`){
    message.delete()

 

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("**Can't find user!**");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("**This person can't be kicked!**");
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You don't have `KICK_MEMBERS` permission.**");
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////BAN USER/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  if(cmd === `${prefix}ban`){
    message.delete()



    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("**Can't find user!**");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You don't have `BAN_MEMBERS` permission.**");
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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////REPORT USER////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////CLEAR CHANNEL/////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (message.content.startsWith(prefix + "clear")) {
  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
    color:  6291711,
    description: `${message.author} **You don't have MANAGE_MESSAGE permission.**`,
    footer: {
    text: `${message.author.tag} with ID: ${message.author.id} Tried to clear #${message.channel.name} channel`
      }
  }});
  if(!args[0]) return message.channel.send({embed: {
    color:  6291711,
    description: `${message.author} **Invalid number specified.\r Argument should be a number between 2 and 1000.**`,
    footer: {
    text: `${message.author.tag} with ID: ${message.author.id} Tried to clear #${message.channel.name} channel`
      }
    }}).then(msg => msg.delete(8000));
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send({embed: {
      color:  6291711,
      description: `${message.author} **${args[0]} Messages have been deleted.**`,
      footer: {
      text: `${message.author.tag} with ID: ${message.author.id} deleted ${args[0]} messages.`
        }
      }}).then(msg => msg.delete(4000));
  
});

}
 
                                
          

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////GOOGLE  YOUTUBE RESEARCH/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if(message.content.startsWith(prefix +'google')){
  message.delete()
       
  let args = message.content.split(" ");
  args.shift();
  const search = args.join("+");
  
  var searchembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail("https://i.goopics.net/lnjxw.png")
  .addField("Result of your Research:", `[Result of your Research from Google](https://www.google.fr/search?q=${search})`)
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  message.channel.send(searchembed);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if(message.content.startsWith(prefix +'youtube')){
  message.delete()
       
  let args = message.content.split(" ");
  args.shift();
  const search = args.join("+");
  var ytembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail("https://i.goopics.net/P2Yyn.png")
  .addField("Result of your Research:", `[Result of your Research from Youtube](https://www.youtube.com/results?search_query=${search})`)
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  message.channel.send(ytembed);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
////////////////////////////////////////////////////////////////GET WEATHER INFORMATION/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    if (message.content.startsWith(prefix + 'weather'))  { 
      message.delete()
    
    if(!message.guild) return;
    
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
    if (err) message.channel.send(err);
  
    
    if (result === undefined || result.length === 0) {
        message.channel.send(`**Please enter a valid location. Exemple: \`-weather London\`**`) 
        return;
    }
  
    var current = result[0].current; 
    var location = result[0].location; 
  
    
    const embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`) 
        .setAuthor(`Weather For ${current.observationpoint}`) 
        .setThumbnail(current.imageUrl) 
        .setColor('RANDOM') 
        .addField('Time Zone :',`UTC${location.timezone}`, true)
        .addField('Degree Type :',`${location.degreetype}°`, true)
        .addField('Température :',`${current.temperature} C°`, true)
        .addField('Winds :',current.windspeed,true)
        .addField('Humidity :', `${current.humidity}%`, true)
        .setFooter("Requested by " + message.author.tag)
        .setTimestamp()
        message.channel.send({embed});
  });
  }




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////SERVEUR INFORMATION/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





if(cmd === `${prefix}servinfo`){
  message.delete()
  let botCount = message.guild.members.filter(m=>m.user.bot).size
  let memberCount = [message.guild.memberCount] - [botCount]
  let sicon = message.guild.iconURL;
  message.guild.fetchBans().then(bans => {
  var bansSize = bans.size;
  let serverembed = new Discord.RichEmbed()
  .setDescription("You can join my server for help [here](https://discord.gg/6Sju2ZQ).")
  .setColor('RANDOM')
  .setThumbnail("https://i.goopics.net/GQxev.png")
  .setTitle(`${message.guild.name}`)
  .addField('Region',`**➥** ${message.guild.region}`,true)
  .addField('Role Count',`**➥** ${message.guild.roles.size} Roles`,true)
  .addField('Member Count',`**➥** ${message.guild.memberCount} Members`,true)
  //.addField(`Online Members`, `**➥** ${message.guild.members.filter(m=>m.presence.status == 'online').size}`, true)
	//.addField(`Idle Members`, `**➥** ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`, true)
  //.addField(`Dnd Members`, `**➥** ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`, true)
  //.addField(`Offline Members`, `**➥** ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`, true)
  .addField('Text Channel',`**➥** ${message.guild.channels.filter(m => m.type === 'text').size} Channels`,true)
  .addField('Voice Channel',`**➥** ${message.guild.channels.filter(m => m.type === 'voice').size} Channels`,true)
  .addField("Emoji", `**➥** ${message.guild.emojis.size}`,true)
  .addField(`Bot Count`, `**➥** ${botCount}`, true)
  .addField(`Ban Amount`, `**➥** ${bansSize}`, true)
  .addField(`Last Member`, `**➥** ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)}`, true)
  .addField('Level of Verification', `**➥** ${message.guild.verificationLevel}`,true)
  .addField('Owner',`**➥** ${message.guild.owner}`,true)
  .addField('Server ID',`**➥** ${message.guild.id}`,true)
  .addField('Creation Date',`**➥** ${message.guild.createdAt.toLocaleString()}`)
  .setFooter(`Developed by Zero-Day#0001 For ${message.guild.name} Server`, bot.user.avatarURL)
  .setTimestamp()

  return message.channel.send(serverembed);
})
};




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////BOT INFORMATION///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if (message.content.startsWith(prefix + 'botinfo')) {
  message.delete()
  var milliseconds = parseInt((bot.uptime % 1000) / 100),
    seconds = parseInt((bot.uptime / 1000) % 60),
    minutes = parseInt((bot.uptime / (1000 * 60)) % 60),
    hours = parseInt((bot.uptime / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  const embed = new Discord.RichEmbed()
  .setAuthor(bot.user.username, `${bot.user.avatarURL}`)
  .setColor("RANDOM")
  .addField(`Main Developer`, `**➥** Zero-Day#0001`, true)
  .addField(`Awesome Contributors`, `**➥** Finsheur#3212`, true)
  .addField(`Memory Usage`, `**➥** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("Node Version", `**➥** ${process.version}`, true)
  .addField('Discord-js', `**➥** ${Discord.version}`,true)
  .addField('Bot Latency', `**➥** ${bot.pings[0]}ms`, true)
  .addField("Bot Uptime", `**➥** ${hours}hrs ${minutes}mins and ${seconds}s`, true)
  .addField('Bot Prefix', `**➥** ${prefix}`, true)
  .setThumbnail("https://i.goopics.net/GQxev.png", true)
  .setDescription('You can join my server for help [here](https://discord.gg/6Sju2ZQ).')
  .setFooter(`Developed by Zero-Day#0001 For ${message.guild.name} Server`, bot.user.avatarURL)
  .setTimestamp()
  return message.channel.send({embed});
}



 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////GET USER INFO/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





if(message.content.startsWith("-userinfo")) {
  message.delete()
  if(!message.channel.guild) return message.reply('*******************************');

let member = message.mentions.members.first();
if(!member)
return message.reply("**Please mention a valid member of this server.**");

 var mentionned = message.mentions.users.first();
var mentionavatar;
if(mentionned){
var mentionavatar = mentionned;
} else {
var mentionavatar = message.author;

}
//member.roles.map(roles => 
let embed = new Discord.RichEmbed()
.setColor(`RANDOM`)
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("Username",`**➥** <@` + `${mentionavatar.id}` + `>`, true)                           //-userinfo @
.addField('Status', `**➥** ${message.author.presence.status}`, true)
.addField('Account Creation',`**➥** ${mentionavatar.createdAt.toLocaleString()}`, true)
.addField("Game", `**➥** ${member.presence.game ? member.presence.game.name : 'None'}`, true)
.addField("Joined Server", `${moment.utc(member.joinedAt).format('MMMM Do YYYY, HH:mm:ss')}`, true)
.addField("Roles:", member.roles.map(roles => `${roles}`).join(', '), true)
//.addField('Last Message', message.author.lastMessage)
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)
.setTimestamp()
   
message.channel.sendEmbed(embed);

}
});





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////DELETE CREATE CHANNEL LOGS//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





bot.on("channelCreate", async channel => {
	var logs = channel.guild.channels.find(c => c.name === 'serverlog');
	if (!logs) return console.log("Can't find serverlog channel.");
	const cembed = new Discord.RichEmbed()
		.setTitle("Channel Created")
		.setColor("RANDOM")
    .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just created!`)
		.setTimestamp(new Date());
	logs.send(cembed)
});

bot.on("channelDelete", async channel => {
	var logs = channel.guild.channels.find(c => c.name === 'serverlog');
	if (!logs) return console.log("Can't find serverlog channel.");
	const cembed = new Discord.RichEmbed()
		.setTitle("Channel Deleted")
		.setColor("RANDOM")
    .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just deleted!`)
		.setTimestamp(new Date())
  logs.send(cembed)


});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
