let handler = async(m, { conn, text, participants }) => {
let teks = `*|โโโชใ ๐ฐ๐๐๐๐๐๐๐๐ ๐๐๐๐๐ ใโชโโ|*\n\nโฒ *๐ด๐๐๐๐๐๐:* ${text ? text : '๐๐๐ ๐๐๐๐๐๐๐ ๐๐'}\n\n`
for (let mem of participants) {
teks += `เฟโก๏ธ @${mem.id.split('@')[0]}\n` }
teks += `\nโ ยฉ๐๐๐๐๐ก๐๐ต๐๐ก โ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, {quoted: m})
}
handler.command = /^(invocar|tagall)$/i
handler.group = true
handler.admin = true
module.exports = handler
