let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
*ミ💖 Hola estimado usuario 💖彡*
*ミ🤖 Estado del Bot 🤖彡*
*=> Bot activo ✔️*
*=> Bot uso público ✔️*
`.trim(), '©Sapito_Bot - Bot', '🔷️ MENÚ 🔷', `${usedPrefix}menu`, '🔶️ ¿Nos besamos? 🔶️', `${usedPrefix}bot nos besamos?`, '💠️ FreeFire 💠️', `${usedPrefix}tts es una mierda de juego`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|puto|estate|state|stado|stats)$/i
module.exports = handler
