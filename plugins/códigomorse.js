let handler = async (m, { conn }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
m.reply(`
El puto eres tú idiota 


_Sapito-Bot_ ${uptime}
`.trim())}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(puto|puto|bot puto|puto bot|putobot)$/i
module.exports = handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
