import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[âððððâ] ð»ð¾ð ð²ð¾ð¼ð°ð½ð³ð¾ð +ð·ð¾ ð´ððð°ð½ ð³ð´ðð°ð²ðð¸ðð°ð³ð¾ð ð´ð½ ð´ððð´ ð¶ððð¿ð¾, ðð¸ ð´ð ð°ð³ð¼ð¸ð½ ð ð³ð´ðð´ð° ð°ð²ðð¸ðð°ðð»ð¾ð ððð´ ð´ð» ð²ð¾ð¼ð°ð½ð³ð¾ #enable modohorny*'
let fgif = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`*AÊÊá´Êá´á´ Y AsÊÊÊâ¥ï¸*`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `ð§¿ ððð ð¼ð¢ðððð - ð±ðð ð®`, 'jpegThumbnail': false }}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName[who]
let json = await fetch(`http://mkbot.online/api/tiktok/nsfw/nsfwtt?&apikey=${mkbotkey}`)
let jsons = await json.json()
let res = jsons.result
conn.sendButton(m.chat, `- ð±ððððððððð ð ðððððð ð¶ðððð¥µ -`, `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, res, [['ð ðð¸ð¶ðð¸ð´ð½ðð´ ð', `/${command}`]], fgif, { mentions: [who] })}
handler.command = /^(tiktokxxx)$/i
export default handler
global.mkbot = ['UfN5DLvV', 'lwSUluWz', 'KcrY8r8I', 'HSxJ72Rf', 'Gmc5DlDb', 'H6pvVPJc', 'uVAf54xz', 'wF4gTpTZ', 'nwJVzP6v']
global.mkbotkey = mkbot[Math.floor(mkbot.length * Math.random())]
