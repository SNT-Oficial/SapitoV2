// ๐๐ฆ๐ช๐ญ๐ฉ๐ข ๐๐๐ญ๐ฆ๐ฑ๐ฌ ๐๐ฌ๐ฑ   ๐ธโ๐ณโ๐น
let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './menu1.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
โญโโใ โซ๏ธโซ๏ธโซ๏ธโซ๏ธโซ๏ธโซ๏ธโซ๏ธโซ๏ธ ใโโฎ
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโช *๐๐ง๐๐๐บ ${taguser} ๐ข๐๐๐ ๐พ๐๐๐บ๐?*
โ
โโช *๐ถ๐๐๐๐๐๐ ๐ท๐๐ ๐ต๐๐ก:* ๐ธโ๐ณโ๐นโ
โโช *๐๐ข๐๐๐๐ ๐ท๐๐ ๐ถ๐๐๐๐๐๐ ๐ท๐๐ ๐ต๐๐ก:* +595983186566
โ
โโช *๐๐๐๐๐๐๐ ๐๐ ๐๐๐:* ${usedPrefix}
โโช *๐๐ ๐ข๐๐๐๐* ${taguser}
โโช *๐๐๐๐๐๐ ๐ด๐๐ก๐๐ฃ๐:* ????
โโกโกโกโกโกโกโกโกโกโกโกโกโก
โฐโโโกโซ๏ธโซ๏ธโซ๏ธโซ๏ธโซ๏ธโซ๏ธโซ๏ธโซ๏ธโโโโฏ
โโโโโโโโโโโโโโโ
โ *< ๐ช๐๐๐๐๐๐๐ >*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ เถฌโโ๏ธ _a_
โฃ เถฌโโ๏ธ _${usedPrefix}estado_
โฃ เถฌโโ๏ธ _${usedPrefix}dog_
โฃ เถฌโโ๏ธ _${usedPrefix}meme_
โฃ เถฌโโ๏ธ _${usedPrefix}logos_
โฃ เถฌโโ๏ธ _${usedPrefix}runtime_
โฃ เถฌโโ๏ธ _${usedPrefix}infohost_
โฃ เถฌโโ๏ธ _${usedPrefix}on welcome_
โฃ เถฌโโ๏ธ _${usedPrefix}off welcome_
โฃ เถฌโโ๏ธ _${usedPrefix}ig *[url]*_
โฃ เถฌโโ๏ธ _${usedPrefix}mediafire *[url]*_
โฃ เถฌโโ๏ธ _${usedPrefix}tiktok *[url]*_
โฃ เถฌโโ๏ธ _${usedPrefix}sticker *[url]*_
โฃ เถฌโโ๏ธ _${usedPrefix}attp *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}attp2 *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}attp3 *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}ttp *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}ttp2 *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}ttp3 *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}ttp4 *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}ttp5 *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}wikipedia *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}google *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}imagen *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}video *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}invocar *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}ytsearch *[texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}getaud *[url]*_
โฃ เถฌโโ๏ธ _${usedPrefix}getvid *[url]*_
โฃ เถฌโโ๏ธ _${usedPrefix}ytmp3 *[url]*_
โฃ เถฌโโ๏ธ _${usedPrefix}ytmp4 *[url]*_
โฃ เถฌโโ๏ธ _${usedPrefix}tts *[lenguaje] [texto]*_
โฃ เถฌโโ๏ธ _${usedPrefix}toimg *[sticker]*_
โฃ เถฌโโ๏ธ _${usedPrefix}sticker *[imagen]*_
โฃ เถฌโโ๏ธ _${usedPrefix}tourl *[imagen]*_
โฃ เถฌโโ๏ธ _${usedPrefix}tourl *[video]*_
โฃ เถฌโโ๏ธ _${usedPrefix}tourl *[audio]*_
โฃ เถฌโโ๏ธ _${usedPrefix}fat *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}bass *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}blown *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}deep *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}fast *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}robot *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}slow *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}tupai *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}vibra *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}nightcore *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}earrape *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}reverse *[nota de voz]*_
โฃ เถฌโโ๏ธ _${usedPrefix}smooth *[nota de voz]*_
   *๐ฝ๐ข๐๐๐๐ *
โฃ เถฌโโ๏ธ _${usedPrefix}puta_
โฃ เถฌโโ๏ธ _${usedPrefix}perra_
โฃ เถฌโโ๏ธ _${usedPrefix}insano_
โฃ เถฌโโ๏ธ _${usedPrefix}gay_
โฃ เถฌโโ๏ธ _${usedPrefix}lesbiana_
โฃ เถฌโโ๏ธ _${usedPrefix}doxear
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โ *< ๐๐ค๐๐๐ >*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ เถฌโใท๏ธ _${usedPrefix}update_
โฃ เถฌโใท๏ธ _${usedPrefix}banchat_
โฃ เถฌโใท๏ธ _${usedPrefix}unbanchat_
โโโโโโโโโโโโโโโ
`.trim()
let buttons = [
{ buttonId: '#owner', buttonText: { displayText: '๐ธ CREADOR ๐ธ' }, type: 1 },
{ buttonId: '#bot cogemos?', buttonText: { displayText: '๐ค COGEMOS? ๐ค' }, type: 1 },
{ buttonId: '#logo', buttonText: { displayText: '๐ LOGOS ๐' }, type: 1 }]
let buttonMessage = {
image: fs.readFileSync('./menu1.jpg'),
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
title: '๐ ๐บ๐๐๐๐๐ ๐บ๐๐๐๐๐ ๐ฉ๐๐ ๐',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `https://github.com/Micasatio/SAPITO-`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|menudo|speed|๐๐๐๐|menรบ|menu|help|\?)$/i
handler.fail = null
module.exports = handler
