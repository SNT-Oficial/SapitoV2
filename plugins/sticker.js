const { sticker } = require('../lib/sticker.js');
const uploadFile = require('../lib/uploadFile.js');
const uploadImage = require('../lib/uploadImage.js');
const { webp2png } = require('../lib/webp2mp4.js');
let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime))
if ((q.msg || q).seconds > 11) return m.reply('*[βππππβ] π¬π πππππ ππ πππππ πππππ πππ ππ 10 ππππππππ*')
let img = await q.download?.()
if (!img) throw `*[βππππβ] ππππππππ π ππ π£ππππ, ππππππ π¨ πππ πππ‘π ππ ππππππ ππ π’ππ πππππ  π»π¬πΉπ΄π°π΅π¨πͺπ°πΆπ΅ .πππ πΈπ ππ’ππ π πππ ππππ£πππ‘πππ ππ π π‘πππππ, ππππ πππ ππππππ π π’π ππ ππ πππππππ ${usedPrefix + command}*`
let out
try {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) stiker = await sticker(img, false, global.packname, global.author)
}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*[βππππβ] πΈπ ππππππ / πππΏ / πΏπππ ππ ππ  π£πππππ, ππ π‘ππππππππππ πππ ππππππ / πππΏ / πΏπππ ππππ π ππ .πππ, π¬π±π¬π΄π·π³πΆ: #s https://telegra.ph/file/0dc687c60765e98de2.jpg*')
}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
else throw '*[βππππβ] πΊππππ, πππ’ππππ π’π πππππ, π£π’πππ£π π πππ‘πππ‘ππ. ππ πΎππ£πππ πππ ππππππ π π’π π£ππππ, ππππππ π πππ πππ‘π ππ ππππππ ππ π’ππ ππππππ π»π¬πΉπ΄π°π΅π¨πͺπ°πΆπ΅ .πππ πΈπ ππ’ππ π πππ ππππππππππ ππ π ππππππ*'
}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['general']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
module.exports = handler
const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
