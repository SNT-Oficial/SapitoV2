// ππ¦πͺπ­π©π’ πππ­π¦π±π¬ ππ¬π±   πΈβπ³βπΉ
let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/a.mp3'
conn.sendFile(m.chat, vn, 'a.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Βͺ|a|A/
handler.command = /^(a|Βͺ|A?$)/

module.exports = handler
