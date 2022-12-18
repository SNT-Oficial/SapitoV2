let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `

║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║*🎆𝖧𝗈𝗅𝖺 ${taguser} 𝖢𝗈𝗆𝗈 𝖾𝗌𝗍𝖺𝗌?*
║ *Bot Activo ✅*
║ *Bot Uso Público ✅*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
`.trim()
let buttons = [
{ buttonId: '#owner', buttonText: { displayText: '🐸 CREADOR 🐸' }, type: 1 },
{ buttonId: '#bot lechita', buttonText: { displayText: '🍆 Pene 🍆' }, type: 1 },
{ buttonId: '#menu', buttonText: { displayText: '🐎 menu 🐎' }, type: 1 }]
let buttonMessage = {
image: fs.readFileSync('./Menu2.jpg'),
caption: menu.trim(),
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
title: '👑 𝑺𝒊𝒎𝒑𝒍𝒆 𝑺𝒂𝒑𝒊𝒕𝒐 𝑩𝒐𝒕 👑',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `https://github.com/Micasatio/SAPITO-`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(estado|stado|bro?|activo|condition|status|sii|\?)$/i
handler.fail = null
module.exports = handler
