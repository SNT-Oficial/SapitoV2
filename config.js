//============= Datos del Bot =============//

global.owner = ['595983186566']
global.packname = 'âª'
global.author = 'ððð¡ðð¥ð _ð¹ð ð¥ ðð: âï¸ððð'
global.wm = 'ð¸ SÍaÍpÍiÍtÍoÍ BÍoÍtÍ ð¸'
global.wait = '*[â] Æá´ÊÉ¢á´É´á´á´, á´É¢á´á´Êá´á´ á´É´ á´á´á´á´É´á´á´...*'

//============= urlButtons =============//

global.textUrlbot = 'ÉªÉ´ê±á´á´É¢Êá´á´'
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
