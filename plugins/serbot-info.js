/*
[ Jadibot-By Aiden ]
*/
async function handler(e,{conn:a,usedPrefix:t}){if(global.clientes.length<1)return e.reply("Actualmente no hay sub-bots activos...");let l=[...new Set([...global.clientes.filter(e=>e.user&&"close"!==e.state).map(e=>e.user)])];await a.getName(l.map(e=>e.jid)[0]),await e.reply("*[ Lista de Sub-Bots ]*\n\n~El creador del bot no se hace responsable en lo absoluto de lo que ocurra al Bot principal y Sub-Bots!~\n\n"+l.map((e,a)=>`${a+1}. wa.me/`+e.jid.replace(/[^0-9]/g,"")+` 🪴`).join("\n"))}handler.help=["listbots"],handler.tags=["esclabot"],handler.command=/^(listbots)$/i;export default handler;
