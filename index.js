const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`hi, ${client.user.username} is now online`);

    client.user.setActivity('hello world', {
    type: 'STREAMING'
});
});
client.on("message", async message => {
    const prefix = ">"
    if(message.content === prefix+"hi"){
      message.channel.send("yo whats up?");
    }
    if(message.content === "Whats up?"){
        message.channel.send("the sky");
      }
      const replys = ["309847 JACKPOT","305301 JACKPOT","268293 JACKPOT","307622","307630","304645","7844","307216","295442","287281","196232","196232","123270","307529","304522","308562","308236","293669","42069","309207","288967","149740","278674","278674","216099","227910","288462","307569","269032","209885","296540","184817","304307","139209","235899","313285","310233","168620","313671","313679 JACKPOT","303672","312179 JACKPOT","311853 JACKPOT"]
      const random = replys[Math.floor(Math.random() * replys.length)];
      if(message.content === "i am a man of culture"){
        message.channel.send(random);
      }
        
      if(message.content === prefix+"ping"){
        const msg = await message.channel.send(" wait retard ");

        msg.edit(` lmao here
        is your ping ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`);
    }
    if(message.content === "you are fucking gay"){
      message.channel.send("What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in guerrilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little clever comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo");
    }
    
    });
client.login("NzExNDYxMzU0MzUwODM3ODMx.XsEwpA.oP56fhzGcFTZmDFHx7DX_8eRiXM");

