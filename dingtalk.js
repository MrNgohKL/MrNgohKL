const express = require("express");
const app = express()

app.listen(3000, () => {
  console.log("starting...");
})

app.get("/", (req, res) => {
  res.send("Loading...");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", message => {
  if(message.content === "fuck") {console.log(message.author.username, "is asking me about u")
    message.channel.send("stfu")
  }
}
}
)
client.login(process.env.token)
