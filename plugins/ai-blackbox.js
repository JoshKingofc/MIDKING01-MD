/*/

const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "blackboxai",
    alias: ["blackai","blackbox"], 
    react: "🧠",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://api.davidcyriltech.my.id/blackbox?q=${q}`)
console.log(data);
return reply(`${data.message}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
