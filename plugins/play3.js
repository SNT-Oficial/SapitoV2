let fs = require('fs')
let fetch = require('node-fetch')
let { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] ππππππ ππ ππ πππππππ ππππ‘πππ‘π, πππ πππ£ππ ππππππ π ππ πππππππ πππ  ππ ππππππ/πππ‘π’ππ ππ π’ππ πππππππ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} Los Meketrefes *`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
let caption = `π *πππ‘π’ππ:* ${title}
π *π·ππ ππππππππ:* ${description}
π *ππ’πππππππ:* ${publishedTime}
β *π·π’ππππππ:* ${durationH}
π *πππ π‘ππ :* ${viewH}
π *πππΏ:* ${url}`.trim()
let buttons = [
{ buttonId: `${usedPrefix}getaud ${url}`, buttonText: { displayText: 'πππππ' }, type: 1 },
{ buttonId: `${usedPrefix}getvid ${url}`, buttonText: { displayText: 'πππππ' }, type: 1 }]
let buttonMessage = {
image: await fetch(thumbnail),
caption: caption,
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'π πΊπππππ πΊπππππ π©ππ π',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `https://github.com/Micasatio/SAPITO-`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
} catch {
m.reply('*[βππππβ] πΈππππ, ππ’πππ£π π πππ‘πππ‘ππππ πππ  π‘ππππ :)*')
}}
handler.command = /^(video|vΓ­deo)$/i
module.exports = handler
