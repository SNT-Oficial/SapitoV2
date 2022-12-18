let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://cataas.com/cat')
let img = await res.buffer()
let caption = `
_hola 👋 te invito a unirte a los grupos de_ *Sapito_Bot*

_Grupo 1_ https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrC

_Grupo 2_ https://chat.whatsapp.com/GxxpMawzPaW6MR0p2vH432

_Grupo 3_ https://chat.whatsapp.com/I1vjFTvfZQbJI4aw0Vj5dk

_Grupo 4_ https://chat.whatsapp.com/Lu01IGq2bd73PvofLwFmv5

       *Te DIVERTIRAS MUCHOOOO*
`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*[❗] 𝐄𝐫𝐫𝐨𝐫*'
}}
handler.help = ['cat']
handler.tags = ['general']
handler.command = /^grupos$/i
handler.fail = null
module.exports = handler
