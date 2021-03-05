const Discord = require("discord.js");         //load the Discord.js Library
const client = new Discord.Client();           //make a new Client
require('dotenv').config();
const prefix = process.env.PREFIX;
const config = require("./config.json");       //load the config.json file
const Enmap = require("enmap")                 //load the enmap library
const canvacord = require("canvacord")         //load the canvacord library
const requireDir = require('require-dir');
const helper = require("discord.js-helper");
const bm = new helper.BotManager(client);
const ch = new helper.CommandHandler();
const colors = require('colors');
const express = require('express')
const app = express()
const php = require('php')
const { poll , pollSettings } = require('discord-poll')
const fs = require('fs')
const ms = require('ms')
 


	pollSettings.prefix = '!' //optional
	pollSettings.embedColour = '<Hex code>' //optional
	pollSettings.embedTitle = '<Title for the embed>' //optional
	pollSettings.embedDescription = '<Embeds description>' //required
	pollSettings.embedFooter = '<Embed footer>' //optional
	pollSettings.image = '<Embed image url>' //optional
	pollSettings.firstEmoji = '<emoji>' //optional
	pollSettings.secondEmoji = '<emoji>' //optional
	pollSettings.embedThumbnail = '<URL>' //optional
	poll(client, Discord);

client.on('ready', () => {
    console.log('Bot Online'.green);
});

ch.on("ready", () => {
    ch.start("./functions/");
    ch.start("./commands/");
});

client.on("ready", ()=>console.log("READY".green));  //log when the bot gets ready
client.login();