//============= Datos del Bot =============//

global.owner = ['595983186566']
global.packname = '➪'
global.author = '𝕊𝕒𝕡𝕚𝕥𝕠_𝔹𝕠𝕥 𝐁𝐘: ☃︎𝑆𝑁𝑇 '
global.wm = '🐸 S͟a͟p͟i͟t͟o͟ B͟o͟t͟ 🐸 _hola 👋 te invito a unirte a los grupos de_ *Sapito_Bot*

_Grupo 1_ https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrC

_Grupo 2_ https://chat.whatsapp.com/GxxpMawzPaW6MR0p2vH432

_Grupo 3_ https://chat.whatsapp.com/I1vjFTvfZQbJI4aw0Vj5dk

_Grupo 4_ https://chat.whatsapp.com/Lu01IGq2bd73PvofLwFmv5

       *Te DIVERTIRAS MUCHOOOO* 𖨆 '
global.wait = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*'

//============= urlButtons =============//

global.textUrlbot = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.linkUrlbot = "https://www.instagram.com/ilmanhdyt_"

//=========================================================================//

global.DeveloperMode = 'false' 
global.linkGC = []
global.mods = [] 
global.prems = [] 
global.APIs = { 
nrtm: 'https://nurutomo.herokuapp.com',
xteam: 'https://api.xteam.xyz',
nzcha: 'http://nzcha-apii.herokuapp.com',
dzx: 'https://api.dhamzxploit.my.id',
zahir: 'https://zahirr-web.herokuapp.com' }
global.APIKeys = { 
'https://api.xteam.xyz': 'd90a9e986e18778b',
'https://zahirr-web.herokuapp.com': 'zahirgans' }
global.lolkeysapi = ['85faf717d0545d14074659ad']
global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.multiplier = 9999 
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright("Se actualizo el archivo 'config.js'"))
delete require.cache[file]
require(file)})
