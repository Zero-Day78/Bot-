const botconfig = require("./botconfig.json");                             ///////////////////////////////////
const Discord = require("discord.js");                                     ////////////// V 1.6  /////////////
const weather = require('weather-js');                                     ///////////////////////////////////
const bot = new Discord.Client({disableEveryone: true});
var client = new Discord.Client();
var prefix = `-`;
const fs = require("fs");
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const randomPuppy = require('random-puppy');
const superagent = require("snekfetch");
const ms = require("ms");
const config = require ("./botconfig.json");


//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////TEST CONSTANCE////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

//nsfw random
//nsfw milf
//cmd help
////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////TOKEN/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////



bot.login(process.env.TOKEN);





////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////BOT ACTIVITY//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////




bot.on("ready", async () => {
  console.log(`${bot.user.username} Bot Ready!`);

bot.user.setActivity("Playing v1.6 -help", {type: "STREAMING", url: "https://www.twitch.tv/nigger" });
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////GUILD MEMBERS ADD REMOVE////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.on('guildMemberAdd', member => {
  let logChannel = member.guild.channels.find('name', 'welcome');
  
  let logEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**Welcome to ${member.guild.name} server**`)
  .setDescription(`**We are now  ${member.guild.memberCount} Members on this server**<@${member.user.id}>`)
  .setThumbnail(member.user.displayAvatarURL)
  .setFooter(`If you want any help type [-help]`)
  .setTimestamp()
  logChannel.send(logEmbed);
});



  bot.on('guildMemberRemove', member => {
  let logChannel = member.guild.channels.find('name', 'serverlog');
  
    let logEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`<@${member.user.id}> As left the Server`)
    .setTimestamp()
    .setFooter(member.user.id, member.user.displayAvatarURL)
    
    
    logChannel.send(logEmbed);
  });


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




  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.delete()
    message.channel.send(`Checking Ping...`).then(m => {
    m.edit(`Wew, Made it over the Waves ! \nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API is ` + Math.round(bot.ping) + `ms.`);
    });
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////MUTE COMMAND//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  

if (message.content.startsWith(prefix + "mute")) {
  if (message.channel.type === "dm") return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
  if(message.mentions.users.size === 0) {
    return message.channel.send("**Please mention a valid member of this server.**");
  }
  let muteMember = message.guild.member(message.mentions.users.first());
  if(!muteMember) {
    return message.channel.send("**Couldn't find user.**");
  }
  if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) {
    return message.reply("**I don't have `MANAGE_GUILD` permission.**").catch(console.error);
  }
  message.channel.overwritePermissions(muteMember, { SEND_MESSAGES: false }).then(member => {
      message.channel.send(`**${muteMember.user.username} **As been muted in** #${message.channel.name}**`)
  })
  }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////UNMUTE COMMAND///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 
  if (message.content.startsWith(prefix + "unmute")) {
      if (message.channel.type === "dm") return;
      if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
      if(message.mentions.users.size === 0) {
        return message.channel.send("**Please mention a valid member of this server.**");
      }
      let unmuteMember = message.guild.member(message.mentions.users.first());
      if(!unmuteMember) {
        return message.channel.send("**Couldn't find user.**");
      }
      if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) {
        return message.reply("**I don't have `MANAGE_GUILD` permission.**").catch(console.error);
      }
      message.channel.overwritePermissions(unmuteMember, { SEND_MESSAGES: true }).then(member => {
          message.channel.send(`**${unmuteMember.user.username} **As been unmuted in** #${message.channel.name}**`)
      })
      }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////TESTANCE/////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////  NSFW  /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  




if (message.content.startsWith(`${prefix}nsfw`)) {
  message.delete()
  if (!message.channel.nsfw) 
  return message.channel.send("You can use this command only on `nsfw` channels");
  const lewdembed = new Discord.RichEmbed()
  .setColor(`RANDOM`)
  .setAuthor(bot.user.username, `${bot.user.avatarURL}`)
  .setThumbnail("https://i.goopics.net/vEdyb.jpg")
  .addField(`NSFW Commands:`,`[${prefix}4k]() > Shows you nsfw contents\n[${prefix}gif]() > Shows you nsfw contents\n[${prefix}milf]() > Shows you nsfw contents\n[${prefix}pussy]() > Shows you nsfw contents\n[${prefix}hentai]() > Shows you nsfw contents\n[${prefix}public]() > Shows you nsfw contents\n[${prefix}cosplay]() > Shows you nsfw contents\n[${prefix}random]() > Shows you nsfw contents\n`)
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



if(cmd === `${prefix}avatar`){

{
  message.delete()
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(`**Your Profil Picture**`)
.setThumbnail(message.author.avatarURL)
.setFooter("Requested by "+ message.author.tag)
.setTimestamp()
message.channel.send({embed});
  }};


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
.setAuthor("Finsheur #ElsaJean", "https://i.goopics.net/vbxr9.png")
.setTitle("Finsheur est en train de Rush l'Objectif avec sa Ash! R.I.P")
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
  .setDescription(`Hello! I'm ${bot.user.username} The Discord bot for super cool stuff and more! Here are my commands:`)
  .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident\n[${prefix}report]() > Report a member | **-report [user] [reason]**`)
  .addField(`Fun`, `[${prefix}say]() > Send embed message\n[${prefix}slot]() > Fruits slot machine\n[${prefix}rank]() > Shows your rank\n[${prefix}nsfw]() > Shows you all nsfw commands\n[${prefix}avatar]() > Shows your profil picture\n[${prefix}smoke]() > Smoke a cigarette\n[${prefix}weather]() > Get weather information | **-weather [London] or [citycode]**\n`)
  .addField(`Misc`, `[${prefix}rate]() > To rate an service in rating channel\n[${prefix}help]() > Shows you this help menu \n[${prefix}shop]() > To see the shop\n[${prefix}invite]() > Create invitation link\n[${prefix}google]() > Get search results from Google | **-google [search string]**\n[${prefix}youtube]() > Get search results from Youtube | **-youtube [search string]**`)
  .addField(`Manager`, `[${prefix}clear]() > Clear all messages\n[${prefix}setlisten]() > Change bot activity\n[${prefix}setgame]() > Change bot activity\n[${prefix}setwatch]() > Change bot activity\n[${prefix}setstream]() > Change bot activity\n`)
  .addField(`Moderator`, `[${prefix}ban]() > Ban a member | **-ban [user] [reason]**\n[${prefix}kick]() > Kick a member | **-kick [user] [reason]**\n[${prefix}mute]() > Mute a member | **-mute [user] [reason]**\n[${prefix}unmute]() > Unmute a member | **-unmute [user] [reason]**\n[${prefix}lockdown]() > Lock a channel with optional timer | **-lockdown [time]**`)
  .addField(`Information`, `[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}count]() > Get the server member count\n[${prefix}uptime]() > Get bot uptime\n[${prefix}botinfo]() > Get bot information\n[${prefix}servinfo]() > Get server information\n[${prefix}userinfo]() > Get user information | **-userinfo [user]**\n`)
  .setFooter('Developed by Zero-Day#0001')
  message.channel.send({ embed: embed });
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////GTA V COMMANDS/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (message.content.toLowerCase().startsWith(prefix + `commands`)) {
  message.delete()
  const embed = new Discord.RichEmbed()
  .setAuthor(bot.user.username, `${bot.user.avatarURL}`)
  .setColor("RANDOM")
  .setDescription(`Hello! I'm **${bot.user.username}** The Discord bot for super cool stuff and more! Here are my commands for GTA V Online:`)
  .addField(`General Commands`, `!weapons\n!money <on/off>\n!spawn vehicle <hash/model/name>\n!spawn ped <hash/model/name>\n!spawn object <hash/model/name>\n!spawn bodyguard <count>\n!explodesession`)
  .addField(`Vehicle Commands (Close-by)`, `!vehicle repair\n!vehicle boost\n!vehicle jump\n!vehicle upgrade\n`)
  .addField(`Give Global Commands`, `!copsturnblind <on/off>\n!offtheradar <on/off>`)
  .addField(`Weather/Time Commands`, `!weather day\n!weather night\n!weather clear\n!weather snow\n!weather halloween`)
  .setFooter('Developed by Zero-Day#0001')
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





if(message.content.startsWith(prefix + "bypass")) {
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
  embed.setTimestamp()
  message.channel.sendMessage({embed})
}




if(message.content.startsWith(prefix + "devsay")) {
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




if (message.content.startsWith(prefix + 'setgame')) {
  message.delete();
  if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
  let args = message.content.split(" ").slice(1);
  let game = args.join(" ");
  bot.user.setGame(game);
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`Playing now : **${game}**`)
    .setTitle("Bot status successfully changed")
    .setFooter("Requested by " + message.author.tag)
    .setTimestamp()
    message.channel.send({embed})
}




var argresult = args.join(' ');



if (message.content.startsWith(prefix + 'setwatch')) {
  message.delete();
  if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
  bot.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('setwatch' + argresult);
    //message.channel.sendMessage(`Watch Now: **${argresult}**`)
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`Watching Now : **${argresult}**`)
    .setTitle("Bot status successfully changed")
    .setFooter("Requested by " + message.author.tag)
    .setTimestamp()
    message.channel.send({embed})
}




if (message.content.startsWith(prefix + 'setstream')) {
  message.delete();
  if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
  bot.user.setGame(argresult, "https://www.twitch.tv/something");
     console.log('setstream' + argresult);
    //message.channel.sendMessage(`Streaming: **${argresult}**`)
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`Streaming now : **${argresult}**`)
    .setTitle("Bot status successfully changed")
    .setFooter("Requested by " + message.author.tag)
    .setTimestamp()
    message.channel.send({embed})
} 


if (message.content.startsWith(prefix + 'setlisten')) {
  message.delete();
  if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**You don't have `MANAGE_GUILD` permission.**").catch(console.error);
  bot.user.setActivity(argresult , {type:'LISTENING'});
  console.log('setlisten' + argresult);
  //message.channel.sendMessage(`Watch Now: **${argresult}**`)
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Listening now : **${argresult}**`)
  .setTitle("Bot status successfully changed")
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  message.channel.send({embed})
}  





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////OPEN TICKET///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (message.content.toLowerCase().startsWith(prefix + `new`)) {
  message.delete()
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



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////CLOSE TICKET//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (message.content.toLowerCase().startsWith(prefix + `close`)) {
  message.delete()
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////   SHOP   //////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if(cmd === `${prefix}shop`){
  message.delete()
{   
  
  const embed = new Discord.RichEmbed()
  .addField("Simple Drop 2.5k/sec (R* Account Not Required).","[2€ = 2 Millions 2.5k/sec](https://www.paypal.me/ZeroDay78/2)\r\r[4€ = 4 Millions 2.5k/sec](https://www.paypal.me/ZeroDay78/4)\r\r[6€ = 6 Millions 2.5k/sec](https://www.paypal.me/ZeroDay78/6)\r\r[8€ = 8 Millions 2.5k/sec](https://www.paypal.me/ZeroDay78/8)\r\r[10€ = 10 Millions 2.5k/sec](https://www.paypal.me/ZeroDay78/10)")
  .setColor('#0D7EFF')
  .addField('Insane Stealth Drop 10M/sec (R* Account Required).',"[5€ = 250 Millions 10M/sec Max Stats + Unlock all + Rank 120:globe_with_meridians:](https://www.paypal.me/ZeroDay78/5)\r\r[10€ = 500 Millions 10M/sec Max Stats + Unlock all + Rank 250:globe_with_meridians:](https://www.paypal.me/ZeroDay78/10)\r\r[15€ = 20 Billions 10M/sec Max Stats + Unlock all + Rank 420:globe_with_meridians:](https://www.paypal.me/ZeroDay78/15)\r\rDonation Click [**__Here__**](https://www.paypal.me/ZeroDay78/)")
  .setThumbnail("https://hacktuces.net/wp-content/uploads/2017/06/dollars-gta-V-300x300.png")
  .setTitle("Contact only admin meet in-game to buy")
  .setFooter("Requested by " + message.author.tag)
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
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You don't have `MANAGE_MESSAGES` permissons.");
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: `${message.guild.name} Server`,
        color: 0x06DF00,
        description: `${message.author}All messages have been Deleted`,
        footer: {
          text: `Author ID: ${message.author.id}`
        }
      }}).then(msg => {msg.delete(30000)});


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
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("You can join my server for help [here](https://discord.gg/6Sju2ZQ).")
  .setColor('RANDOM')
  .setThumbnail("https://i.goopics.net/GQxev.png")
  .setTitle(`${message.guild.name}`)
  .addField('Region',`${message.guild.region}`,true)
  .addField('Role Count',`${message.guild.roles.size} Roles`,true)
  .addField('Member Count',`${message.guild.memberCount} Members`,true)
  .addField('Text Channel',`${message.guild.channels.filter(m => m.type === 'text').size} Channels`,true)
  .addField('Voice Channel',`${message.guild.channels.filter(m => m.type === 'voice').size} Channels`,true)
  .addField("Emoji", message.guild.emojis.size,true)
  .addField('Level of Verification', message.guild.verificationLevel,true)
  .addField('Owner',`${message.guild.owner}`,true)
  .addField('ID',`${message.guild.id}`,true)
  .addField('Creation Date',message.guild.createdAt.toLocaleString())
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()

  return message.channel.send(serverembed);
}



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
  .addField(`Main Developer`, `Zero-Day#0001`, true)
  .addField(`Awesome Contributors`, `Finsheur#3212`, true)
  .addField(`Memory Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("Node Version", `${process.version}`, true)
  .addField("Uptime", hours + " hrs, " + minutes + " mins and " + seconds + " s", true)
  .addField('Discord-js', `${Discord.version}`,true)
  .setThumbnail("https://i.goopics.net/GQxev.png", true)
  .setDescription('You can join my server for help [here](https://discord.gg/6Sju2ZQ).')
  .setFooter("Requested by " + message.author.tag)
  .setTimestamp()
  return message.channel.send({embed});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////CREATE INVITATION////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  if(cmd === `${prefix}invite`){
    message.delete()

                              
		message.guild.channels.get('316317809636540417').createInvite() // CHANNEL INVITATION
		.then(invite => message.author.sendMessage(`Invite Link: ${invite.url}`))
    .catch(error => message.reply(`Unable to generate invite, error: ${error}`))
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

let embed = new Discord.RichEmbed()
.setColor(`RANDOM`)
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("Username",`<@` + `${mentionavatar.id}` + `>`, true)
.addField('HashTag',"#" +  `${mentionavatar.discriminator}`, true)
.addField("ID", `${mentionavatar.id}`, true)
.addField('Account Creation',mentionavatar.createdAt.toLocaleString())
.setFooter("Requested by " + message.author.tag)
.setTimestamp()
   
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
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
